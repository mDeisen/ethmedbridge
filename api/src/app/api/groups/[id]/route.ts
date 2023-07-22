import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id: resultTypeId } = params;

  const response = {
    status: "success",
    resultTypeId,
    results: {
      "nezzar.eth": '42'
    }
      
  };
  return NextResponse.json(response);
}