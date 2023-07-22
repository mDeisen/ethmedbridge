import { Bytes, ipfs, json } from "@graphprotocol/graph-ts";
import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RecordIssued as RecordIssuedEvent,
  RecordRegistered as RecordRegisteredEvent,
  Transfer as TransferEvent
} from "../generated/HealthRecordRegistry/HealthRecordRegistry"
import {
  Issuer,
  RecordOwner,
  RecordType,
  Record
} from "../generated/schema"


export function handleRecordRegistered(event: RecordRegisteredEvent): void {
  // Create a new record type from the event
  let newRecordType  = new RecordType(
    event.params.recordTypeId.toString() // TODO: Change in contract to autogenerate Ids instead of passing as parameter
  )
  // newRecordType.recordTypeOwner = event.; // TODO: Add for future updating/admin of record types
  if (event.params.metadataURI == null) {
    newRecordType.metadataURI = "TBD"; // TODO: Change in contract to make metadataURI required 
  } else {
    newRecordType.metadataURI = event.params.metadataURI;
  }

  // Assign data from ipfs
  newRecordType = assignIpfsValuesToRecordType(newRecordType);
  
  newRecordType.save()
}

export function assignIpfsValuesToRecordType(recordType: RecordType): RecordType {
  //const content = ipfs.cat(recordType.metadataURI);
  // debug
  const content = ipfs.cat(recordType.metadataURI.split("ipfs://")[1]); // Remove IPFS prefix
  if (content === null) {
    recordType.name = "failedtoretrieve";
    recordType.description = "failedtoretrieve";
    recordType.unit = "failedtoretrieve"; 
    return recordType;
  }
  const data = json.fromBytes(content).toObject();

  if (data) {
    const name = data.get('name');
    const description = data.get('description');
    const unit = data.get('measurementUnit');

    if (name) {
      recordType.name = name.toString();
    } else {
      recordType.name = "Unknown";
    }

    if (description) {
      recordType.description = description.toString();
    } else { 
      recordType.description = "Unknown";
    }

    if (unit) {
      recordType.unit = unit.toString();
    } else {
      recordType.unit = "Unknown";
    }
  }
  return recordType;
}

export function handleRecordIssued(event: RecordIssuedEvent): void {
  // If first record creation by user, create a new issuer
  let issuer = Issuer.load(event.params.issuer);
  if (issuer == null) {
    issuer = new Issuer(event.params.issuer);
    issuer.save();
  }

  // If first record assignment to user, create a new owner
  let owner = RecordOwner.load(event.params.recipient);
  if (owner == null) {
    owner = new RecordOwner(event.params.recipient);
    owner.save();
  }

  // Create a new health record from the event
  let newRecord = new Record(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  // Get Record Type for the record
  //let recordType = RecordType.load(event.params.recordId.toString()); // TODO: Change in the contract so we do not need to store int as string for ID
  
  newRecord.recordType = event.params.recordId.toString(); // RecordId is RecordTypeId in the event -> TODO: Change in the contract
  newRecord.recordOwner = owner.id; // Assigning the owner id from the owner created or retrieved above 
  newRecord.issuer = issuer.id; // Assigning the issuer id from the issuer created or retrieved above
  newRecord.value = event.params.value; // Value of the measurement -> Use for statistics
  newRecord.blockNumber = event.block.number; 
  newRecord.blockTimestamp = event.block.timestamp;
  newRecord.save()
}