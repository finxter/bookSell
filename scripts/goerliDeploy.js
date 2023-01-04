const hre = require("hardhat");
async function main() {
  const bookSell = await hre.ethers.getContractFactory("BookSell");
  const contract = await bookSell.deploy();
  await contract.deployed();
  console.log("Contract Address:", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
