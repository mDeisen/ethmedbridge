// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.19 <=0.9.0;

import { BaseScript } from "./Base.s.sol";
import { HealthRecordRegistry, RecordData } from "../src/HealthRecordRegistry.sol";

/// @dev See the Solidity Scripting tutorial: https://book.getfoundry.sh/tutorials/solidity-scripting
contract DeployTestRecords is BaseScript {
    function run() public broadcast {
        uint256 delpoyerPrivateKey = vm.envUint("PK");
        vm.startBroadcast(delpoyerPrivateKey);

        HealthRecordRegistry healthRecordRegistry = HealthRecordRegistry(0x5a2EbDEb26aAADBefBaC05AAc21e19e268D3CF6A);

        // 1 - Red Blood Cells
        // 2 - White Blood Cells
        // 3 - Hemoglobing
        // 4 - Hematocrit
        // 5 - Platelets

        // Issuer
        address adibou2 = 0x4D5BA70D2f7bD991BF09A5979e5F5e7dCAD04679;
        
        // Adibou & Daniel
        address adibou = 0x346AF5374Ec6d008d3788036E01eB5d5d17c8819;
        address daniel = 0xD0C7D352c78FE4A5C8E93A4782B353c6d87E9c8B;

        uint64 redBloodCellCount = 620000;
        uint64 whiteBloodCount = 510000;
        uint64 hemoglobin = 14000000;
        uint64 hematocrit = 4200000;
        uint64 platelets = 18000000;

        // Full CBC to adibou.eth
        healthRecordRegistry.issueRecord(RecordData(adibou2, 1, redBloodCellCount), adibou);
        healthRecordRegistry.issueRecord(RecordData(adibou2, 2, whiteBloodCount), adibou);
        healthRecordRegistry.issueRecord(RecordData(adibou2, 3, hemoglobin), adibou);
        healthRecordRegistry.issueRecord(RecordData(adibou2, 4, hematocrit), adibou);
        healthRecordRegistry.issueRecord(RecordData(adibou2, 5, platelets), adibou);

        // Full CBC to Daniel
        healthRecordRegistry.issueRecord(RecordData(adibou2, 1, redBloodCellCount), daniel);
        healthRecordRegistry.issueRecord(RecordData(adibou2, 2, whiteBloodCount), daniel);
        healthRecordRegistry.issueRecord(RecordData(adibou2, 3, hemoglobin), daniel);
        healthRecordRegistry.issueRecord(RecordData(adibou2, 4, hematocrit), daniel);
        healthRecordRegistry.issueRecord(RecordData(adibou2, 5, platelets), daniel);

        vm.startBroadcast(delpoyerPrivateKey);
    }
}
