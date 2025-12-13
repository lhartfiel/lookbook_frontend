/**
 * A footer component that displays the current year and the site name.
 * @returns A JSX element representing the Footer component with the current year.
 */

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="col-span-full text-primary-dark dark:text-light flex justify-center items-end w-full mt-auto pb-6">
      <p>&copy; {year} — The Lookbook</p>
    </footer>
  );
};

export { Footer };
