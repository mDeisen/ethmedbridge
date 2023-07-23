# ethmedbridge - privacy preserving clinical research recuritment

![MedConnect Logo](https://iili.io/HQquYuV.png)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [How It Works](#how-it-works)
- [Public Good Creation](#public-good-creation)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
Welcome to the ethmedbridge public repo, which we created at ETH Global Paris Hackathon! ethmedbridge is an application that bridges the current disconnect between patients and research institutions, with zero-knowledge proofs (ZKPs). Recruiting clinical trail participants is costly and it is challenging to find a large enough number of matching candidates. Patients currently have no simple way to access and verify their own medical data. Our project solves both problems by allowing for ownership of ones medical data as well as finding applicable research studies and applying through ZKPs.

## Features
- Doctor offices/hospitals can issue (privacy preserving -> TBD) medical measurements to the patient
- Patient-controlled access to their medical records and selective data disclosure.
- Patients can opt-in or opt-out for participation in research/clinical trials.
- Researchers can create studies and applicable criteria. patients that fill the criteria can issue a ZKP to apply and prove eligibility.
- TBD: Seamless connection between medical records (vision: default APIs/hardware mint directly to the blockchain) and patient wallets 

## How It Works

1. **Data Creation**: ethmedbridge allows doctors/hospitals to airdrop medical record information to patients.

2. **Data Querying**: Research institutions can query the blockchain for available medical datatypes and see measurement distributions for each type.

3. **Study Creation**: Reasearchers can publicly create studies that can be gated with zero-knowledge proveable attributes. The medical datatypes that are created through ethmedbridge can be used as eligibility critera.

4. **Patient Consent**: Patients have full control over their medical data. When a study is published, they can see whether they are eligible and if they decide to participate can prove their eligibility using a ZKP.

5. **Proof transfer & Follow Up**: When a patient has applied and created a proof, he is prompted the previously hidden contract details of the research institution and can securely transmit the proof as well as his contact details to the research institution via xmtp.


We used a range of technologies in realizing this project. Among the projects we integrated or utilized are Sismo, The Graph,  XMTP, Worldcoin and Polygon.

The solution consists of 3 main applications that interact with the smart contract, query data via the Graph and generate the zero-knowledge proofs (ZKPs) using Sismo.
1. A component to register medical data types and measurements (used by doctors, medical professionals or devices conducting the tests)
2. A component to view and manage ones medical data measurements, view open studies and issue the ZKPs (used by the data owners e.g. patients)
3. A component to browse medical data on the blockchain (without connection to the data owners) and formulate and publish studies as well as receiving the applications (used by researchers).

The first component is currently handled without a UI by calling the smart contract to create medical data types and measurements. The smart contract is found here: https://github.com/mDeisen/ethmedbridge/blob/main/foundry/src/HealthRecordRegistry.sol
The contract is deployed on goerli: 
https://goerli.etherscan.io/address/0x9c0f136963e9683B312C2786C62b527b4F3Dc72a

The second component enables the user to view their measurements and see studies that they might apply to. The data becomes queriable through the graph which also integrates with IPFS to fetch additional data about the medical data types.
The user can apply to specific studies by proving their personhood as well as their membership in specific Sismo groups (that are created from the medical data types) as well as passing the thresholds for specific measurements specified by the researcher. The user proves the eligibility for the study with a ZKP that can be shared with the study creator.

The third component can be used to view the available medical data types as well as the measurement distribution for each medical data type and use them to create studies that are gated to people that match the criteria. The researcher can monitor how many people submitted their proofs and reach out to them via XMTP.

## Public Good Creation
Through the permissionless and privacy preserving information emission process (ERC 721, future ERC 6551) we create a public good. Medical data becomes queriable by type (i.e. show me the distribution of all blood pressure measurements from the last 7 days). See here an example of the data structure via the [Graph](https://github.com/mDeisen/ethmedbridge/blob/main/app/public/assets/graph_data.png) and via [Goerliscan](https://goerli.etherscan.io/token/0x5a2EbDEb26aAADBefBaC05AAc21e19e268D3CF6A)


Privacy concerns: The origin of the data is linked to a doctor, however not the patient itself. We envision that only doctors with sufficiently large submissions can mint to avoid inference to one individual.

## Technologies Used
- Blockchain (Goerli)
- The graph (to create queriable entities from the relevant smart contract events)
- zk-Proofs (via Sismo)
- Smart Contracts (Solidity)
- Web3.js
- XMTP to tranfer the ZKPs to the research institution
- Worldcoin for proof of humanity

## Tools we used
- Figma
- VS Code
- Remix
- public repos of partners
- Foundry

## Getting Started
To run ethmedbridge locally and use it for further development, follow these steps:

1. Clone the repository: `git clone https://github.com/mDeisen/ethmedbridge`
2. Go to the app directory: `cd app`
3. Install dependencies: `npm install`
4. Start the application: `npm run dev`

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
