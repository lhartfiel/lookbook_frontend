const Footer = () => {
  const date: Date = new Date();
  const year: number = date.getFullYear();
  return (
    <footer className="col-span-full text-primary-dark dark:text-light flex justify-center items-end w-full mt-auto pb-6">
      <p>&copy; {year} — The Lookbook</p>
    </footer>
  );
};

export { Footer };
