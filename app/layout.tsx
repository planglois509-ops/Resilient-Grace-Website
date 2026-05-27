import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { MotionRoot } from "./components/MotionRoot";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://resilient-grace.com";
const SITE_TITLE = "Resilient Grace · Live a healthy, vibrant life";
const SITE_DESC =
  "Integrative recovery for people who've tried everything. Tasha Darwent guides clients through addiction, family-of-origin trauma, chronic illness, and life transitions — with whole-person care that honors body, mind, and spirit.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Resilient Grace",
  },
  description: SITE_DESC,
  keywords: [
    "integrative health coach",
    "addiction recovery",
    "family scapegoat healing",
    "chronic illness coaching",
    "trauma-informed mentor",
    "Boulder Colorado",
    "Tasha Darwent",
    "Resilient Grace",
  ],
  authors: [{ name: "Tasha Darwent" }],
  creator: "Resilient Grace LLC",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESC,
    siteName: "Resilient Grace",
    images: [
      {
        url: "/brand/logo-text.png",
        width: 1200,
        height: 1200,
        alt: "Resilient Grace · Live a healthy, vibrant life",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/brand/logo-text.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/brand/logo-graphic.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Resilient Grace",
              founder: { "@type": "Person", name: "Tasha Darwent" },
              description: SITE_DESC,
              url: SITE_URL,
              areaServed: "Worldwide (online); Boulder, CO (in-person)",
              knowsAbout: [
                "Addiction recovery",
                "Family scapegoating",
                "Chronic illness",
                "Trauma-informed mentoring",
                "Holistic nutrition",
                "Mindfulness",
              ],
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>
        <MotionRoot>{children}</MotionRoot>
      </body>
    </html>
  );
}
