import type { Metadata } from "next";
import { Geist, Geist_Mono, Bungee, Anton, Chewy } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bungee = Bungee({
  weight: "400",
  variable: "--font-bungee",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const chewy = Chewy({
  weight: "400",
  variable: "--font-chewy",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PLOTTRON - Digital Comic Accelerator",
    template: "%s | PLOTTRON"
  },
  description: "Explore the digital comic universe with interactive canvas experience. Discover sci-fi stories, action adventures, and innovative digital comics in an immersive accelerator interface.",
  keywords: [
    "comic", "digital comic", "interactive comic", "PLOTTRON", 
    "manga", "sci-fi", "action", "adventure", "digital art",
    "webcomic", "interactive story", "accelerator", "innovation"
  ],
  authors: [{ name: "PLOTTRON Studio" }],
  creator: "PLOTTRON Studio",
  publisher: "PLOTTRON Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://plottron.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PLOTTRON - Digital Comic Accelerator",
    description: "Interactive digital comic experience with sci-fi stories and innovative accelerator interface",
    url: "https://plottron.com",
    siteName: "PLOTTRON",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PLOTTRON Digital Comic Accelerator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PLOTTRON - Digital Comic Accelerator",
    description: "Interactive digital comic experience with sci-fi stories",
    images: ["/og-image.jpg"],
    creator: "@plottron_studio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bungee.variable} ${anton.variable} ${chewy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
