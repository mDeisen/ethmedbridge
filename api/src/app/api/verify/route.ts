import { config } from "@/app/utils/config";
import {
  AuthType,
  ClaimType,
  SismoConnect,
  SismoConnectVerifiedResult,
} from "@sismo-core/sismo-connect-server";

import { NextResponse } from "next/server";

const sismoConnect = SismoConnect({
  config,
});

const auths = [{ authType: AuthType.VAULT }];

const claims = [
  { groupId: "0x39a1c669293ad8224469a8197d67be7c" }, // Worldcoin
  {
    groupId: "0x8647f518b0dad075555269ff5a48c362",
    value: 600000,
    claimType: ClaimType.GTE,
  }, // Eth Med RecordType 1
];

const signature = {
  message:
    "I accept to share my medical records with selected Clinical Trail party",
};

export async function POST(req: Request) {
  const sismoConnectResponse = await req.json();

  try {
    const result: SismoConnectVerifiedResult = await sismoConnect.verify(
      sismoConnectResponse,
      {
        auths,
        claims,
        signature,
      }
    );

    const vault = result.getUserIds(AuthType.VAULT);

    return NextResponse.json(
      { ok: true, vault, researcherAddress: "researcher.xmtp.eth" },
      { status: 200 }
    );
  } catch (e: any) {
    console.error(e);
    return NextResponse.json(e.message, { status: 500 });
  }
}
