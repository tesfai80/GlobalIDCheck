"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateId = validateId;
const validators_1 = require("./validators");
function validateId(countryCode, id) {
    const validator = validators_1.validators[countryCode];
    if (!validator) {
        throw new Error(`Validation for country code "${countryCode}" is not supported.`);
    }
    return validator(id);
}
