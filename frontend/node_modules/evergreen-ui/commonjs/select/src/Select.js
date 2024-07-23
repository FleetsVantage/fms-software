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
const icons_1 = require("../../icons");
const deprecated_theme_helpers_1 = require("../../lib/deprecated-theme-helpers");
const internalStyles = {
    textTransform: 'default',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    border: 'none',
    flex: 1,
    background: 'none',
    width: '100%',
    WebkitFontSmoothing: 'antialiased',
    textDecoration: 'none',
    outline: 'none',
    cursor: 'pointer'
};
const pseudoSelectors = {
    _disabled: '[disabled]',
    _invalid: '&[aria-invalid="true"]',
    _hover: '&:not([disabled]):hover',
    _focus: '&:not([disabled]):focus',
    _active: '&:not([disabled]):active'
};
const getIconSizeForSelect = height => {
    if (height <= 28)
        return 12;
    if (height <= 32)
        return 14; // Slightly bigger than getIconSizeForButton
    if (height <= 40)
        return 16;
    if (height <= 48)
        return 18;
    return 20;
};
const Select = (0, react_1.memo)((0, react_1.forwardRef)(function Select(props, ref) {
    const { appearance = 'default', 'aria-describedby': ariaDescribedby, autoFocus, children, defaultValue, disabled, height: heightProp, id, isInvalid = false, name, onChange, required, value } = props, restProps = __rest(props, ["appearance", 'aria-describedby', "autoFocus", "children", "defaultValue", "disabled", "height", "id", "isInvalid", "name", "onChange", "required", "value"]);
    const themedProps = (0, hooks_1.useStyleConfig)('Select', { appearance, size: restProps.size || 'medium' }, pseudoSelectors, internalStyles);
    const height = heightProp || themedProps.height;
    const textProps = !restProps.size && restProps.height ? (0, deprecated_theme_helpers_1.getTextPropsForControlHeight)(restProps.height) : {};
    const iconSize = getIconSizeForSelect(height);
    const iconMargin = height >= 36 ? 12 : 8;
    return (react_1.default.createElement(ui_box_1.default, Object.assign({ display: "inline-flex", flex: 1, position: "relative", width: "auto", height: height }, restProps, textProps),
        react_1.default.createElement(ui_box_1.default, Object.assign({ is: "select", ref: ref, id: id, name: name, onChange: onChange, defaultValue: defaultValue, value: value, required: required, autoFocus: autoFocus, disabled: disabled, "aria-invalid": String(isInvalid), paddingLeft: Math.round(height / 3.2), paddingRight: iconMargin * 2 + iconSize }, themedProps, { height: "100%", "aria-describedby": ariaDescribedby }), children),
        react_1.default.createElement(icons_1.CaretDownIcon, { color: "default", size: iconSize, position: "absolute", top: "50%", marginTop: -iconSize / 2, right: iconMargin, pointerEvents: "none" })));
}));
Select.propTypes = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ui_box_1.dimensions.propTypes), ui_box_1.spacing.propTypes), ui_box_1.position.propTypes), ui_box_1.layout.propTypes), { 
    /**
     * The id attribute for the select.
     */
    id: prop_types_1.default.string, 
    /**
     * The name attribute for the select.
     */
    name: prop_types_1.default.string, 
    /**
     * The options that are passed to the select.
     */
    children: prop_types_1.default.node, 
    /**
     * The initial value of an uncontrolled select
     */
    defaultValue: prop_types_1.default.any, 
    /**
     * Function called when value changes.
     */
    onChange: prop_types_1.default.func, 
    /**
     * The value of the select.
     */
    value: prop_types_1.default.any, 
    /**
     * When true, the select is required.
     */
    required: prop_types_1.default.bool, 
    /**
     * When true, the select should auto focus.
     */
    autoFocus: prop_types_1.default.bool, 
    /**
     * When true, the select is invalid.
     */
    isInvalid: prop_types_1.default.bool, 
    /**
     * The appearance of the select. The default theme only supports default.
     */
    appearance: prop_types_1.default.string });
exports.default = Select;
