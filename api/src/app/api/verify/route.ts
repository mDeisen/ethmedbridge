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
      impersonate: ["dhadrien.sismo.eth"],
    },
  },
});

const auths = [
  { authType: AuthType.VAULT },
  // {authType: AuthType.TWITTER},
];

const claims = [
  // {groupId: "0x42c768bb8ae79e4c5c05d3b51a4ec74a"},
  { groupId: "0x8b64c959a715c6b10aa8372100071ca7" },
];

const signature = { message: "Your message" }

// const res = `{"appId":"0xf4977993e52606cfd67b7a1cde717069","namespace":"main","version":"sismo-connect-v1.1","signedMessage":"Your message","proofs":[{"auths":[{"authType":0,"userId":"0x1ba30e8b61e4a273381c10b24b6f08c85c18469a8906598faa6144fee50bfba2","extraData":"","isSelectableByUser":true}],"proofData":"0x2953bacd0090fce43d0ab05aa663f281283029870c4f83c97138153d9e79e9870dca9d33a5733043c5796578b3e13f2cf1d2090918d727fecafe0d00f294e1220fe47b18708eac31773d80cc76802ab1e89dae5a67d25a712c21566c9d8531221960358f0086a1a3f24ea3b849b8708c85393c5198c5139968d7a1461bc8c71c26bf452c583292d9d7a97ff40f27411f4561f90ce805ab92dcba42f48025fbe006c4c5b49b9795d206ef148675127484c164034b19778e5dbe4d3df9f61e619c0165115448594260a464c3f2cc79a1951249ca67bb75ff041db2a898e2f9e38a290319654368e863b810565e0b895c6d74184ab32429d5833252f1a9247577d300000000000000000000000000000000000000000000000000000000000000000abc50dac756ce4ec1ff4cf4a65e02712357cc7cc33b9ce47dc6d2da2a3f62a31801b584700a740f9576cc7e83745895452edc518a9ce60b430e1272fc4eb93b057cf80de4f8dd3e4c56f948f40c28c3acbeca71ef9f825597bf8cc059f1238b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001ba30e8b61e4a273381c10b24b6f08c85c18469a8906598faa6144fee50bfba202c02b0c8903e5f139b466d5bc5ceda4a647c4c72486e6d61de22fc3805abdd000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","extraData":"","provingScheme":"hydra-s3.1"},{"claims":[{"claimType":0,"groupId":"0x8b64c959a715c6b10aa8372100071ca7","groupTimestamp":"latest","value":1,"extraData":"","isSelectableByUser":false}],"proofData":"0x0ee5f0c6d8f0718c2572a642e26daea4089add204e281f5690961a7b6fecefa51fcfcc05e8b7d062c042963127c36635aa5aea0522a5a1686986a8e6ddc43f9119caba21b11285a92cb65aa0193084725245408d75ca372166dfbde492a9ec2c1d90509efedb894ad4aa34cea5ccccbe28ae0a9c03c60ce3a846e2305dd2de1119ed687fbddcb2f953eca19a019d916ca8e069af5b0e47bdec065a461cb4cfec1cc1e61959b6358aba99dcb051a0b14d8c0856c0cc2fff8fd6efcd1eb546ff52098f6491b434cb2b44b54595bbcab8d9638b7ade257125bdef0bc101236a48492d8971f09cc014b509e73c26c8480f5101f254c9efade6e72136e2c03f289dda00000000000000000000000000000000000000000000000000000000000000000abc50dac756ce4ec1ff4cf4a65e02712357cc7cc33b9ce47dc6d2da2a3f62a31801b584700a740f9576cc7e83745895452edc518a9ce60b430e1272fc4eb93b057cf80de4f8dd3e4c56f948f40c28c3acbeca71ef9f825597bf8cc059f1238b26747d45794b33e2a8a8db0638d96e88d6e3328629e3ffce97231b7139e190511aab1edffea4e54602a70610b264c251026062215ecb82d1e157b0d4590c8f5112fe76abbe0c391641695f669ed52629fab48118643acbbe036f739e7953973700000000000000000000000000000000000000000000000000000000000000012a9c2c73e4b2865d9a07abb3fd046bed1bf9a3d480011edd783c14d81ffffffe00000000000000000000000000000000000000000000000000000000000000001ba30e8b61e4a273381c10b24b6f08c85c18469a8906598faa6144fee50bfba202c02b0c8903e5f139b466d5bc5ceda4a647c4c72486e6d61de22fc3805abdd000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000","extraData":"","provingScheme":"hydra-s3.1"}]}`

// this is the API route that is called by the SismoConnectButton
export async function POST(req: Request) {
// export async function GET(req: NextRequest) {
  console.log("verify");
  console.log('auths', auths);
  // if (!req.body) {
  //   console.log("nope");
  //   return NextResponse.json("nothing", { status: 404 });
  // }
  // console.log("req.body", req.body);
  const sismoConnectResponse = await req.json();
  // const sismoConnectResponse = JSON.parse(res);

//  console.log("sismoConnectResponse", sismoConnectResponse);

  try {
    // verify the sismo connect response that corresponds to the request
    const result: SismoConnectVerifiedResult = await sismoConnect.verify(
      sismoConnectResponse,
      {
        auths,
        claims,
        signature,
      }
    );

    console.log("vault", result.getUserIds(AuthType.VAULT));
  // vault anonymous identifier = hash(vaultSecret, AppId)
  // ['0x225c5b67c39778b40ef2528707c9fbdfed96f31b9a50826b95c2ac40e15e4c6b']
  console.log("github", result.getUserIds(AuthType.GITHUB));
  // [ '35774097' ] GitHub id of @dhadrien
  console.log("twitter", result.getUserIds(AuthType.TWITTER));
  // [ '2390703980' ] Twitter id of @dhadrien_
  console.log("evm", result.getUserIds(AuthType.EVM_ACCOUNT));

    // return NextResponse.json(result, { status: 200 });
    return NextResponse.json({ok: true}, { status: 200 });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json(e.message, { status: 500 });
  }

  return NextResponse.json({ok: true});
}
