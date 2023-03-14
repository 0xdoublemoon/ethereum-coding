import { ethers } from "hardhat";
import "ipfs-api";
import { readFileSync } from "fs";
import "path";


async function main() {
    const [deployer] = await ethers.getSigners();


    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    const contractfactory = await ethers.getContractFactory("MyERC721");
    const myerc721Ins = await contractfactory.deploy("MyERC721","ME7","http://localhost:8080/");

    console.log("ERC721 address:", myerc721Ins.address);

   
    myerc721Ins.on("Transfer", async (from, to ,token) => {
      console.log("Mint token successfully, and the token id is ", String(token));

      const url = await myerc721Ins.tokenURI(token);
      console.log(`The URL of token ${token} is ${url}`);
    })

    const ipfs = require('ipfs-api')('localhost', '5001', {protocol: 'http'})
    const filecontent = readFileSync('./assets/roses.jpg');
    const filesHash= (await ipfs.add({ 
      path: "rose.jpg", 
      content: filecontent}))[0].hash

    console.log(`IPFS URL of rose.jpg is : /ipfs/${filesHash}`)

    console.log("Going to create a token with ipfs url")
    const ipfsurl = "/ipfs/" + filesHash
    myerc721Ins.mintWithTokenURI(deployer.address, ipfsurl)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
