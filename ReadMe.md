# ethmedbridge - privacy preserving clinical research recuritment

![MedConnect Logo](https://iili.io/HQquYuV.png)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [How It Works](#how-it-works)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
Welcome to the ethmedbridge public repo, which we created at ETH Global Paris Hackathon! ethmedbridge is an application that bridges the current disconnect between patiens and research institutions, with zk-gated blockchain technology. Our goal is to empower patients to own their medical records and enable them to selectively disclose specific records/biomarkers to research institutions. By doing so, patients can participate in clinical trials, contribute to scientific advancements (public good), and get rewarded for sharing their data.

## Features
- Doctor offices/hospitals can issue privacy preserving medical marker NFTs after every examination.
- Seamless connection between medical records (vision: default APIs/hardware mint direclty to the blockchain) and patient wallets 
- Data access and sharing via zk-gated vaults.
- Patient-controlled access to their medical records and selective data disclosure.
- Patients can opt-in or opt-out for participation in research/clinical trials.
- Institutions can select eligible subsets of patients for study participation.
- Patients are incentivized and rewarded for revealing their medical records.

## How It Works
1. **Data Creation**: ethmedbridge allows doctors/hospitals to airdrop medical record information to patients.

2. **Medical Marker NFTs**: Doctor offices/hospitals issue patients medical records in the of NFTs (ERC 6551) after each examination. These NFTs act as proofs of examination and contain specific medical data (type, value, date)

3. **zk-gated Blockchain**: ethmedbridge uses zk-Proofs to create a private and secure layer on top of public data to bundle and link sensitive medical data.

4. **Patient Consent**: Patients have full control over their medical data. They can opt-in (or opt-out) for participation in research/clinical trials using their ethmedbridge dapp.

5. **Data Querying**: Research institutions can query the zk-gated blockchain for specific medical markers to find eligible patients for their studies. However, the patient's identity remains anonymous.

6. **Incentives for Data Sharing**: When a patient matches the selected set of queries, they have the option to reveal their medical data, sign-up for study participation, and receive incentives for sharing their data.

7. **Seaming proof transfer**: When a patient has opted in and created a proof, he is prompted the previously hidden contract details of the research institutuion and can securly transmit the proof as well as his contract details to the research institution via xmtp chat.

## Technologies Used
- Polygon Blockchain (Goerli)
- NFTs
- The graph (to bundle the relevant bio marker information)
- zk-Proofs (via Sismo)
- Smart Contracts (Solidity)
- Web3.js
- XMTP to tranfer the zk-Proof to the research institution

## Tools we used
- Figma
- VS Code
- Remix
- public repos of partners

## Getting Started
To run ethmedbridge locally and use it for further development, follow these steps:

1. Clone the repository: `git clone https://github.com/mDeisen/ethmedbridge`
2. Install dependencies: `npm install`
3. Start the application: `npm start`

## Usage (DEMO)
1. Convince your doctor to use our dApp.
2. Doctor offices/hospitals issue zk-gated medical marker NFTs after conducting medical examinations.
3. Research institutions can use their ethmedbridge account to create data queries and find eligible patients.
4. Patients can log in to their ethmedbridge wallet to see their NFTs and decide whether to participate in research/clinical trials.
5. Patients who match the selected queries can choose to share their medical data, participate in the study, and get rewarded or donate to further advance public good funding

## Screenshots

![Desktop - 9](https://github.com/mDeisen/ethmedbridge/assets/36173828/28875635-66aa-4877-ab45-014b506a7823)

![Desktop - 10](https://github.com/mDeisen/ethmedbridge/assets/36173828/697dedcc-fcf2-482e-bbb4-c43392f05d9e)

![Desktop - 11](https://github.com/mDeisen/ethmedbridge/assets/36173828/9899c179-4094-4521-932f-943846bd3f61)


## Contributing
We welcome contributions to enhance ethmedbridge and make it more robust and user-friendly. If you would like to contribute, please reach out.

## License
This project is licensed under the MIT License. Feel free to use and modify the code for your needs.

---

Thank you for your interest in ethmedbridge! We hope our middleware solution can contribute to the advancement of medical research while ensuring patient data privacy and security. If you have any questions or feedback, please don't hesitate to reach out to our team via telegram. Happy hacking! 🚀
