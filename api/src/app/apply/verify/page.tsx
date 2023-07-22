"use client";

import { config } from "@/app/utils/config";
import { useEffect, useState } from "react";
import styles from "../../page.module.css";

import { useSismoConnect } from "@sismo-core/sismo-connect-react";

export default function VerifyPage() {
  const { response } = useSismoConnect({ config });
  const jsonRes = response ? JSON.stringify(response) : null;
  
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
      setVerified(true);
    }

    void verify();
  }, [jsonRes]);

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        {verified ? <div>Verified!</div> : "Verifying..."}
      </div>
    </main>
  );
}
