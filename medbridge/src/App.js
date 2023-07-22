import './App.css';
import OverlayButton from './components/OverlayButton'
import Sparkline from './components/Sparkline';
import { SismoConnectButton, AuthType,  SismoConnectConfig, SismoConnectResponse } from "@sismo-core/sismo-connect-react";

function App() {

  const sparklineData = [4, 4, 3.7, 4, 4, 4.5, 6, 6.4, 3, 5, 4.4];
  const config: SismoConnectConfig = {
    appId: "0xf4977993e52606cfd67b7a1cde717069", 
  }


  return (

    
    <div className="App">
      <header className="App-header">
      
      <div className="absolute top-0 right-0 p-8">
<SismoConnectButton 
// You can also create several auth and claim requests 
// in the same button
    config={config}
    // request multiple proofs of account ownership 
    // (here Vault ownership and Twitter account ownership)
    auths={[
        {authType: AuthType.VAULT},
        {authType: AuthType.TWITTER},
    ]}
    // request multiple proofs of group membership 
    // (here the groups with id 0x42c768bb8ae79e4c5c05d3b51a4ec74a and 0x8b64c959a715c6b10aa8372100071ca7)
    claims={[
        {groupId: "0x42c768bb8ae79e4c5c05d3b51a4ec74a"},
        {groupId: "0x8b64c959a715c6b10aa8372100071ca7"}
    ]}
    signature={{message: "Your message"}}
    onResponse={async (response: SismoConnectResponse) => {
	//Send the response to your server to verify it
	//thanks to the @sismo-core/sismo-connect-server package
    }}
    onResponseBytes={async (bytes: string) => {
        //Send the response to your contract to verify it
        //thanks to the @sismo-core/sismo-connect-solidity package
    }}
/> 
      
    </div>






        <h1 className="text-3xl font-bold underline">MedConnect - Patient Dashboard</h1>
        <br></br>
        <h1>Click this button to create QR code to receive Medical Information (ERC6551)</h1>
      <OverlayButton />
      </header>



    

    <main className="container mx-auto mt-8 p-4">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Left Side - Medical Records */}
    <div className="md:col-span-2">
      <h2 className="text-xl font-semibold mb-4 text-left">Welcome, Vitalik!</h2>

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
                <p className="text-sm">3.4</p>
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
            </div>


      <div className="bg-white p-4 rounded-md shadow-md">        
            <h3 className="text-lg font-semibold border-b border-gray-300 pb-2 text-left">
        RBC Visualization
      </h3>

            <div>
            <Sparkline data={sparklineData} />
            </div>
      </div>

          {/* Right Side - Pharmaceutical Companies */}
<div className="md:col-span-1">
  <div className="bg-white p-4 shadow-md rounded-md mb-4">
    <h3 className="text-xl font-semibold mb-2">Participate in Medical Research and Claim Bounty</h3>
    <div className="space-y-4">
      {/* Pharma Company 1 */}
      <div className="border p-4 rounded-md flex flex-col">
        <h4 className="text-lg font-semibold mb-2">Bayer</h4>
        <p className="text-sm">Interested in: HbA1C, CBR</p>
        <p className="text-sm">Study: Diabetes Management</p>
        <div className="flex justify-between py-4">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded self-start">
        Decline
      </button>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded self-end">
        Claim bounty
      </button>
    </div>
      </div>

      {/* Pharma Company 2 */}
      <div className="border p-4 rounded-md flex flex-col">
        <h4 className="text-lg font-semibold mb-2">Biontec</h4>
        <p className="text-sm">Interested in: Blood Pressure</p>
        <p className="text-sm">Study: Hypertension Treatment</p>
        <div className="flex justify-between py-4">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded self-start">
        Decline
      </button>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded self-end">
        Claim bounty
      </button>
    </div>
      </div>

      {/* Pharma Company 3 */}
      <div className="border p-4 rounded-md flex flex-col">
        <h4 className="text-lg font-semibold mb-2">Pfizer</h4>
        <p className="text-sm">Interested in: Cardiology Measure</p>
        <p className="text-sm">Study: Heart Health</p>
        <div className="flex justify-between py-4">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded self-start">
        Decline
      </button>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded self-end">
        Claim bounty
      </button>
    </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </main>
    </div>
  );
}

export default App;
