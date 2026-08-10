import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon: coral Threshold mark on a Paper background. */
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
        <svg width="128" height="128" viewBox="0 0 120 120" fill="none" stroke="#E27641">
          <path d="M26 106V57a34 34 0 0 1 68 0v49" strokeWidth="13" />
          <path d="M33 63H72" strokeWidth="11" />
          <path d="M33 87H72" strokeWidth="11" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
