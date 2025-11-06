"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const StyleLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };
  return (
    <div className="grid grid-cols-4 lg:grid-cols-12 lg:gap-4 max-w-[1440px] mx-auto px-6 py-6 bg-blue-200 dark:bg-blue-900">
      <button className="cursor-pointer" onClick={goToHome}>
        <Image
          src="/logo_icon.svg"
          alt="Lookbook logo icon"
          width="162"
          height="85"
        />
      </button>
      {children}
    </div>
  );
};

export default StyleLayout;
