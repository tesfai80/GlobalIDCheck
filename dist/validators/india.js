"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIndianId = validateIndianId;
function validateIndianId(id) {
    // Aadhaar Number: 12 digits
    return /^[0-9]{12}$/.test(id);
}
