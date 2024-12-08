import { registerValidator } from "./validators";
import { validateIsraeliId } from "./validators/israel";
import { validateGermanId } from "./validators/germany";
import { validateUsaId } from "./validators/usa";
import { validateFrenchId } from "./validators/france";
import { validateIndianId } from "./validators/india";
// Register all validators
registerValidator("IL", validateIsraeliId);
registerValidator("DE", validateGermanId);
registerValidator("US", validateUsaId);
registerValidator("FR", validateFrenchId);
registerValidator("IN", validateIndianId);
