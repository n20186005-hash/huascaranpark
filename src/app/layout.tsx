import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" }
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.CURRENT_SITE_DOMAIN || 'huascaranpark.com'}`),
  alternates: {
    canonical: "/en",
    languages: {
      "es": "https://huascaranpark.com/es",
      "en": "https://huascaranpark.com/en",
      "zh": "https://huascaranpark.com/zh",
      "qu": "https://huascaranpark.com/qu",
      "x-default": "https://huascaranpark.com/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
