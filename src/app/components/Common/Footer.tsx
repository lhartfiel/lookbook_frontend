const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="col-span-full text-primary-dark dark:text-light flex justify-center items-end w-full mt-auto">
      <p>&copy; {year} — The Lookbook</p>
    </footer>
  );
};

export { Footer };
