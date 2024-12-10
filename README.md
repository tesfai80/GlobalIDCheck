# GlobalIDCheck

description: |
  GlobalIDCheck is a versatile Node.js and TypeScript library designed to validate national IDs for multiple countries. 
  The package is modular, scalable, and supports the addition of new country-specific ID validators at runtime.

features:
  - Dynamic Registration: Add custom ID validators for new countries at runtime.
  - Built-in Validators:
      - 🇮🇱 Israel: 9-digit national ID.
      - 🇩🇪 Germany: 11-digit Tax Identification Number.
      - 🇺🇸 United States: 9-digit Social Security Number (SSN).
      - 🇫🇷 France: 15-digit INSEE number.
      - 🇮🇳 India: 12-digit Aadhaar number.
  - Extensible: Easily integrate validators for additional countries.
  - TypeScript Support: Built with TypeScript for type safety and autocompletion.

installation:
  steps:
    - step: Install the package via npm
      command: npm install globalidcheck

usage:
  - title: Import the Library
    description: Use the validateId function to validate IDs for supported countries.
    code: |
      import { validateId } from "globalidcheck";
      import "globalidcheck/dist/registerValidators"; # Ensure all built-in validators are registered
  - title: Validate an ID
    description: |
      Use the validateId function with the country code and the ID to be validated.
    code: |
      import { validateId } from "globalidcheck";
      import "globalidcheck/dist/registerValidators";

      console.log(validateId("IL", "123456782")); # true (Israel)
      console.log(validateId("DE", "65026160427")); # true (Germany)
      console.log(validateId("US", "987654321")); # true (United States)
      console.log(validateId("FR", "180081404001416")); # true (France)
      console.log(validateId("IN", "123456789012")); # true (India)
  - title: Adding a Custom Validator
    description: Dynamically add validators for additional countries.
    code: |
      import { registerValidator, validateId } from "globalidcheck";

      registerValidator("UK", (id) => /^[A-Za-z]{2}[0-9]{6}[A-Za-z]$/.test(id));
      console.log(validateId("UK", "QQ123456C")); # true
      console.log(validateId("UK", "123456789")); # false

supported_countries:
  - country: Israel
    code: IL
    description: 9-digit national ID
  - country: Germany
    code: DE
    description: 11-digit Tax Identification Number
  - country: United States
    code: US
    description: 9-digit Social Security Number (SSN)
  - country: France
    code: FR
    description: 15-digit INSEE number
  - country: India
    code: IN
    description: 12-digit Aadhaar number

testing:
  instructions: Run the tests to verify all validators.
  command: npm test

contributing:
  steps:
    - Fork the repository.
    - Create a new branch for your feature or fix:
      command: git checkout -b my-new-feature
    - Add your changes and tests.
    - Submit a pull request with a detailed explanation of your changes.

publishing:
  steps:
    - Build the Package:
      command: npm run build
    - Login to npm:
      command: npm login
    - Publish the Package:
      command: npm publish --access public

license: MIT

contact:
  info: |
    For questions, issues, or feedback, please open an issue on the [GitHub repository](https://github.com/your-username/GlobalIDCheck).
