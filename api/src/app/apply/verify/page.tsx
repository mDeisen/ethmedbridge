"use client";

import { useEffect, useState } from "react";
import styles from "../../page.module.css";

import {
  SismoConnectConfig,
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
  const jsonRes = response ? JSON.stringify(response) : null;

  // TODO useState verified
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    async function verify() {
      if (!jsonRes) {
        console.log("no response");
        return;
      }

      console.log("SismoConnectResponse\n", jsonRes);

      const res = await fetch("/api/verify", {
        method: "POST",
        body: jsonRes,
      });

      console.log("Proof verified\n", await res.json());
    }

    void verify();
  }, [jsonRes]);

  return (
    <main className={styles.main}>
      <div className={styles.center}>{verified ? "Verified!" : "Verifying..."}</div>
    </main>
  );
}
