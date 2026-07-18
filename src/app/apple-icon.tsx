import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon: coral arch on a Paper background. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FDFAF6",
        }}
      >
        <svg width="120" height="120" viewBox="-6 -12 62 68">
          <path
            d="M 6 27.5 A 21.5 21.5 0 1 1 48 27.5"
            fill="none"
            stroke="#E27641"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <line
            x1="6"
            y1="27.5"
            x2="6"
            y2="44"
            stroke="#E27641"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <line
            x1="48"
            y1="27.5"
            x2="48"
            y2="44"
            stroke="#E27641"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
