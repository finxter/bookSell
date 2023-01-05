import React, { useRef } from "react";

const Book = ({ state }) => {
  const form = useRef();
  const formData = async (event) => {
    event.preventDefault();
    const name = form.current.name.value;
    const book = form.current.book.value;
    const writer = form.current.writer.value;
  };
  return (
    <div className="mt-10">
      <form
        onSubmit={formData}
        ref={form}
        className="w-1/4 bg-slate-800 p-5 m-auto border rounded-xl"
      >
        <div className="mb-6">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="book"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Book Name
          </label>
          <input
            type="text"
            name="book"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter The book's name"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="writer"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Writer Name
          </label>
          <input
            type="text"
            name="writer"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the writer's name"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Book;
