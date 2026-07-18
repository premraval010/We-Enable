import { ImageResponse } from "next/og";

export const alt = "WeEnable — Ability was never the barrier.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social share image: Ink background, coral doorway mark + tagline. */
export default function OpenGraphImage() {
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
          <svg width="76" height="76" viewBox="-6 -12 62 68">
            <path
              d="M 6 27.5 A 21.5 21.5 0 1 1 48 27.5"
              fill="none"
              stroke="#E27641"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <line x1="6" y1="27.5" x2="6" y2="44" stroke="#E27641" strokeWidth="8" strokeLinecap="round" />
            <line x1="48" y1="27.5" x2="48" y2="44" stroke="#E27641" strokeWidth="8" strokeLinecap="round" />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 46,
              fontWeight: 800,
              color: "#FDFAF6",
              letterSpacing: -1,
            }}
          >
            We<span style={{ color: "#E27641" }}>Enable</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              color: "#FDFAF6",
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 940,
            }}
          >
            Ability was never the barrier.
          </div>
          <div style={{ fontSize: 30, color: "#00B2BD", fontWeight: 600 }}>
            A global movement removing the barriers between ability and opportunity.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
