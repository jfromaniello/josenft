// SPDX-License-Identifier: MIT;
pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract JoseNFTs is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Jose-NFTs", "JOX") {}

    function mint(
        address receiver
        // ,
        // string memory tokenURI
    ) external onlyOwner returns (uint256) {
        _tokenIds.increment();

        uint256 newNftTokenId = _tokenIds.current();

        _mint(receiver, newNftTokenId);
        // _setTokenURI(newNftTokenId, tokenURI);

        return newNftTokenId;
    }
}
