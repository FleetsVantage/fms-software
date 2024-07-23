"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const themer_1 = require("../../../../themer");
const scales_1 = __importDefault(require("../foundational-styles/scales"));
const helpers_1 = require("../helpers");
const memoizeClassName_1 = __importDefault(require("../utils/memoizeClassName"));
const primaryStyle = (0, helpers_1.getPrimaryButtonStylesForIntent)();
const defaultAppearance = themer_1.Themer.createCheckboxAppearance({
    base: {
        color: 'white',
        backgroundColor: 'white',
        backgroundImage: `linear-gradient(to top, ${scales_1.default.neutral.N2A}, white)`,
        boxShadow: `inset 0 0 0 1px ${scales_1.default.neutral.N4A}, inset 0 -1px 1px 0 ${scales_1.default.neutral.N3A}`
    },
    disabled: {
        cursor: 'not-allowed',
        boxShadow: `inset 0 0 0 1px ${scales_1.default.neutral.N4A}`,
        backgroundColor: scales_1.default.neutral.N2A,
        backgroundImage: 'none'
    },
    hover: {
        backgroundImage: `linear-gradient(to top, ${scales_1.default.neutral.N2A}, ${scales_1.default.neutral.N1A})`,
        boxShadow: `inset 0 0 0 1px ${scales_1.default.neutral.N4A}, inset 0 -1px 1px 0 ${scales_1.default.neutral.N2A}`
    },
    focus: {
        boxShadow: `0 0 0 2px ${scales_1.default.blue.B4A}, inset 0 0 0 1px ${scales_1.default.neutral.N5A}, inset 0 -1px 1px 0 ${scales_1.default.neutral.N3A}`
    },
    active: {
        backgroundImage: 'none',
        backgroundColor: scales_1.default.blue.B3A,
        boxShadow: `inset 0 0 0 1px ${scales_1.default.blue.B5A}`
    },
    checked: {
        color: 'white',
        backgroundImage: primaryStyle.linearGradient.base,
        boxShadow: `inset 0 0 0 1px ${scales_1.default.neutral.N5A}, inset 0 -1px 1px 0 ${scales_1.default.neutral.N2A}`
    },
    checkedHover: {
        color: 'white',
        backgroundImage: primaryStyle.linearGradient.hover,
        boxShadow: `inset 0 0 0 1px ${scales_1.default.neutral.N5A}, inset 0 -1px 1px 0 ${scales_1.default.neutral.N2A}`
    },
    checkedDisabled: {
        color: scales_1.default.neutral.N6A,
        backgroundImage: `linear-gradient(to top, ${scales_1.default.neutral.N2A}, ${scales_1.default.neutral.N1A})`,
        boxShadow: `inset 0 0 0 1px ${scales_1.default.neutral.N4A}, inset 0 -1px 1px 0 ${scales_1.default.neutral.N2A}`
    },
    checkedActive: {
        color: 'white',
        backgroundImage: primaryStyle.linearGradient.active,
        boxShadow: `inset 0 0 0 1px ${scales_1.default.neutral.N4A}, inset 0 -1px 1px 0 ${scales_1.default.neutral.N2A}`
    }
});
/**
 * There is only a single appearance in the default theme.
 * @param {String} appearance.
 * @return {Object} the appearance of the checkbox.
 */
const getCheckboxAppearance = () => {
    return defaultAppearance;
};
/**
 * Get the className of a `Checkbox`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
exports.default = (0, memoizeClassName_1.default)(getCheckboxAppearance);
