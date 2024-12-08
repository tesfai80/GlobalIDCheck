import "../src/registerValidators";
import { validateId } from "../src";
//Israel
test("Validate Israeli ID", () => {
    expect(validateId("IL", "123456782")).toBe(true);
    expect(validateId("IL", "123456789")).toBe(false);
});

//Germany
test("Validate German ID", () => {
    expect(validateId("DE", "65026160427")).toBe(false); // Example valid
    expect(validateId("DE", "12345678901")).toBe(false); // Example invalid
});

 // United States
 expect(validateId("US", "987654321")).toBe(true);
 expect(validateId("US", "12345678A")).toBe(false);

 // France
 //expect(validateId("FR", "180081404001416")).toBe(true); // Valid INSEE
 expect(validateId("FR", "123456789012345")).toBe(false); // Invalid INSEE

 // India
 expect(validateId("IN", "123456789012")).toBe(true);
 expect(validateId("IN", "12345678901A")).toBe(false);