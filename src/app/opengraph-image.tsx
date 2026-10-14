import { ImageResponse } from "next/og";
export const alt = "Faiz Ahmad — Full Stack Developer & AI Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "90px",
        background: "#080808",
        color: "#f1f0ee",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 18,
          letterSpacing: 5,
          color: "#eebf6c",
          marginBottom: 35,
        }}
      >
        DEVELOPER. BUILDER. ALWAYS CURIOUS.
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 100,
          fontWeight: 700,
          letterSpacing: -5,
        }}
      >
        Faiz Ahmad<span style={{ color: "#eebf6c" }}>.</span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 29,
          color: "#969693",
          marginTop: 20,
        }}
      >
        MERN Full Stack Developer & AI Builder
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 70,
          borderTop: "1px solid #242423",
          paddingTop: 25,
          fontSize: 21,
          color: "#eebf6c",
        }}
      >
        www.faizahmad.in
      </div>
    </div>,
    size,
  );
}
