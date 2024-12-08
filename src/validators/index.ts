// Define the ValidatorMap type
type ValidatorMap = {
    [key: string]: (id: string) => boolean;
};

// Mutable validators object
export const validators: ValidatorMap = {};

// Function to register a new validator
export function registerValidator(countryCode: string, validator: (id: string) => boolean): void {
    validators[countryCode] = validator;
}
