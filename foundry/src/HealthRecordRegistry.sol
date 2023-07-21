// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";

contract HealthRecordRegistry is Ownable {
    constructor() {}

    function registerRecord() public onlyOwner returns (bytes32) {
        // 
    }

    function issueRecord() public returns (bytes32) {
    }

    function _generateRecordId(
        address _issuer,
        uint32 _recordId,
        uint64 _value
    ) private pure returns (uint256) {
        return uint160(_issuer) << 96 | uint96(_recordId) << 64 | uint64(_value);
    }
}
