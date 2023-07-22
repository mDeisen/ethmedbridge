// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.19;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract HealthReport is Ownable, ERC721 {
  // 
  constructor() ERC721("HealthReport", "HR") {
    // solhint-disable-previous-line no-empty-blocks
  }
}
