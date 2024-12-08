import { validators } from "./validators";

export function validateId(countryCode: string, id: string): boolean {
    const validator = validators[countryCode];
    if (!validator) {
        throw new Error(`Validation for country code "${countryCode}" is not supported.`);
    }
    return validator(id);
}
