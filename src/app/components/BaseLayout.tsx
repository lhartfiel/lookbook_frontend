"use client";
import { useEffect, useState } from "react";
import { Providers } from "../providers";
import { useStyleStore } from "../state/store";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const { themeModeIsDark, updateThemeMode } = useStyleStore();

  useEffect(() => {
    const savedTheme = localStorage.getItem("dark-theme");
    const isDark = savedTheme === "true";
    updateThemeMode(Boolean(isDark));
  }, []);

  return (
    <html lang="en" className={`${themeModeIsDark ? "dark" : ""}`}>
      <body
        className={`${barlow.className} antialiased bg-blue-200 dark:bg-blue-900`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export { BaseLayout };
