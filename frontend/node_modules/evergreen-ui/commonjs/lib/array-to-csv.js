"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_isempty_1 = __importDefault(require("lodash.isempty"));
/**
 * Converts an array to a comma separated string
 * @param {string[]} value
 * @returns {string}
 */
const arrayToCsv = value => {
    // Accept only array values + ensure there values inside the array, otherwise
    // there's nothing to join
    if (!Array.isArray(value) || (0, lodash_isempty_1.default)(value)) {
        return '';
    }
    return value.join(',');
};
exports.default = arrayToCsv;
