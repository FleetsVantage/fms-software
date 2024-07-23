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
    WebkitFontSmoothing: 'antialiased',
    minHeight: 80,
    paddingX: 12,
    paddingY: 8,
    borderRadius: 4
};
const Textarea = (0, react_1.memo)((0, react_1.forwardRef)(function Textarea(props, ref) {
    const { className, disabled = false, fontFamily = 'ui', grammarly = false, height, isInvalid = false, placeholder, required, spellCheck = true, width = '100%' } = props, restProps = __rest(props, ["className", "disabled", "fontFamily", "grammarly", "height", "isInvalid", "placeholder", "required", "spellCheck", "width"]);
    const theme = (0, theme_1.useTheme)();
    const { fontFamilies } = theme;
    const themedFontFamily = fontFamilies[fontFamily] || fontFamily;
    const themedProps = (0, hooks_1.useStyleConfig)('Input', { appearance: 'default' }, pseudoSelectors, internalStyles);
    return (react_1.default.createElement(ui_box_1.default, Object.assign({ is: "textarea", ref: ref, className: className, width: width, height: height, required: required, disabled: disabled, placeholder: placeholder, spellCheck: spellCheck, "aria-invalid": isInvalid, "data-gramm_editor": grammarly, fontFamily: themedFontFamily }, themedProps, restProps)));
}));
Textarea.propTypes = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ui_box_1.dimensions.propTypes), ui_box_1.spacing.propTypes), ui_box_1.position.propTypes), ui_box_1.layout.propTypes), { 
    /**
     * Makes the textarea element required.
     */
    required: prop_types_1.default.bool, 
    /**
     * Makes the textarea element disabled.
     */
    disabled: prop_types_1.default.bool, 
    /**
     * Sets visual styling of _only_ the text area to be "invalid".
     * Note that this does not effect any `validationMessage`.
     */
    isInvalid: prop_types_1.default.bool, 
    /**
     * Use the native spell check functionality of the browser.
     */
    spellCheck: prop_types_1.default.bool, 
    /**
     * Allow the Grammarly browser extension to attach to the backing textarea.
     */
    grammarly: prop_types_1.default.bool, 
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
exports.default = Textarea;
