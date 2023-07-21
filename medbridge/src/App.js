import './App.css';
import OverlayButton from './components/OverlayButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">MedConnect - Patient Dashboard</h1>
        <br></br>
        <h1>Click this button to create QR code to receive Medical Information (ERC6551)</h1>
      <OverlayButton />
      </header>

      <div>
      
    </div>

      <main className="container mx-auto mt-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Side - Medical Records */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Welcome, John Doe!</h2>

            {/* Medical Records */}
            <div className="bg-white p-4 shadow-md rounded-md mb-4">
              <h3 className="text-lg font-semibold mb-2">Medical Records</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Medical Record - HbA1C */}
                <div className="bg-blue-200 p-4 rounded-md">
                  <h4 className="text-lg font-semibold mb-2">HbA1C</h4>
                  <p className="text-sm">Value: 6.2%</p>
                  <p className="text-sm">Last Updated: July 15, 2023</p>
                </div>

                {/* Medical Record - CBR */}
                <div className="bg-green-200 p-4 rounded-md">
                  <h4 className="text-lg font-semibold mb-2">CBR</h4>
                  <p className="text-sm">Value: 120 mg/dL</p>
                  <p className="text-sm">Last Updated: July 14, 2023</p>
                </div>

                {/* Medical Record - Blood Pressure */}
                <div className="bg-yellow-200 p-4 rounded-md">
                  <h4 className="text-lg font-semibold mb-2">Blood Pressure</h4>
                  <p className="text-sm">Value: 120/80 mmHg</p>
                  <p className="text-sm">Last Updated: July 13, 2023</p>
                </div>

                {/* Medical Record - Cardiology Measure */}
                <div className="bg-pink-200 p-4 rounded-md">
                  <h4 className="text-lg font-semibold mb-2">Cardiology Measure</h4>
                  <p className="text-sm">Value: 80 bpm</p>
                  <p className="text-sm">Last Updated: July 12, 2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Pharmaceutical Companies */}
          <div className="md:col-span-1">
            <div className="bg-white p-4 shadow-md rounded-md mb-4">
              <h3 className="text-xl font-semibold mb-2">Participate in Medical Research and Claim Bounty</h3>
              <div className="space-y-4">
                {/* Pharma Company 1 */}
                <div className="border p-4 rounded-md">
                  <h4 className="text-lg font-semibold mb-2">PharmaCo 1</h4>
                  <p className="text-sm">Interested in: HbA1C, CBR</p>
                  <p className="text-sm">Study: Diabetes Management</p>
                </div>

                {/* Pharma Company 2 */}
                <div className="border p-4 rounded-md">
                  <h4 className="text-lg font-semibold mb-2">PharmaCo 2</h4>
                  <p className="text-sm">Interested in: Blood Pressure</p>
                  <p className="text-sm">Study: Hypertension Treatment</p>
                </div>

                {/* Pharma Company 3 */}
                <div className="border p-4 rounded-md">
                  <h4 className="text-lg font-semibold mb-2">PharmaCo 3</h4>
                  <p className="text-sm">Interested in: Cardiology Measure</p>
                  <p className="text-sm">Study: Heart Health</p>
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
