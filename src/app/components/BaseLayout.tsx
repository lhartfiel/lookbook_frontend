"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Providers } from "../providers";
import { useStyleStore } from "../state/store";
import { Barlow } from "next/font/google";
import { Footer } from "./Common/Footer";
import { ToggleMode } from "./Common/ToggleMode";
import { FavoritesLoader } from "./FavoritesLoader";
import { GoogleAnalytics } from "@next/third-parties/google";

/**
 * A base layout component that sets up the overall structure of the application, including theme management and navigation.
 * @param childItems - The child React nodes to be rendered within the layout.
 * @returns A JSX element representing the BaseLayout component.
 */

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const BaseLayout = ({ childItems }: { childItems: React.ReactNode }) => {
  const currentPath = usePathname();
  const router = useRouter();
  const { themeModeIsDark, updateThemeMode } = useStyleStore();

  useEffect(() => {
    const savedTheme = localStorage.getItem("dark-theme");
    const isDark = savedTheme === "true";
    updateThemeMode(Boolean(isDark));
  }, [updateThemeMode]);

  const handleToggle = () => {
    updateThemeMode(!themeModeIsDark);
    localStorage.setItem("dark-theme", `${!themeModeIsDark}`);
  };

  const goToHome = () => {
    router.push("/");
  };

  return (
    <html lang="en" className={`${themeModeIsDark ? "dark" : ""}`}>
      <GoogleAnalytics gaId="G-TG37RCHCK6" />
      <body
        className={`${barlow.className} antialiased bg-blue-200 dark:bg-blue-900 grid grid-cols-4 lg:grid-cols-12 grid-rows-[auto_1fr_auto] lg:gap-4 w-full xl:max-w-[1440px] mx-auto min-h-screen`}
      >
        <Providers>
          <FavoritesLoader />
          <main className="col-span-full px-6 py-6">
            <div className="col-span-12 flex justify-between h-fit text-primary-dark items-center align-start">
              {currentPath !== "/" && (
                <button className="cursor-pointer" onClick={goToHome}>
                  <Image
                    className="max-w-[120px] md:max-w-full"
                    src="/logo_icon.svg"
                    alt="Lookbook logo icon"
                    width="130"
                    height="85"
                  />
                </button>
              )}
              <span className="flex flex-nowrap items-center ml-auto">
                <p className="mr-2 font-bold dark:text-secondary text-right">
                  Light Mode
                </p>
                <ToggleMode
                  handleToggle={handleToggle}
                  showDarkMode={themeModeIsDark}
                ></ToggleMode>
                <p className="ml-2 font-bold dark:text-secondary">Dark Mode</p>
              </span>
            </div>
            {childItems}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export { BaseLayout };
