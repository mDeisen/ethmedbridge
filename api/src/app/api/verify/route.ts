import {
  AuthType,
  ClaimType,
  SismoConnect,
  SismoConnectVerifiedResult,
} from "@sismo-core/sismo-connect-server";

import { NextRequest, NextResponse } from "next/server";

const sismoConnect = SismoConnect({
  config: {
    appId: "0xa9618c35dc1234d69610cf92e08ae285",
    vault: {
      impersonate: ["adibou.eth"],
    },
  },
});

const auths = [{ authType: AuthType.VAULT }];

const claims = [
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
