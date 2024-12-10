"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validators = void 0;
exports.registerValidator = registerValidator;
// Mutable validators object
exports.validators = {};
// Function to register a new validator
function registerValidator(countryCode, validator) {
    exports.validators[countryCode] = validator;
}
