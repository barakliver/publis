import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { THEME_BOOT_SCRIPT } from "@/lib/theme";
import "./globals.css";

/**
 * The fonts ship with the app rather than being fetched from Google.
 *
 * Rubik is the exact file the image renderer uses, so a headline in the app
 * and the same headline on a rendered slide are the same shapes. Frank Ruhl
 * Libre - the first Hebrew serif cut for print - carries the large editorial
 * moments, and knows Hebrew, which an English serif does not.
 */
const rubik = localFont({
  src: "./fonts/Rubik.ttf",
  variable: "--font-rubik",
  display: "swap",
  // A variable file: declaring the range stops the browser synthesising weights.
  weight: "300 600",
  adjustFontFallback: false,
});

const frank = localFont({
  src: [
    { path: "./fonts/FrankRuhlLibre-300.ttf", weight: "300", style: "normal" },
    { path: "./fonts/FrankRuhlLibre-400.ttf", weight: "400", style: "normal" },
    { path: "./fonts/FrankRuhlLibre-500.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-frank",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Before I Do",
  description: "סבב התוכן של Before I Do",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  // The browser chrome follows the theme; both values match the --ground token.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F4F1" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0D10" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${rubik.variable} ${frank.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        {/* Runs during parsing, so the theme is right before the first paint. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
