"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validators_1 = require("./validators");
const israel_1 = require("./validators/israel");
const germany_1 = require("./validators/germany");
const usa_1 = require("./validators/usa");
const france_1 = require("./validators/france");
const india_1 = require("./validators/india");
// Register all validators
(0, validators_1.registerValidator)("IL", israel_1.validateIsraeliId);
(0, validators_1.registerValidator)("DE", germany_1.validateGermanId);
(0, validators_1.registerValidator)("US", usa_1.validateUsaId);
(0, validators_1.registerValidator)("FR", france_1.validateFrenchId);
(0, validators_1.registerValidator)("IN", india_1.validateIndianId);
