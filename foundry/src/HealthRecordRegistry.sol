// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.19;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

struct Record {
    /// @dev Whether the record is allowed to be issued.
    bool allowed;
    /// @dev URI to the metadata of the record.
    /// Contains: Name, Decription, Image (optional), MeasurementUnit
    string metadataURI;
}

struct RecordData {
    address issuer;
    uint32 recordTypeId;
    uint64 value;
}
/// @title HealthRecordRegistry
/// @notice A simple registry to issue health records. (to ERC6551 or EOAs directly)
/// @dev This contract is used to issue health records to patients. It
/// should emulate the behavior of a real-world health record registry
/// with good enough access control for a hackathon. In a real-world
/// implementation, access control for issuers & data gouvernance would
/// be much more complex.
contract HealthRecordRegistry is Ownable, ERC721 {

    event RecordRegistered(
        uint32 indexed recordTypeId,
        string metadataURI
    );

    event RecordIssued(
        address indexed issuer,
        uint32 indexed recordId,
        uint64 value,
        address indexed recipient
    );

    /// @dev Mapping of record ID to record data.
    mapping(uint256 recordId => Record record) public records;

    /// @dev Locked issuers
    mapping(address issuer => bool locked) public lockedIssuers;

    constructor() ERC721("HealthRecordRegistry", "HRR") {
        // solhint-disable-previous-line no-empty-blocks
    }

    /// @dev Modifier to check if a record is allowed.
    modifier onlyAllowedRecords(uint32 recordId) {
        require(records[recordId].allowed, "HRR: record not allowed");
        _;
    }

    //////////// ADMIN FUNCTIONS ////////////

    /// @dev Register a new record.
    function registerNewRecord(uint32 _newRecordId, string memory _metadataURI) public onlyOwner {
        records[_newRecordId] = Record(true,_metadataURI);

        emit RecordRegistered(_newRecordId, _metadataURI);
    }

    function disableRecord(uint32 _recordId) public onlyOwner {
        records[_recordId].allowed = false;
    }

    function setIssuerLock(address _issuer, bool locked) public onlyOwner {
        lockedIssuers[_issuer] = locked;
    }

    //////////// PUBLIC FUNCTIONS ////////////

    /// @dev Issue a batch of records to a recipient.
    function issueRecordBatch(
        RecordData[] memory _records,
        address _recipient
    ) public {
        for (uint256 i = 0; i < _records.length; i++) {
            issueRecord(_records[i], _recipient);
        }    
    }

    /// @dev Issue a record to a recipient.
    function issueRecord(
        RecordData memory _record,
        address _recipient
    ) public {
        _issueRecord(_record, _recipient);
    }

    ////////////////// INTERNALS //////////////////

    /// @dev Internal function to mint a record to a recipient.
    function _issueRecord(
        RecordData memory _record,
        address _recipient
    ) internal onlyAllowedRecords(_record.recordTypeId) {
        uint256 recordTokenId = _generateRecordId(
            _record.issuer,
            _record.recordTypeId,
            _record.value
        );
        
        _safeMint(_recipient, recordTokenId);

        emit RecordIssued(
            _record.issuer,
            _record.recordTypeId,
            _record.value,
            _recipient
        );
    }

    /// @dev Internal function to generate a record ID.
    function _generateRecordId(
        address _issuer,
        uint32 _recordId,
        uint64 _value
    ) internal pure returns (uint256) {
        return uint160(_issuer) << 96 | uint96(_recordId) << 64 | uint64(_value);
    }
}
