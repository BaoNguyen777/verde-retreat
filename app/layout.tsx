import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verde Retreat — Find Your Elsewhere in Phu Quoc",
  description: "A quieter kind of island escape. Discover thoughtful private villas, tropical gardens and slow-living experiences at Verde Retreat, Phu Quoc, Vietnam.",
  applicationName: "Verde Retreat",
  openGraph: {
    title: "Verde Retreat — Find Your Elsewhere",
    description: "Thoughtful villas, untamed gardens and the gentle rhythm of Phu Quoc.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
