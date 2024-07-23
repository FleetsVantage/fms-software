"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const themer_1 = require("../../../../themer");
const palette_1 = __importDefault(require("../foundational-styles/palette"));
const scales_1 = __importDefault(require("../foundational-styles/scales"));
const shared_1 = require("../shared");
const memoizeClassName_1 = __importDefault(require("../utils/memoizeClassName"));
const SelectAppearances = {};
SelectAppearances.default = themer_1.Themer.createSelectAppearance({
    base: shared_1.defaultControlStyles.base,
    disabled: shared_1.defaultControlStyles.disabled,
    invalid: {
        boxShadow: `inset 0 0 0 1px ${palette_1.default.red.base}, inset 0 1px 2px ${scales_1.default.neutral.N4A}`
    },
    hover: shared_1.defaultControlStyles.hover,
    focus: shared_1.defaultControlStyles.focus,
    active: shared_1.defaultControlStyles.active
});
/**
 * Get the appearance of a `Select`.
 * @param {string} appearance
 * @return {string} the appearance object.
 */
const getSelectAppearance = () => {
    return SelectAppearances.default;
};
/**
 * Get the className of a `Select`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
exports.default = (0, memoizeClassName_1.default)(getSelectAppearance);
