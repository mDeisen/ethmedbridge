"use client";

import React, { useEffect } from "react";
import styles from "../page.module.css";

import {
  SismoConnectButton,
  AuthType,
  SismoConnectConfig,
  SismoConnectResponse,
  ClaimType,
  useSismoConnect,
} from "@sismo-core/sismo-connect-react";

const config: SismoConnectConfig = {
  appId: "0x8223adf82bed240bcd5e4007806916c4",
  vault: {
    impersonate: ["adibou.eth"],
  },
};

export default function Apply() {
  // const { response } = useSismoConnect({ config });
  // const jsonRes = response ? JSON.stringify(response) : null;

  // // TODO useState verified

  // useEffect(() => {
  //   async function verify() {
  //     if (!jsonRes) {
  //       console.log("no response");
  //       return;
  //     }

  //     console.log("SismoConnectResponse\n", jsonRes);

  //     const res = await fetch("/api/verify", {
  //       method: "POST",
  //       body: jsonRes
  //     });

  //     console.log("Proof verified\n", await res.json());
  //   }

  //   void verify();
  // }, [jsonRes]);

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <SismoConnectButton
          config={config}
          auths={[{ authType: AuthType.VAULT }]}
          claims={[
            {
              groupId: "0x8647f518b0dad075555269ff5a48c362",
              value: 600000,
              claimType: ClaimType.GTE,
            }, // Eth Med RecordType 1
          ]}
          signature={{
            message:
              "I accept to share my medical records with selected Clinical Trail party",
          }}
          callbackUrl="https://ethmedbridge-api.vercel.app/apply/verify"
        />
      </div>
    </main>
  );
}
