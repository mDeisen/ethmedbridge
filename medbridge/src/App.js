import "./App.css";

import {
  SismoConnectButton,
  AuthType,
  SismoConnectConfig,
  SismoConnectResponse,
} from "@sismo-core/sismo-connect-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import classNames from "classnames";

import OverlayButton from "./components/OverlayButton";
import Sparkline from "./components/Sparkline";
import SuccessPage from "./components/SuccessPage";
import RedirectButton from "./components/RedirectButton";

function App() {
  let isAlert = false;
  const sparklineData = [4, 4, 3.7, 4, 4, 4.5, 6, 6.4, 3, 5, 4.4];
  const config = {
    appId: "0xf4977993e52606cfd67b7a1cde717069", // from demo
  };

  return (
    <div className="w-full relative min-h-screen">
      <div className="w-full flex flex-row justify-between p-4 border items-center">
        <div>Scan</div>
        <div>
          <SismoConnectButton
            text="Connect"
            config={config}
            auths={[
              { authType: AuthType.VAULT },
              { authType: AuthType.TWITTER },
            ]}
            claims={[
              { groupId: "0x6ff8115520098ee543deab1ab900384d" }, // own sismo group, only Daniel atm
              //{groupId: "0x8b64c959a715c6b10aa8372100071ca7"}  // from demo ENS Domain
            ]}
            signature={{
              message:
                "I accept to share my medical records with selected Clinical Trail party",
            }}
            onResponse={async (response) => {}}
            onResponseBytes={async (bytes) => {}}
          />
        </div>
      </div>

      <div className="w-50 h-50 p-4">
        <h2 className="text-xl font-semibold mb-4 text-left ">
          Welcome, Vitalik!
        </h2>
        <p>
          Your health data at your fingertips while ensuring complete control
          and privacy.
        </p>

        {/* CBC */}
        <div className="flex">
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
        className={classNames(
          "bg-white p-4 shadow-md rounded-md mb-4",
          { 
            'border-red-200': isAlert === true
        }
        )}
      >
        <h3 className="text-xl font-semibold mb-2">
          Participate in Medical Research and get rewarded
        </h3>

        <div className="space-y-4">
          {/* Pharma Company 1 */}
          <div className="border p-4 rounded-md flex flex-col relative">
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
                callbackUrl="http://localhost:3000/success"
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
                claims={[
                  { groupId: "0x6ff8115520098ee543deab1ab900384d" }, // own sismo group, only Daniel atm
                  //{groupId: "0x8b64c959a715c6b10aa8372100071ca7"}  // from demo ENS Domain
                ]}
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
          {/* Pharma Company 2 */}
          <div className="border p-4 rounded-md flex flex-col relative">
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
                callbackUrl="http://localhost:3000/success"
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
          <div className="border p-4 rounded-md flex flex-col relative">
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

        <Router>
          <div>
            <Switch>
              <Route path="/success" component={SuccessPage} />
              <Route path="/" exact>
                <div className="min-h-screen flex items-center justify-center bg-gray-100">
                  <div className="max-w-md px-8 py-6 bg-white shadow-lg rounded-lg">
                    <div className="text-center">
                      {/* Your content for the main page */}
                      <h2 className="mt-2 text-xl font-semibold text-gray-800">
                        Main Page
                      </h2>
                      <p className="text-gray-600">
                        Your main page content goes here.
                      </p>
                    </div>
                    <RedirectButton />
                  </div>
                </div>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>

      <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
        <div className="w-full flex flex-row justify-around p-4 bottom-0">
          <div>Home</div>
          <div>
            <OverlayButton />
          </div>
          <button
            onClick={() => {
              isAlert = !isAlert;
              console.log(isAlert);
            }}
          >
            Alert
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
