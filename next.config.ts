import type { NextConfig } from "next";

/**
 * Content-Security-Policy. Kept strict; 'unsafe-inline' on styles is required
 * for Next's inlined critical CSS. No external hosts are allowed (fonts are
 * self-hosted via next/font, images are committed locally).
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'" +
    (process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""),
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    // Legacy Creating Abilities paths → WeEnable equivalents (domain migration).
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/projects", destination: "/programs", permanent: true },
      {
        source: "/project/sports",
        destination: "/programs/adaptive-sports",
        permanent: true,
      },
      {
        source: "/project/employment-support",
        destination: "/programs/employment-livelihoods",
        permanent: true,
      },
      {
        source: "/project/technology-innovation",
        destination: "/programs/digital-ai-accessibility",
        permanent: true,
      },
      {
        source: "/project/skill-development-training",
        destination: "/programs/employment-livelihoods",
        permanent: true,
      },
      { source: "/csr", destination: "/partnerships", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
