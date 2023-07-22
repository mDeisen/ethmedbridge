import React from 'react';

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md px-8 py-6 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-500 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <h2 className="mt-2 text-xl font-semibold text-gray-800">Success!</h2>
          <p className="text-gray-600">
            Thank you for submitting your medical records. Please submit your ZK proof by contacting our Lead Clinical Trial research team.
            Thank you for using Sismo.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Terms and Conditions</h3>
          <div className="max-h-48 overflow-y-auto p-2 border border-gray-300 rounded">
            <div className="text-sm">
              <div className="mb-4">
                By participating in this clinical trial study, you acknowledge and agree to the following terms and conditions:
              </div>
              <div className="mb-2">
                <ol className="list-decimal pl-4">
                  <li>
                    You voluntarily consent to participate in the clinical trial and understand that you have the right to withdraw your participation at any time without providing a reason.
                  </li>
                  <li>
                    You understand that the purpose of this clinical trial is to investigate the safety and efficacy of the investigational drug/device and that you may receive a placebo instead of the active substance.
                  </li>
                  {/* ... Other list items ... */}
                </ol>
              </div>
              <div>
                If you have any questions or concerns about the study, you can contact the clinical trial investigators at the provided contact information.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Contact Information of Study Director:</h3>
          <div className="text-sm">
            <p className="mb-1">Bayer AG, Leverkusen, Germany</p>
            <p className="mb-1">Sarena Lin, Wolfgang Nickl, Stefan Oelrich, Rodrigo Santos, Heiko Schipper</p>
            <p className="mb-1">Tel.: +49 (0)214 30-1</p>
            <p className="mb-1">Kaiser-Wilhelm-Allee 1</p>
            <p className="mb-1">51373 Leverkusen, Germany</p>
            <p className="mb-1">E-mail: Inquiries can be sent to info@bayer.com or using our contact form.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
