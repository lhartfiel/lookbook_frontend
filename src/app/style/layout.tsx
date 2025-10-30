const StyleLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-12 lg:gap-4 max-w-[1440px] mx-auto px-4 py-6 bg-blue-200">
      {/* <div className="col-span-full">
        <div className="relative flex flex-wrap justify-center my-10 mx-auto"> */}
      {/* //Insert brand logo */}
      {children}
      {/* </div>
      </div> */}
    </div>
  );
};

export default StyleLayout;
