"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const themer_1 = require("../../../../themer");
const palette_1 = __importDefault(require("../foundational-styles/palette"));
const scales_1 = __importDefault(require("../foundational-styles/scales"));
const memoizeClassName_1 = __importDefault(require("../utils/memoizeClassName"));
const InputAppearances = {};
InputAppearances.default = themer_1.Themer.createInputAppearance({
    base: {
        backgroundColor: 'white',
        boxShadow: `inset 0 0 0 1px ${scales_1.default.neutral.N5A}, inset 0 1px 2px ${scales_1.default.neutral.N4A}`
    },
    invalid: {
        boxShadow: `inset 0 0 0 1px ${palette_1.default.red.base}, inset 0 1px 2px ${scales_1.default.neutral.N4A}`
    },
    placeholder: {
        color: scales_1.default.neutral.N6A
    },
    focus: {
        outline: 'none',
        boxShadow: `inset 0 0 2px ${scales_1.default.neutral.N4A}, inset 0 0 0 1px ${scales_1.default.blue.B7}, 0 0 0 3px ${scales_1.default.blue.B4A}`
    },
    disabled: {
        boxShadow: `inset 0 0 0 1px ${scales_1.default.neutral.N4A}`,
        backgroundColor: scales_1.default.neutral.N2
    }
});
InputAppearances.neutral = themer_1.Themer.createInputAppearance({
    base: {
        backgroundColor: scales_1.default.neutral.N2A
    },
    invalid: {
        boxShadow: `inset 0 0 0 1px ${palette_1.default.red.base}`
    },
    placeholder: {
        color: scales_1.default.neutral.N6A
    },
    focus: {
        outline: 'none',
        backgroundColor: 'white',
        boxShadow: `0 0 0 2px ${scales_1.default.blue.B6A}`
    },
    disabled: {
        boxShadow: `inset 0 0 0 1px ${scales_1.default.neutral.N4A}`,
        backgroundColor: scales_1.default.neutral.N2
    }
});
InputAppearances.none = themer_1.Themer.createInputAppearance({
    base: {
        backgroundColor: 'white'
    },
    invalid: {},
    placeholder: {
        color: scales_1.default.neutral.N6A
    },
    focus: {
        outline: 'none'
    },
    disabled: {
        backgroundColor: scales_1.default.neutral.N2
    }
});
/**
 * Get the appearance of a `TextInput`.
 * @param {string} appearance - the appearance name
 * @return {Object} the appearance object.
 */
const getTextInputAppearance = appearance => {
    switch (appearance) {
        case 'neutral':
            return InputAppearances.neutral;
        case 'none':
            return InputAppearances.none;
        default:
            return InputAppearances.default;
    }
};
/**
 * Get the className of a `TextInput`.
 * @param {string} appearance - the appearance name
 * @return {string} the appearance class name.
 */
exports.default = (0, memoizeClassName_1.default)(getTextInputAppearance);
