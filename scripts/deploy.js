const hre = require("hardhat");

const obtainBalance = async (address) => {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
};
const printBalances = async (addresses) => {
  let id = 0;
  for (const address of addresses) {
    console.log(`Acoount ${id} Balance:`, await obtainBalance(address));
    id++;
  }
};
const printReceipts = async (receipts) => {
  for (const receipt of receipts) {
    const timestamp = receipt.timestamp;
    const name = receipt.name;
    const buyer = receipt.buyer;
    const book = receipt.book;
    const writer = receipt.writer;
    console.log(
      `Buyer Details: Name:${name},Book:${book},Writer:${writer},Address:${buyer},Time:${timestamp}`
    );
  }
};
async function main() {
  const bookSell = await hre.ethers.getContractFactory("BookSell");
  const contract = await bookSell.deploy(); //instance of the contract

  await contract.deployed();
  console.log("Contract Address:", contract.address);
  const [owner, buyer1, buyer2, buyer3] = await hre.ethers.getSigners();
  const addresses = [
    owner.address,
    buyer1.address,
    buyer2.address,
    buyer3.address,
  ];
  console.log("Initial Balance:");
  printBalances(addresses);
  const amount = { value: hre.ethers.utils.parseEther("1") };

  await contract
    .connect(buyer1)
    .buyBook("Adam", "Miracle Morning", "Hal Elrod", amount);
  await contract
    .connect(buyer2)
    .buyBook("Mike", "The Slight Edge", "Jeff Olson", amount);
  await contract
    .connect(buyer3)
    .buyBook("Peter", "Loving what is", "Byron Katie", amount);

  console.log("Last Balance:");
  await printBalances(addresses);

  const receipts = await contract.getReceipts();
  printReceipts(receipts);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
