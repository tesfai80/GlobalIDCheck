export function validateFrenchId(id: string): boolean {
    // Remove any non-numeric characters
    id = id.replace(/\D/g, "");

    // Ensure the ID is exactly 15 digits
    if (id.length !== 15) return false;

    // Split into base number and key
    const baseNumber = id.slice(0, -2);
    const providedKey = parseInt(id.slice(-2), 10);

    // Calculate the key
    const calculatedKey = 97 - (parseInt(baseNumber, 10) % 97);

    // Compare the provided key with the calculated key
    return providedKey === calculatedKey;
}
