# GlobalIDCheck

**GlobalIDCheck** is a lightweight Node.js and TypeScript library to validate national IDs for various countries. This library supports dynamic registration of validators, making it easy to extend and validate IDs for additional countries.

## Features

- **Dynamic Registration**: Add and manage validators dynamically for various countries.
- **Pre-Implemented Validators**:
  - 🇮🇱 **Israel**: 9-digit national ID.
  - 🇩🇪 **Germany**: 11-digit Tax Identification Number.
  - 🇺🇸 **United States**: 9-digit Social Security Number (SSN).
  - 🇫🇷 **France**: 15-digit INSEE number.
  - 🇮🇳 **India**: 12-digit Aadhaar number.
- **Extensibility**: Easily add support for new countries by registering a custom validator.

---

## Installation

Install **GlobalIDCheck** via npm:

```bash
npm install globalidcheck
