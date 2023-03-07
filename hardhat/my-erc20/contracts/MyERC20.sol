// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./token/ERC20/ERC20.sol";

contract MyERC20 is ERC20 {
    constructor(string memory _name, string memory _symbol) public ERC20(_name, _symbol) 
    {
    }
}