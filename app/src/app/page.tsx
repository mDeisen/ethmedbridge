"use client";

import { config } from "@/app/utils/config";
import styles from "@/app/page.module.css";

import {
  AuthType,
  ClaimType,
  SismoConnectButton,
} from "@sismo-core/sismo-connect-react";
import classNames from "classnames";

import OverlayButton from "./components/OverlayButton";
import Sparkline from "./components/Sparkline";

/*
 * Basic test page is used to apply for a clinical trial.
 */
export default function App() {
  const sparklineData = [4, 4, 3.7, 4, 4, 4.5, 6, 6.4, 3, 5, 4.4];

  return (
    <div className="flex flex-col items-center">
    <div className="max-w-md shadow-lg rounded-lg my-6">
    <main className={classNames(styles.main, styles.nopad)}>
    <div className="w-full relative min-h-screen">
      <div className="w-50 h-50 p-4">
        <h2 className="text-xl font-semibold mb-4 text-left ">
          Welcome, Human!
        </h2>
        <p>
          Your health data at your fingertips while ensuring complete control
          and privacy.
        </p>

        {/* CBC */}
        <div className="flex flex-col items-center p-4">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold border-b border-gray-300 pb-2 text-left">
              Electrolytes
            </h3>
            <div className="grid grid-cols-4 gap-2"></div>
            <div className="grid grid-cols-4 gap-2 justify-center mb-4">
              <div>
                <p className="text-sm text-left">Urea</p>
                <p className="text-sm text-left">Creatinine</p>
                <p className="text-sm text-left">Sodium</p>
                <p className="text-sm text-left">Potassium</p>
                <p className="text-sm text-left">Chloride</p>
              </div>

              <div>
                <p className="text-sm">3.5</p>
                <p className="text-sm">54</p>
                <p className="text-sm">150</p>
                <p className="text-sm">3.9</p>
                <p className="text-sm">105</p>
              </div>

              <div>
                <p className="text-sm">3.7</p>
                <p className="text-sm">57</p>
                <p className="text-sm">140</p>
                <p className="text-sm">3.9</p>
                <p className="text-sm">115</p>
              </div>
              <div>
                <p className="text-sm">3.1</p>
                <p className="text-sm">52</p>
                <p className="text-sm">142</p>
                <p className="text-sm">3.6</p>
                <p className="text-sm">125</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold border-b border-gray-300 pb-2 text-left ">
              CBC
            </h3>
            <div className="grid grid-cols-4 gap-2"></div>
            <div className="grid grid-cols-4 gap-2 justify-center">
              <div>
                <p className="text-sm text-left">RBC</p>
                <p className="text-sm text-left">HGB</p>
                <p className="text-sm text-left">MCV</p>
                <p className="text-sm text-left">PLT</p>
                <p className="text-sm text-left">ANC</p>
              </div>

              <div>
                <p className="text-sm">5.4</p>
                <p className="text-sm">14</p>
                <p className="text-sm">80</p>
                <p className="text-sm">250</p>
                <p className="text-sm">3.4</p>
              </div>
              <div>
                <p className="text-sm">5.7</p>
                <p className="text-sm">15</p>
                <p className="text-sm">82</p>
                <p className="text-sm">252</p>
                <p className="text-sm">3.8</p>
              </div>
              <div>
                <p className="text-sm">5.1</p>
                <p className="text-sm">16</p>
                <p className="text-sm">76</p>
                <p className="text-sm">260</p>
                <p className="text-sm">3.7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold border-b border-gray-300 pb-2 text-left">
            RBC Visualization
          </h3>

          <div>
            <Sparkline data={sparklineData} />
          </div>
        </div>
      </div>

      {/* Tab 2 */}
      <div
        className={"bg-gray-100 p-4 shadow-md rounded-md mb-4"}
      >
        <h3 className="text-lg font-semibold mb-2">
          Participate in Medical Research and get rewarded
        </h3>

        <div className="space-y-4">
          {/* Pharma Company 1 */}
          <div className="bg-white border p-4 rounded-md flex flex-col relative">
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 rounded">
              Survey only, $5 or donate
            </div>
            <div className="flex justify-between">
              <h4 className="text-lg font-semibold py-5">Bayer</h4>
              <div>
                <p className="text-lg py-5">Interested in: Electrolytes, PLT</p>
                <p className="text-lg py-0">Study: Diabetes Management</p>
              </div>
            </div>
            <div className="flex justify-between py-4">
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded">
                Decline
              </button>
              <SismoConnectButton
                text="Apply for study"
                config={config}
                auths={[{ authType: AuthType.VAULT }]}
                claims={[
                  { groupId: "0x39a1c669293ad8224469a8197d67be7c" }, // Worldcoin
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
                // callbackUrl="http://localhost:3000/apply/verify"
                callbackUrl="https://ethmedbridge.vercel.app/apply/verify"
              />
            </div>
          </div>
          {/* Pharma Company 2 */}
          <div className="bg-white border p-4 rounded-md flex flex-col relative">
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 rounded">
              9 weeks, $150/wk or donate
            </div>
            <div className="flex justify-between">
              <h4 className="text-lg font-semibold py-5">
                ETH Zuerich (univ.)
              </h4>
              <div>
                <p className="text-lg py-5">Interested in: Electrolytes</p>
                <p className="text-lg py-0">Study: Hypertension Treatment</p>
              </div>
            </div>
            <div className="flex justify-between py-4">
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded">
                Decline
              </button>

              <SismoConnectButton
                text="Apply for study"
                // You can also create several auth and claim requests
                // in the same button
                config={config}
                // request multiple proofs of account ownership
                // (here Vault ownership and Twitter account ownership)
                auths={[
                  { authType: AuthType.VAULT },
                  { authType: AuthType.TWITTER },
                ]}
                // request multiple proofs of group membership
                // (here the groups with id 0x42c768bb8ae79e4c5c05d3b51a4ec74a and 0x8b64c959a715c6b10aa8372100071ca7)
                //claims={[
                //{groupId: "0x42c768bb8ae79e4c5c05d3b51a4ec74a"}, // from demo Merge part
                //{groupId: "0x8b64c959a715c6b10aa8372100071ca7"}  // from demo ENS Domain
                //]}
                signature={{
                  message:
                    "I accept to share my medical records with selected Clinical Trail party",
                }}
                onResponse={async (response) => {
                  //Send the response to your server to verify it
                  //thanks to the @sismo-core/sismo-connect-server package
                }}
                onResponseBytes={async (bytes) => {
                  //Send the response to your contract to verify it
                  //thanks to the @sismo-core/sismo-connect-solidity package
                }}
              />
            </div>
          </div>
          {/* Pharma Company 3 */}
          <div className="bg-white border p-4 rounded-md flex flex-col relative">
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 rounded">
              7 weeks, $70/wk or donate
            </div>
            <div className="flex justify-between">
              <h4 className="text-lg font-semibold py-5">Pfizer</h4>
              <div>
                <p className="text-lg py-5">Interested in: Electrolytes, CBC</p>
                <p className="text-lg py-0">Study: Heart Health</p>
              </div>
            </div>
            <div className="flex justify-between py-4">
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded">
                Decline
              </button>

              <SismoConnectButton
                text="Apply for study"
                // You can also create several auth and claim requests
                // in the same button
                config={config}
                // request multiple proofs of account ownership
                // (here Vault ownership and Twitter account ownership)
                auths={[
                  { authType: AuthType.VAULT },
                  { authType: AuthType.TWITTER },
                ]}
                // request multiple proofs of group membership
                // (here the groups with id 0x42c768bb8ae79e4c5c05d3b51a4ec74a and 0x8b64c959a715c6b10aa8372100071ca7)
                //claims={[
                //{groupId: "0x42c768bb8ae79e4c5c05d3b51a4ec74a"}, // from demo Merge part
                //{groupId: "0x8b64c959a715c6b10aa8372100071ca7"}  // from demo ENS Domain
                //]}
                signature={{
                  message:
                    "I accept to share my medical records with selected Clinical Trail party",
                }}
                onResponse={async (response) => {
                  //Send the response to your server to verify it
                  //thanks to the @sismo-core/sismo-connect-server package
                }}
                onResponseBytes={async (bytes) => {
                  //Send the response to your contract to verify it
                  //thanks to the @sismo-core/sismo-connect-solidity package
                }}
              />
            </div>
          </div>
          {/* Add more pharma companies as needed */}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
        <div className="w-full p-4 flex flex-row justify-around bottom-0">
        <button
        className="btn btn-sm"
      >
        Home
      </button>
          <div>
            <OverlayButton />
          </div>
        </div>
      </div>
    </div>
    </main>
    </div>
    </div>
  );
}

