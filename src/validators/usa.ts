export function validateUsaId(id: string): boolean {
    return /^[0-9]{9}$/.test(id); // US SSN: exactly 9 digits
}
