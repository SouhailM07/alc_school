import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0A2545",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 16, height: 16, borderRadius: 999, background: "#F4B942" }} />
          <span style={{ fontSize: 28, letterSpacing: 4, color: "#F4B942" }}>DEPUIS 1995 · ALGER</span>
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, marginTop: 24 }}>
          Apprenez l&apos;anglais avec confiance.
        </div>
        <div style={{ fontSize: 30, color: "#CBD5E1", marginTop: 20 }}>
          ALC — Algerian Learning Centers · Bir Mourad Raïs
        </div>
      </div>
    ),
    { ...size }
  );
}
