# My ERC20

## initialize a hardhat project from scratch

```
mkdir my-erc20 && yarn init -y
```


## add hardhat package under dev

```
yarn add --dev hardhat
```


## initialize a hardhat project

```
npx hardhat
```


## add openzepplin contract

```
yarn add --dev @openzeppelin/contracts
```

Copy the ERC20 related smart contract to contracts folder and create a customized ERC20 solidity file.

```
├── token
|    └── ERC20
|        ├── extensions
|        |   └── IERCMetadata.sol
|        ├── ERC20.sol
|        └── IERC20.sol
└── utils
    └── Context.sol
```

New contract to be added.
```
// ./contracts/MyERC20.sol
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./token/ERC20/ERC20.sol";

contract MyERC20 is ERC20 {
    constructor(string memory _name, string memory _symbol) public ERC20(_name, _symbol) 
    {
    }
}

```

Add deploy script under scripts folder

```
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
```

In order to deploy the contract to a testnet

1. Apply an Alchemy account 
2. Copy api key and your test account private key to `.env` with the following format
```
ALCHEMY_API_KEY={}
PRIVATE_KEY_ADMIN={}
```
`hardhat.config.ts` will update configs accordingly.


Deploy the contract to goerli testnet

```
npx hardhat run scripts/deploy.ts --network goerli
```

Or local

```
npx hardhat run scripts/deploy.ts --network localhost
```

One convinient way to interact with the smart contract via hardhat console

```
npx hardhat console --network goerli
```

The network param is configurable. To access the local network, change `goerli` to `localhost`.
