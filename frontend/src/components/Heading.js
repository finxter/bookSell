import React from "react";

const Heading = () => {
  return (
    <div className="text-center">
      <h1 className="mb-4 mt-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-serif">
          BOOK STALL
        </span>
      </h1>
      <p className="font-serif font-bold text-gray-500 lg:text-3xl dark:text-cyan-600">
        FOR THE BOOK LOVERS TO READ YOUR FAVORITE BOOKS.
      </p>
      <p className="font-serif font-bold text-gray-500 lg:text-3xl dark:text-cyan-600">
        THE BEST BOOK SUBSCRIPTION SERVICE IS HERE.
      </p>
    </div>
  );
};

export default Heading;
