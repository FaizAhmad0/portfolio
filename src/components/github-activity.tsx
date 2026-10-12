import { Card } from "@/components/ui/card";
import snapshot from "@/github-contributions.json";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/content";
type Day = { date: string; count: number; level: number };
function validData(value: unknown): value is { contributions: Day[] } {
  if (!value || typeof value !== "object" || !("contributions" in value) || !Array.isArray(value.contributions)) return false;
  return value.contributions.length > 0 && value.contributions.every((day: Day) => /^\d{4}-\d{2}-\d{2}$/.test(day.date) && Number.isInteger(day.count) && day.count >= 0 && Number.isInteger(day.level) && day.level >= 0 && day.level <= 4);
}
async function getContributions() {
  let days: Day[] = snapshot.contributions;
  let cached = true;
  try {
    const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${profile.username}?y=last`, { next: { revalidate: 3600 }, signal: AbortSignal.timeout(5000) });
    if (!response.ok) throw new Error("Activity unavailable");
    const data: unknown = await response.json();
    if (!validData(data)) throw new Error("Invalid contribution response");
    days = data.contributions; cached = false;
  } catch { /* The checked-in real snapshot remains available offline. */ }
  return { days: [...days].sort((a, b) => a.date.localeCompare(b.date)), cached };
}
export function ActivitySkeleton() { return <div className="activity-card flex items-center justify-center text-xs text-[var(--muted)]" role="status">Loading GitHub contributions…</div>; }
export async function GitHubActivity() {
  const { days, cached } = await getContributions();
  const total = days.reduce((sum, day) => sum + day.count, 0);
  const first = new Date(`${days[0].date}T12:00:00Z`).getUTCDay();
  const weeks = Math.ceil((first + days.length) / 7);
  const months = days.map((day, index) => ({ day, index })).filter(({ day, index }) => index === 0 || day.date.slice(0, 7) !== days[index - 1].date.slice(0, 7));
  return <Card className="activity-card gap-0 shadow-none">
    <div className="overflow-x-auto pb-1" tabIndex={0} role="region" aria-label={`GitHub contribution calendar: ${total.toLocaleString("en-US")} contributions between ${days[0].date} and ${days.at(-1)?.date}. Scroll horizontally to view all dates.`}>
      <div className="mx-auto w-fit"><div className="relative mb-2 ml-7 h-3 text-[9px] text-[var(--muted)]" style={{ width: weeks * 11 - 3 }}>{months.map(({ day, index }) => <span key={day.date} className="absolute" style={{ left: Math.floor((index + first) / 7) * 11 }}>{new Date(`${day.date}T12:00:00Z`).toLocaleDateString("en-US", { month: "short", timeZone: "UTC" })}</span>)}</div>
        <div className="flex gap-2"><div className="grid w-5 grid-rows-7 gap-[3px] text-[8px] leading-[8px] text-[var(--muted)]"><span/><span>Mon</span><span/><span>Wed</span><span/><span>Fri</span><span/></div><div className="contribution-grid" aria-hidden="true">{Array.from({ length: first }, (_, i) => <span key={`pad-${i}`} className="contribution-cell invisible"/>)}{days.map(day => <span key={day.date} className="contribution-cell" data-level={day.level} title={`${day.count} contributions on ${day.date}`}/>)}</div></div>
      </div>
    </div>
    <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-3 text-[10px] text-[var(--muted)]"><p><strong className="font-medium text-foreground">{total.toLocaleString("en-US")} contributions</strong> in this 12-month period</p><div className="flex items-center gap-1"><span className="mr-1">Less</span>{[0, 1, 2, 3, 4].map(level => <span key={level} className="contribution-cell" data-level={level}/>)}<span className="ml-1">More</span></div></div>
    <div className="mt-2 flex flex-wrap justify-between gap-2 text-[9px] text-[var(--muted)]"><span>{cached ? "Saved real activity" : "GitHub activity"} through {days.at(-1)?.date} · {cached ? "Live refresh unavailable" : "Refreshes hourly"}</span><a className="inline-flex items-center gap-1 hover:text-foreground" href={`${profile.github}?tab=overview`} target="_blank" rel="noopener noreferrer">View on GitHub <ArrowUpRight className="size-3"/></a></div>
  </Card>;
}