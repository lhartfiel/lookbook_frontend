import type { Metadata } from "next";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { BaseLayout } from "./components/BaseLayout";

import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically

export const metadata: Metadata = {
  title: "Lookbook",
  description: "Your hairstyle assisant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BaseLayout children={children} />
    </>
  );
}
