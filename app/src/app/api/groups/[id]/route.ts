import { NextRequest, NextResponse } from "next/server";

import { request, gql } from "graphql-request";

// Record schema
/*
{
  id
  issuer {
    id
  }
  recordOwner {
    id
  }
  recordType {
    id
    metadataURI
  }
  value
  blockNumber
  blockTimestamp
}
*/

type RecordResult = {
  id: string;
  recordOwner: {
    id: string;
  };
  value: string;
};

const query = gql`
  query getRecords($recordTypeId: String!) {
    records(where: { recordType: $recordTypeId }) {
      id
      recordOwner {
        id
      }
      value
    }
  }
`;

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id: recordTypeId } = params;

  const { records } = await request<{ records: RecordResult[] }>(
    `https://api.thegraph.com/subgraphs/name/mdeisen/ethmedbridge`,
    query,
    { recordTypeId }
  );

  const group = records.reduce<Record<string, string>>(
    (acc, { recordOwner, value }) => {
      acc[recordOwner.id] = value;
      return acc;
    },
    {}
  );

  // const response = {
  //   status: "success",
  //   recordTypeId,
  //   group: r,
  // };

  return NextResponse.json(group);
}
