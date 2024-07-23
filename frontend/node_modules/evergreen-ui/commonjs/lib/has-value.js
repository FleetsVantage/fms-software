"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_isempty_1 = __importDefault(require("lodash.isempty"));
/**
 * Returns whether or not the value is non-nil and non-empty
 * @param {string | any[] | null | undefined} value Value to check
 * @returns {value is string | any[]}
 */
const hasValue = value => !(0, lodash_isempty_1.default)(value);
exports.default = hasValue;
