// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.19;

import "../HealthRecordRegistry.sol";

contract HealthRecordRegistryMock is HealthRecordRegistry {
    constructor() HealthRecordRegistry() {
        // 
    }

    // public version of generateRecordId
    function generateRecordId(
        address _issuer,
        uint32 _recordId,
        uint64 _value
    ) public pure returns (uint256) {
        return _generateRecordId(_issuer, _recordId, _value);
    }
}
