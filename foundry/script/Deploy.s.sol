// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.19 <=0.9.0;

import { BaseScript } from "./Base.s.sol";
import { HealthRecordRegistry, RecordData } from "../src/HealthRecordRegistry.sol";

/// @dev See the Solidity Scripting tutorial: https://book.getfoundry.sh/tutorials/solidity-scripting
contract DeployHealthRegistry is BaseScript {
    function run() public {
        uint256 delpoyerPrivateKey = vm.envUint("PK");
        vm.startBroadcast(delpoyerPrivateKey);
        
        HealthRecordRegistry registry = new HealthRecordRegistry();

        registry.registerNewRecord(1, "ipfs://bafybeiae3u2nwqd6ilnj5locdgqof6ofg3exbvdcsgq5bo6nhefhd3eady/Red Blood Count.json");
        registry.registerNewRecord(2, "ipfs://bafybeiae3u2nwqd6ilnj5locdgqof6ofg3exbvdcsgq5bo6nhefhd3eady/White Blood Count.json");
        registry.registerNewRecord(3, "ipfs://bafybeiae3u2nwqd6ilnj5locdgqof6ofg3exbvdcsgq5bo6nhefhd3eady/Hemoglobin.json");
        registry.registerNewRecord(4, "ipfs://bafybeiae3u2nwqd6ilnj5locdgqof6ofg3exbvdcsgq5bo6nhefhd3eady/Hematocrit.json");
        registry.registerNewRecord(5, "ipfs://bafybeiae3u2nwqd6ilnj5locdgqof6ofg3exbvdcsgq5bo6nhefhd3eady/Platelets.json");


        address adibou = 0x346AF5374Ec6d008d3788036E01eB5d5d17c8819;
        address adibou2 = 0x4D5BA70D2f7bD991BF09A5979e5F5e7dCAD04679;

        RecordData[] memory records = new RecordData[](1);

        records[0] = RecordData(adibou, 1, 420);

        registry.issueRecordBatch(records, adibou2);

        vm.stopBroadcast();
    }
}
