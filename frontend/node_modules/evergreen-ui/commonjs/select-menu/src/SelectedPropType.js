"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
/**
 * Selected can either be a string (single values)
 * or an array of string (multiple values)
 * NOTE: multiple values are not supported atm
 */
const SelectedPropType = prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.arrayOf(prop_types_1.default.string)]);
exports.default = SelectedPropType;
