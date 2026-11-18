import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Verde Retreat — A Quieter Place on Phu Quoc", description: "A tropical island retreat on Phu Quoc, Vietnam. Private villas, gardens and slow island experiences.", applicationName: "verde-retreat" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
