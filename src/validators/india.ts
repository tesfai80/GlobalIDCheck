export function validateIndianId(id: string): boolean {
    // Aadhaar Number: 12 digits
    return /^[0-9]{12}$/.test(id);
}
