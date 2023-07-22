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

export default function VerifyPage() {
  const { response } = useSismoConnect({ config });

  // TODO useState verified

  useEffect(() => {
    async function verify() {
      if (!response) {
        console.log("no response");
        return;
      }

      console.log("SismoConnectResponse\n", response);

      const res = await fetch("/api/verify", {
        method: "POST",
        body: JSON.stringify(response),
      });

      console.log("Proof verified\n", await res.json());
    }

    void verify();
  }, [response]);

  return (
    <main className={styles.main}>
      <div className={styles.center}>Verifying...</div>
    </main>
  );
}
