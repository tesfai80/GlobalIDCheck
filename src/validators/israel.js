"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIsraeliId = validateIsraeliId;
function validateIsraeliId(id) {
    if (id.length !== 9 || !/^\d+$/.test(id))
        return false;
    let total = 0;
    for (let i = 0; i < id.length; i++) {
        let digit = parseInt(id[i], 10);
        digit *= i % 2 === 0 ? 1 : 2;
        if (digit > 9)
            digit -= 9;
        total += digit;
    }
    return total % 10 === 0;
}
