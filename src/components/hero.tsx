import Image from "next/image";
import { FileText, Send } from "lucide-react";
import { Github, Instagram, Linkedin, X, Youtube } from "@/components/brand-icons";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/content";

const socials = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "X", href: profile.x, icon: X },
  { label: "YouTube", href: profile.youtube, icon: Youtube },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Instagram", href: profile.instagram, icon: Instagram },
];

export function Hero() {
  return <div className="hero-layout">
    <div className="hero-photo relative shrink-0">
      <Image src={profile.avatar} alt="Faiz Ahmad’s GitHub profile photo" fill priority sizes="(max-width: 520px) 104px, 160px" className="rounded-full object-cover"/>
    </div>
    <div className="hero-content min-w-0">
      <h1 id="hero-title" className="hero-name">Faiz Ahmad</h1>
      <div className="hero-description">
        {profile.heroLines.map(line => <p key={line}>{line}</p>)}
      </div>
      <div className="hero-actions">
        <div className="hero-socials">
          {socials.map(({ label, href, icon: Icon }) => href ? <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Faiz Ahmad on ${label}`} className="social-link"><Icon/></a> : <span key={label} className="social-link social-pending" aria-label={`${label} link not yet provided`} title={`${label} link to be added`}><Icon/></span>)}
        </div>
        <div className="hero-buttons">
          {profile.resume ? <Button asChild size="sm"><a href={profile.resume} download><FileText/>Resume / CV</a></Button> : <Button size="sm" disabled title="Resume PDF to be added"><FileText/>Resume / CV</Button>}
          <Button asChild size="sm" variant="outline"><a href="#contact"><Send/>Get in touch</a></Button>
        </div>
      </div>
    </div>
  </div>;
}
