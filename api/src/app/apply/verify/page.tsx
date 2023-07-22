"use client";

import { config } from "@/app/utils/config";
import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";

import { useSismoConnect } from "@sismo-core/sismo-connect-react";

export default function VerifyPage() {
  const { response } = useSismoConnect({ config });
  const jsonRes = response ? JSON.stringify(response) : null;

  const [verified, setVerified] = useState(false);
  const [researcherAddress, setResearcherAddress] = useState("");

  useEffect(() => {
    async function verify() {
      if (!jsonRes) {
        console.log("no response");
        return;
      }

      console.log("SismoConnectResponse\n", response);

      const verifiedRes = await fetch("/api/verify", {
        method: "POST",
        body: jsonRes,
      });

      const verifiedResJson = await verifiedRes.json();
      console.log("Proof verified\n", verifiedResJson);
      setVerified(true);
      setResearcherAddress(verifiedResJson.researcherAddress);
    }

    void verify();
  }, [jsonRes]);

  return (
    <>
      {!verified && (
        <main className={styles.main}>
          <div className={styles.center}>Verifying...</div>
        </main>
      )}

      {verified && (
        <div className="flex flex-col items-center">
          <div className="max-w-md px-8 py-6 shadow-lg rounded-lg my-6">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-500 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h2 className="mt-2 text-xl font-semibold text-gray-800">
                Success!
              </h2>
              <p className="text-gray-600">
                Thank you for submitting your medical records. Please submit
                your ZK proof by contacting our Lead Clinical Trial research
                team. Thank you for using Sismo.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Terms and Conditions</h3>
              <div className="max-h-48 overflow-y-auto p-2 border border-gray-300 rounded">
                <div className="text-sm">
                  <div className="mb-4">
                    By participating in this clinical trial study, you
                    acknowledge and agree to the following terms and conditions:
                  </div>
                  <div className="mb-2">
                    <ol className="list-decimal pl-4">
                      <li>
                        You voluntarily consent to participate in the clinical
                        trial and understand that you have the right to withdraw
                        your participation at any time without providing a
                        reason.
                      </li>
                      <li>
                        You understand that the purpose of this clinical trial
                        is to investigate the safety and efficacy of the
                        investigational drug/device and that you may receive a
                        placebo instead of the active substance.
                      </li>
                      {/* ... Other list items ... */}
                    </ol>
                  </div>
                  <div>
                    If you have any questions or concerns about the study, you
                    can contact the clinical trial investigators at the provided
                    contact information.
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold">
                Contact Information of Study Director:
              </h3>
              <div className="text-sm">
                <p className="mb-1">Bayer AG, Leverkusen, Germany</p>
                <p className="mb-1">
                  Sarena Lin, Wolfgang Nickl, Stefan Oelrich, Rodrigo Santos,
                  Heiko Schipper
                </p>
                <p className="mb-1">Tel.: +49 (0)214 30-1</p>
                <p className="mb-1">Kaiser-Wilhelm-Allee 1</p>
                <p className="mb-1">51373 Leverkusen, Germany</p>
                <p className="mb-1">
                  E-mail: Inquiries can be sent to info@bayer.com or using our
                  contact form.
                </p>
                <p className="mb-1">
                  XMTP contact: {researcherAddress}
                </p>
              </div>
            </div>
            {/* <hr className="my-6" /> */}
            <div className="flex justify-center gap-3 mt-3">
            <button
              className="btn"
              onClick={() => {
                navigator.clipboard.writeText(jsonRes!);
              }}
            >
              Copy ZK Proof 📋
            </button>
            <button
              className="btn"
              onClick={() => {
                window.open(
                  'https://xmtp.chat/inbox',
                  '_blank' // <- This is what makes it open in a new window.
                );
              }}
            >
              Chat via XMTP 💬
            </button>
            </div>

            {/* <div>Study director (proof recipient): {researcherAddress}</div> */}
            {/* <div>
              <a target="_blank" href="https://xmtp.chat/inbox">Chat via XMTP</a>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}
