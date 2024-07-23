"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const ui_box_1 = __importStar(require("ui-box"));
const hooks_1 = require("../../hooks");
const deprecated_theme_helpers_1 = require("../../lib/deprecated-theme-helpers");
const theme_1 = require("../../theme");
const pseudoSelectors = {
    _focus: '&:focus',
    _disabled: '&:disabled',
    _invalid: '&[aria-invalid="true"]:not(:focus)',
    _placeholder: '&::placeholder',
    _placeholderHover: '&:hover::placeholder',
    _placeholderFocus: '&:focus::placeholder'
};
const internalStyles = {
    MozAppearance: 'none',
    outline: 'none',
    textDecoration: 'none',
    WebkitAppearance: 'none',
    WebkitFontSmoothing: 'antialiased'
};
const TextInput = (0, react_1.memo)((0, react_1.forwardRef)(function TextInput(props, ref) {
    const { appearance = 'default', className, disabled = false, fontFamily = 'ui', isInvalid = false, placeholder, required, spellCheck = true, width = 280 } = props, restProps = __rest(props, ["appearance", "className", "disabled", "fontFamily", "isInvalid", "placeholder", "required", "spellCheck", "width"]);
    const theme = (0, theme_1.useTheme)();
    const { fontFamilies } = theme;
    const themedFontFamily = fontFamilies[fontFamily] || fontFamily;
    const themedProps = (0, hooks_1.useStyleConfig)('Input', { appearance, size: restProps.size || 'medium' }, pseudoSelectors, internalStyles);
    const height = restProps.height || themedProps.height;
    const textProps = !restProps.size && restProps.height ? (0, deprecated_theme_helpers_1.getTextPropsForControlHeight)(restProps.height) : {};
    return (react_1.default.createElement(ui_box_1.default, Object.assign({ is: "input", className: className, type: "text", width: width, required: required, disabled: disabled, placeholder: placeholder, spellCheck: spellCheck, "aria-invalid": isInvalid, ref: ref, fontFamily: themedFontFamily }, themedProps, restProps, textProps, { height: height })));
}));
TextInput.propTypes = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ui_box_1.dimensions.propTypes), ui_box_1.spacing.propTypes), ui_box_1.position.propTypes), ui_box_1.layout.propTypes), { 
    /**
     * Makes the input element required.
     */
    required: prop_types_1.default.bool, 
    /**
     * Makes the input element disabled.
     */
    disabled: prop_types_1.default.bool, 
    /**
     * Sets visual styling of _only_ the text input to be "invalid".
     * Note that this does not effect any `validationMessage`.
     */
    isInvalid: prop_types_1.default.bool, 
    /**
     * Use the native spell check functionality of the browser.
     */
    spellCheck: prop_types_1.default.bool, 
    /**
     * The placeholder text when there is no value present.
     */
    placeholder: prop_types_1.default.string, 
    /**
     * The appearance of the TextInput.
     */
    appearance: prop_types_1.default.string, 
    /**
     * The width of the TextInput.
     */
    width: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]), 
    /**
     * Class name passed to the button.
     * Only use if you know what you are doing.
     */
    className: prop_types_1.default.string });
exports.default = TextInput;
