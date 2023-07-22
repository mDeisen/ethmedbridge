// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.19 <=0.9.0;

import { BaseScript } from "./Base.s.sol";
import { HealthRecordRegistry, RecordData } from "../src/HealthRecordRegistry.sol";

/// @dev See the Solidity Scripting tutorial: https://book.getfoundry.sh/tutorials/solidity-scripting
contract DeployTestRecords is BaseScript {
    function run() public {
        uint256 delpoyerPrivateKey = vm.envUint("PK");
        vm.startBroadcast(delpoyerPrivateKey);

        HealthRecordRegistry healthRecordRegistry = new HealthRecordRegistry();

        // Register Record Types
        healthRecordRegistry.registerNewRecord(1, "ipfs://bafybeiae3u2nwqd6ilnj5locdgqof6ofg3exbvdcsgq5bo6nhefhd3eady/Red Blood Count.json");
        healthRecordRegistry.registerNewRecord(2, "ipfs://bafybeiae3u2nwqd6ilnj5locdgqof6ofg3exbvdcsgq5bo6nhefhd3eady/White Blood Count.json");
        healthRecordRegistry.registerNewRecord(3, "ipfs://bafybeiae3u2nwqd6ilnj5locdgqof6ofg3exbvdcsgq5bo6nhefhd3eady/Hemoglobin.json");
        healthRecordRegistry.registerNewRecord(4, "ipfs://bafybeiae3u2nwqd6ilnj5locdgqof6ofg3exbvdcsgq5bo6nhefhd3eady/Hematocrit.json");
        healthRecordRegistry.registerNewRecord(5, "ipfs://bafybeiae3u2nwqd6ilnj5locdgqof6ofg3exbvdcsgq5bo6nhefhd3eady/Platelets.json");

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

        // Full Example CBC
        uint64 redBloodCellCount = 620000;
        uint64 whiteBloodCount = 510000;
        uint64 hemoglobin = 14000000;
        uint64 hematocrit = 4200000;
        uint64 platelets = 18000000;

        RecordData[] memory records = new RecordData[](5);
        records[0] = RecordData(adibou2, 1, redBloodCellCount);
        records[1] = RecordData(adibou2, 2, whiteBloodCount);
        records[2] = RecordData(adibou2, 3, hemoglobin);
        records[3] = RecordData(adibou2, 4, hematocrit);
        records[4] = RecordData(adibou2, 5, platelets);

        // Full CBC to adibou.eth
        healthRecordRegistry.issueRecordBatch(records, adibou);

        // Full CBC to Daniel
        healthRecordRegistry.issueRecordBatch(records, daniel);

        vm.stopBroadcast();
    }
}
