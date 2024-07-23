"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("./colors"));
const fills_1 = __importDefault(require("./fills"));
const intents_1 = __importDefault(require("./intents"));
const radii_1 = __importDefault(require("./radii"));
const shadows_1 = __importDefault(require("./shadows"));
const typography_1 = __importDefault(require("./typography"));
const z_indices_1 = __importDefault(require("./z-indices"));
const tokens = Object.assign(Object.assign({ colors: colors_1.default,
    fills: fills_1.default,
    intents: intents_1.default,
    radii: radii_1.default,
    shadows: shadows_1.default }, typography_1.default), { zIndices: z_indices_1.default });
exports.default = tokens;
