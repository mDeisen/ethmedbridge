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
  appId: "0xa9618c35dc1234d69610cf92e08ae285",
  vault: {
    impersonate: ["adibou.eth"],
  },
};

export default function TestPage() {

  const { response } = useSismoConnect({config});

  useEffect(() => {
    if (response) {
      console.log("response", response);
    } else {
      console.log("no response");
    }
  }, [response]);
    
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
          // onResponse={async (response: SismoConnectResponse) => {
          //   console.log("SismoConnectResponse", response);
          //   const res = await fetch("http://localhost:3001/api/verify", {
          //     method: "POST",
          //     body: JSON.stringify(response),
          //   });
          //   console.log(await res.json());
          // }}
          // callbackPath=""
        />
      </div>
    </main>
  );
}
