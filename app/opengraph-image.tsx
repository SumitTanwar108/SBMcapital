import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const { business, seo } = siteConfig;
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
          backgroundColor: "#16233b",
          color: "#f2f4ec",
          fontFamily: "Georgia, serif"
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#d9b54a" }}>
          {business.city} &middot; Chartered Accountants
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, marginTop: 24 }}>
          {business.displayName}
        </div>
        <div style={{ display: "flex", fontSize: 28, marginTop: 24, color: "#c7cec3", maxWidth: 900 }}>
          {seo.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
