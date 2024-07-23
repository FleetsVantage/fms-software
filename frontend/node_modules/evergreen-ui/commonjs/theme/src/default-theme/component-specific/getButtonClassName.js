"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const themer_1 = require("../../../../themer");
const scales_1 = __importDefault(require("../foundational-styles/scales"));
const helpers_1 = require("../helpers");
const shared_1 = require("../shared");
const memoizeClassName_1 = __importDefault(require("../utils/memoizeClassName"));
/**
 * Disabled styles are all the same for all buttons.
 */
const { disabled } = shared_1.defaultControlStyles;
/**
 * Get button appearance.
 * @param {string} appearance - default, primary, minimal.
 * @param {string} intent - none, success, warning, danger.
 * @return {Object} the appearance of the button.
 */
const getButtonAppearance = (appearance, intent) => {
    switch (appearance) {
        case 'primary': {
            const { focusColor, linearGradient } = (0, helpers_1.getPrimaryButtonStylesForIntent)(intent);
            return themer_1.Themer.createButtonAppearance({
                disabled,
                base: {
                    color: 'white',
                    backgroundColor: 'white',
                    backgroundImage: linearGradient.base,
                    boxShadow: `inset 0 0 0 1px ${scales_1.default.neutral.N5A}, inset 0 -1px 1px 0 ${scales_1.default.neutral.N2A}`
                },
                hover: {
                    backgroundImage: linearGradient.hover
                },
                focus: {
                    boxShadow: `0 0 0 3px ${focusColor}, inset 0 0 0 1px ${scales_1.default.neutral.N4A}, inset 0 -1px 1px 0 ${scales_1.default.neutral.N5A}`
                },
                active: {
                    backgroundImage: linearGradient.active,
                    boxShadow: `inset 0 0 0 1px ${scales_1.default.neutral.N4A}, inset 0 1px 1px 0 ${scales_1.default.neutral.N2A}`
                },
                focusAndActive: {
                    boxShadow: `0 0 0 3px ${focusColor}, inset 0 0 0 1px ${scales_1.default.neutral.N4A}, inset 0 1px 1px 0 ${scales_1.default.neutral.N2A}`
                }
            });
        }
        case 'minimal': {
            const intentTextColor = (0, helpers_1.getTextColorForIntent)(intent, scales_1.default.blue.B9);
            return themer_1.Themer.createButtonAppearance({
                disabled,
                base: {
                    color: intentTextColor,
                    backgroundColor: 'transparent'
                },
                hover: {
                    backgroundColor: scales_1.default.neutral.N2A
                },
                focus: {
                    boxShadow: `0 0 0 3px ${scales_1.default.blue.B5A}`
                },
                active: {
                    backgroundImage: 'none',
                    backgroundColor: scales_1.default.blue.B3A
                },
                focusAndActive: {}
            });
        }
        case 'default':
        default: {
            const intentTextColor = (0, helpers_1.getTextColorForIntent)(intent);
            return themer_1.Themer.createButtonAppearance({
                disabled,
                base: Object.assign({ color: intentTextColor }, shared_1.defaultControlStyles.base),
                hover: shared_1.defaultControlStyles.hover,
                focus: shared_1.defaultControlStyles.focus,
                active: shared_1.defaultControlStyles.active,
                focusAndActive: shared_1.defaultControlStyles.focusAndActive
            });
        }
    }
};
/**
 * Get the className of a `Button`|`IconButton`.
 * @param {string} appearance - default, primary, minimal.
 * @param {Intent} intent - none, success, warning, danger.
 * @return {string} the appearance class name.
 */
exports.default = (0, memoizeClassName_1.default)(getButtonAppearance);
