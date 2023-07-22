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
  Record,
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  Transfer
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
  const content = ipfs.cat(recordType.metadataURI);
  if (content === null) {
    return recordType;
  }
  const data = json.fromBytes(content).toObject();

  if (data) {
    const name = data.get('name');
    const description = data.get('description');
    const unit = data.get('unit');

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



export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}


export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
