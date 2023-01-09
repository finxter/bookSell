import React, { useEffect, useState } from "react";
import ethers from "ethers";

const Receipt = ({ state }) => {
  const { contract } = state;
  const [receipts, setReceipts] = useState([]);
  useEffect(() => {
    const receiptsInfo = async () => {
      const contractReceipts = await contract.getReceipts();
      setReceipts(contractReceipts);
    };
    contract && receiptsInfo();
  }, [contract]);
  return (
    <div className="py-10">
      <h1 className="text-center text-2xl font-extrabold font-serif text-cyan-700">
        RECENT SUBSCRIBERS
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-3/4 m-auto mt-1">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                BUYER
              </th>
              <th scope="col" className="px-6 py-3">
                BOOK
              </th>
              <th scope="col" className="px-6 py-3">
                WRITER
              </th>
              <th scope="col" className="px-6 py-3">
                ADDRESS
              </th>
              <th scope="col" className="px-6 py-3">
                TIME
              </th>
            </tr>
          </thead>
          {receipts.map((receipt) => {
            return (
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td className="px-6 py-4">{receipt.name}</td>
                  <td className="px-6 py-4">{receipt.book}</td>
                  <td className="px-6 py-4">{receipt.writer}</td>
                  <td className="px-6 py-4">{receipt.buyer}</td>
                  <td className="px-6 py-4">{String(receipt.timestamp)}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Receipt;
