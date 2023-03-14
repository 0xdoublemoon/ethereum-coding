// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./presets/ERC721PresetMinterPauserAutoId.sol";

contract MyERC721 is ERC721PresetMinterPauserAutoId {
    constructor(string memory _name, string memory _symbol, string memory _baseTokenURI) public ERC721PresetMinterPauserAutoId(_name, _symbol,_baseTokenURI)
    {
    }
}