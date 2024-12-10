"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGermanId = validateGermanId;
function validateGermanId(id) {
    // Remove all non-numeric characters
    id = id.replace(/\D/g, "");
    // Ensure the ID is exactly 11 digits long
    if (id.length !== 11) {
        return false;
    }
    // Check digit validation
    let sum = 0;
    let multiplier = 1;
    // Process all digits except the last (check digit)
    for (let i = 0; i < 10; i++) {
        const digit = parseInt(id[i], 10);
        sum += digit * multiplier;
        // Adjust multiplier alternately between 1 and 2
        multiplier = multiplier === 1 ? 2 : 1;
    }
    // Calculate check digit
    const checkDigit = (10 - (sum % 10)) % 10;
    // Compare calculated check digit with the last digit of the ID
    return checkDigit === parseInt(id[10], 10);
}
