# DID Use Cases & Requirements — Structured Data

Machine-readable extractions from the [W3C DID Use Cases and Requirements](https://www.w3.org/TR/2021/NOTE-did-use-cases-20210317/) Working Group Note (17 March 2021).

These files provide structured JSON for tooling, dashboards, and onboarding against the 22 W3C DID requirements and 18 documented use cases.

## Files

| File | Description |
|---|---|
| [`use-cases.json`](use-cases.json) | 18 use cases (6 categories), each with required requirements, actors, tags |
| [`requirements.json`](requirements.json) | 22 requirements with tier classification and benefit mapping |

---

## Requirements

22 requirements extracted from [§3 Requirements](https://www.w3.org/TR/2021/NOTE-did-use-cases-20210317/#requirements).

- **Core** — referenced by 70%+ of use cases. Expected of any serious DID method.
- **Common** — referenced by 40–69%. Important for most implementations.
- **Specialized** — referenced by <40%. Needed for specific domains.

### Core

| ID | Requirement | Benefits |
|---|---|---|
| R1 | Authentication / Proof of Control | antiExploitation, sustainability |
| R22 | Human-Centered Interoperability | easeOfUse, sustainability |

### Common

| ID | Requirement | Benefits |
|---|---|---|
| R2 | Decentralized / Self-Issued | antiCensorship, antiExploitation, privacy, sustainability |
| R3 | Guaranteed Unique Identifier | easeOfUse, sustainability |
| R5 | Associated Cryptographic Material | antiCensorship, antiExploitation, easeOfUse |
| R7 | Service Endpoint Discovery | easeOfUse |
| R8 | Privacy Preserving | antiCensorship, antiExploitation, privacy |
| R10 | Inter-Jurisdictional | antiCensorship, sustainability |
| R13 | No Vendor Lock-In | antiExploitation, sustainability |
| R18 | Survives Relationship with Service Provider | antiExploitation, sustainability |

### Specialized

| ID | Requirement | Benefits |
|---|---|---|
| R4 | No Call Home | antiCensorship, antiExploitation, privacy, sustainability |
| R6 | Streamlined Key Rotation | antiCensorship, antiExploitation, easeOfUse, sustainability |
| R9 | Delegation of Control | easeOfUse |
| R11 | Cannot Be Administratively Denied | antiCensorship |
| R12 | Minimized Rents | sustainability |
| R14 | Preempt / Limit Trackable Data Trails | antiCensorship, antiExploitation, privacy |
| R15 | Cryptographic Future-Proof | antiExploitation, sustainability |
| R16 | Survives Issuing Organization Mortality | sustainability |
| R17 | Survives Deployment End-of-Life | antiCensorship, sustainability |
| R19 | Cryptographic Authentication and Communication | antiCensorship, antiExploitation |
| R20 | Registry Agnostic | antiCensorship, antiExploitation, sustainability |
| R21 | Legally-Enabled Identity | antiExploitation, easeOfUse, sustainability |

---

## Use Cases

18 use cases organized into 6 domain categories.

### Finance & Commerce

| ID | Use Case | Detail | Requirements | Actors |
|---|---|---|---|---|
| UC-ENT | Enterprise Identifiers | full | R1, R2, R3, R4, R5, R6, R7, R9, R10, R11, R13, R15, R16, R17, R18, R19, R20 | corporation, subsidiary, regulator, auditor |
| UC-CRED | Portable Credentials | full | R6, R7, R10, R13, R18, R22 | holder, verifier, issuer, merchant |
| UC-SHOP | Online Shopper | brief | R1, R2, R4, R10, R11, R16, R17, R18, R22 | consumer, merchant, payment-processor |
| UC-CONF | Confidential Customer Engagement | brief | R1, R5, R6, R8, R13, R19 | client, advisor, firm |
| UC-TRADE | Importing Goods (Customs) | brief | R1, R5, R9, R10, R22 | importer, customs-authority, freight-forwarder |

### Government & Legal

| ID | Use Case | Detail | Requirements | Actors |
|---|---|---|---|---|
| UC-LAW | Digital Executor | full | R1, R2, R3, R5, R6, R7, R8, R9, R10, R11, R12, R13, R15, R17, R18, R19, R21, R22 | executor, decedent, beneficiary, court |
| UC-RESID | Digital Permanent Resident Card | brief | R1, R4, R5, R12, R21, R22 | resident, immigration-authority, border-agent, employer |
| UC-EIDAS | eIDAS Public Authority Credentials | brief | R1, R3, R4, R5, R12, R13, R15, R19, R21, R22 | citizen, public-authority, trust-service-provider |

### Education & Workforce

| ID | Use Case | Detail | Requirements | Actors |
|---|---|---|---|---|
| UC-EDU | Life-long Credentials | full | R1, R2, R3, R4, R5, R6, R7, R10, R11, R12, R13, R14, R15, R16, R17, R18, R19, R20, R22 | student, university, employer, credential-registry |
| UC-SKILL | Transferable Skills Credentials | brief | R1, R3, R5, R6, R14 | worker, employer, training-provider, credentialing-body |

### Healthcare

| ID | Use Case | Detail | Requirements | Actors |
|---|---|---|---|---|
| UC-RX | Prescriptions | full | R1, R2, R3, R5, R7, R8, R14, R19, R22 | patient, physician, pharmacy, insurer |

### Infrastructure & IoT

| ID | Use Case | Detail | Requirements | Actors |
|---|---|---|---|---|
| UC-VEH | Vehicle Assemblies | brief | R1, R2, R4, R10, R11, R16, R17, R18, R22 | vehicle, component, manufacturer, regulator |
| UC-DATA | Accessing Master Data | brief | R1, R2, R3, R5, R7 | data-consumer, data-authority, registry |
| UC-SUPPLY | Supply Chain Pseudonymity | brief | R1, R2, R7, R8, R14, R18 | supplier, manufacturer, auditor, customs |

### Privacy & Communication

| ID | Use Case | Detail | Requirements | Actors |
|---|---|---|---|---|
| UC-COMM | Secure Communication | full | R1, R2, R3, R5, R6, R7, R8, R9, R10, R13, R14, R15, R18, R19, R22 | sender, receiver, messaging-service |
| UC-SHARE | Cross-Platform Sharing | brief | R2, R8, R14, R22 | user, platform-a, platform-b |
| UC-ANON | Pseudonymous Work | brief | R8, R12, R18, R22 | pseudonymous-worker, client, reputation-system |
| UC-CORR | Correlation-Controlled Services | brief | R1, R2, R4, R8, R13, R14, R18, R22 | user, service-provider, data-broker |

---

## Requirement × Use Case Matrix

From the [W3C §3 table](https://www.w3.org/TR/2021/NOTE-did-use-cases-20210317/#requirements).

| Req | Tier | ENT | EDU | RX | LAW | CRED | COMM | SHOP | VEH | CONF | DATA | SKILL | SHARE | ANON | SUPPLY | RESID | TRADE | EIDAS | CORR |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| R1 | core | X | X | X | X |   | X | X | X | X | X | X |   |   | X | X | X | X | X |
| R2 | common | X | X | X | X |   | X | X | X |   | X |   | X |   | X |   |   |   | X |
| R3 | common | X | X | X | X |   | X |   |   |   | X | X |   |   |   |   |   | X |   |
| R4 | specialized | X | X |   |   |   |   | X | X |   |   |   |   |   |   | X |   | X | X |
| R5 | common | X | X | X | X |   | X |   |   | X | X | X |   |   |   | X | X | X |   |
| R6 | specialized | X | X |   | X | X | X |   |   | X |   | X |   |   |   |   |   |   |   |
| R7 | common | X | X | X | X | X | X |   |   |   | X |   |   |   | X |   |   |   |   |
| R8 | common |   |   | X | X |   | X |   |   | X |   |   | X | X | X |   |   |   | X |
| R9 | specialized | X |   |   | X |   | X |   |   |   |   |   |   |   |   |   | X |   |   |
| R10 | common | X | X |   | X | X | X | X | X |   |   |   |   |   |   |   | X |   |   |
| R11 | specialized | X | X |   | X |   |   | X | X |   |   |   |   |   |   |   |   |   |   |
| R12 | specialized |   | X |   | X |   |   |   |   |   |   |   |   | X |   | X |   | X |   |
| R13 | common | X | X |   | X | X | X |   |   | X |   |   |   |   |   |   |   | X | X |
| R14 | specialized |   | X | X |   |   | X |   |   |   |   | X | X |   | X |   |   |   | X |
| R15 | specialized | X | X |   | X |   | X |   |   |   |   |   |   |   |   |   |   | X |   |
| R16 | specialized | X | X |   |   |   |   | X | X |   |   |   |   |   |   |   |   |   |   |
| R17 | specialized | X | X |   | X |   |   | X | X |   |   |   |   |   |   |   |   |   |   |
| R18 | common | X | X |   | X | X | X | X | X |   |   |   |   | X | X |   |   |   | X |
| R19 | specialized | X | X | X | X |   | X |   |   | X |   |   |   |   |   |   |   | X |   |
| R20 | specialized | X | X |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
| R21 | specialized |   |   |   | X |   |   |   |   |   |   |   |   |   |   | X |   | X |   |
| R22 | core |   | X | X | X | X | X | X | X |   |   |   | X | X |   | X | X | X | X |

---

## Source

- W3C Note: [DID Use Cases and Requirements v1.0](https://www.w3.org/TR/2021/NOTE-did-use-cases-20210317/)
- Published: 17 March 2021
- Working Group: [W3C DID Working Group](https://www.w3.org/2019/did-wg/)
- Structured data maintained by [Attestto](https://attestto.com)
