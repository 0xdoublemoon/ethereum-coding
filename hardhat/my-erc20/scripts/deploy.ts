import { ethers } from "hardhat";

async function main() {
  const ERC20 = await ethers.getContractFactory("MyERC20");
  const erc20 = await ERC20.deploy("MyERC20", "ME");

  await erc20.deployed();

  console.log(
    `Deployed MyERC20 to ${erc20.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
