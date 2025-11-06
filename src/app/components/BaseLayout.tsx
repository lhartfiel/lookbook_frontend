"use client";
import { useEffect } from "react";
import { Providers } from "../providers";
import { useStyleStore } from "../state/store";
import { Barlow } from "next/font/google";
import { Footer } from "./Common/Footer";

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
        className={`${barlow.className} antialiased bg-blue-200 dark:bg-blue-900 grid grid-cols-4 lg:grid-cols-12 grid-rows-[auto_1fr_auto] lg:gap-4 w-full xl:max-w-[1440px] mx-auto min-h-screen`}
      >
        <Providers>
          <main className="col-span-full px-6 py-6">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export { BaseLayout };
