"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const themer_1 = require("../../../../themer");
const palette_1 = __importDefault(require("../foundational-styles/palette"));
const scales_1 = __importDefault(require("../foundational-styles/scales"));
const memoizeClassName_1 = __importDefault(require("../utils/memoizeClassName"));
const TagInputAppearances = {};
TagInputAppearances.default = themer_1.Themer.createTagInputAppearance({
    base: {
        backgroundColor: 'white',
        boxShadow: `inset 0 0 0 1px ${scales_1.default.neutral.N5A}, inset 0 1px 2px ${scales_1.default.neutral.N4A}`
    },
    invalid: {
        boxShadow: `inset 0 0 0 1px ${palette_1.default.red.base}, inset 0 1px 2px ${scales_1.default.neutral.N4A}`
    },
    focus: {
        boxShadow: `inset 0 0 2px ${scales_1.default.neutral.N4A}, inset 0 0 0 1px ${scales_1.default.blue.B7}, 0 0 0 3px ${scales_1.default.blue.B4A}`
    },
    disabled: {
        boxShadow: `inset 0 0 0 1px ${scales_1.default.neutral.N4A}`,
        backgroundColor: scales_1.default.neutral.N2
    }
});
/**
 * Get the appearance of a `TagInput`.
 * @param {string} appearance - the appearance name
 * @return {Object} the appearance object.
 */
const getTextInputAppearance = () => {
    return TagInputAppearances.default;
};
/**
 * Get the className of a `TagInput`.
 * @param {string} appearance - the appearance name
 * @return {string} the appearance class name.
 */
exports.default = (0, memoizeClassName_1.default)(getTextInputAppearance);
