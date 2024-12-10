"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUsaId = validateUsaId;
function validateUsaId(id) {
    return /^[0-9]{9}$/.test(id); // US SSN: exactly 9 digits
}
