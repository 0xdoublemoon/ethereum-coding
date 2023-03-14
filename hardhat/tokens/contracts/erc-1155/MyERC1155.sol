// SPDX-License-Identifier: MIT
// pragma solidity ^0.6.0;
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract MyERC1155 is ERC1155 {
    uint256 public constant WESTIE1 = 0;
    uint256 public constant WESTIE2 = 1;

    constructor() public ERC1155("http://localhost:8082") {
        _mint(msg.sender, WESTIE1, 10**2, "");
        _mint(msg.sender, WESTIE2, 10, "");
    }
}