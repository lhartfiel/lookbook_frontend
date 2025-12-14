interface StyleLayoutProps {
  children: React.ReactNode;
}

const StyleLayout = ({ children }: StyleLayoutProps) => {
  return (
    <main className="grid grid-cols-4 lg:grid-cols-12 lg:gap-4 max-w-[1440px] mx-auto px-6 py-6 bg-blue-200 dark:bg-blue-900">
      {children}
    </main>
  );
};

export default StyleLayout;
