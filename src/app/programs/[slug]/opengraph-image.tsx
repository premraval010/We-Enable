import { ImageResponse } from "next/og";
import { programs, getProgram } from "@/content/programs";

export const alt = "WeEnable program";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

/** Per-program social share image: Ink background, program number + tagline. */
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  const accent = program?.accent === "teal" ? "#00B2BD" : "#E27641";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#100D08",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <svg width="64" height="64" viewBox="-6 -12 62 68">
            <path d="M 6 27.5 A 21.5 21.5 0 1 1 48 27.5" fill="none" stroke="#E27641" strokeWidth="8" strokeLinecap="round" />
            <line x1="6" y1="27.5" x2="6" y2="44" stroke="#E27641" strokeWidth="8" strokeLinecap="round" />
            <line x1="48" y1="27.5" x2="48" y2="44" stroke="#E27641" strokeWidth="8" strokeLinecap="round" />
          </svg>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: "#FDFAF6", letterSpacing: -1 }}>
            We<span style={{ color: "#E27641" }}>Enable</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 26, fontWeight: 700, color: accent, letterSpacing: 1 }}>
            {program ? `${program.number} · ${program.label}` : "Programs"}
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              color: "#FDFAF6",
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            {program?.tagline ?? "Eight programs. One mission."}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
