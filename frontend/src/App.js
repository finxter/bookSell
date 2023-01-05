import "./App.css";
import Heading from "./components/Heading";
import abi from "./BookSell.json";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { Contract } from "hardhat/internal/hardhat-network/stack-traces/model";
import Book from "./components/Book";
import Receipt from "./components/Receipt";
function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  useEffect(() => {
    const connectMetamask = async () => {
      const contractAddress = "0xede6825532dc2f6a8ac5b8dfc6874e80ae872dd4";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;
        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectMetamask();
  }, []);
  console.log(state);
  return (
    <div className="bg-black min-h-full">
      <Heading></Heading>
      <Book state={state}></Book>
      <Receipt state={state}></Receipt>
    </div>
  );
}

export default App;
