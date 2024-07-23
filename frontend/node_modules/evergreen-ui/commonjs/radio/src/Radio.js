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
const typography_1 = require("../../typography");
const CircleIcon = (0, react_1.memo)(function CircleIcon(_a) {
    var { fill = 'currentColor', size } = _a, props = __rest(_a, ["fill", "size"]);
    return (react_1.default.createElement("svg", Object.assign({ width: size, height: size, viewBox: "0 0 10 10" }, props),
        react_1.default.createElement("circle", { fill: fill, cx: "5", cy: "5", r: "5" })));
});
CircleIcon.propTypes = {
    fill: prop_types_1.default.string,
    size: prop_types_1.default.number
};
const noop = () => { };
const pseudoSelectors = {
    _base: '& + div',
    _disabled: '&[disabled] + div',
    _hover: '&:not([disabled]):hover + div',
    _focus: '&:not([disabled]):focus + div',
    _active: '&:not([disabled]):active + div',
    _checked: '&:checked + div,&[type=checkbox]:indeterminate + div',
    _checkedHover: '&:not([disabled]):checked:hover + div,&[type=checkbox]:not([disabled]):indeterminate:hover + div',
    _checkedActive: '&:not([disabled]):checked:active + div,&[type=checkbox]:not([disabled]):indeterminate:active + div',
    _checkedDisabled: '&[disabled]:checked + div,&[type=checkbox][disabled]:indeterminate + div'
};
const internalStyles = {
    border: '0',
    clip: 'rect(1px, 1px, 1px, 1px)',
    height: '1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
    opacity: '0',
    selectors: {
        [pseudoSelectors._base]: {
            WebkitFontSmoothing: 'antialiased',
            textDecoration: 'none',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            border: 'none',
            outline: 'none',
            cursor: 'pointer'
        }
    }
};
const Radio = (0, react_1.memo)((0, react_1.forwardRef)(function Radio(props, ref) {
    const { id, name, label, disabled, isInvalid = false, checked, onChange = noop, value, size = 12, isRequired = false, appearance = 'default' } = props, rest = __rest(props, ["id", "name", "label", "disabled", "isInvalid", "checked", "onChange", "value", "size", "isRequired", "appearance"]);
    const themedProps = (0, hooks_1.useStyleConfig)('Radio', { appearance }, pseudoSelectors, internalStyles);
    return (react_1.default.createElement(ui_box_1.default, Object.assign({ is: "label", ref: ref, cursor: disabled ? 'not-allowed' : 'pointer', position: "relative", display: "flex", marginY: size === 12 ? 8 : 12 }, rest),
        react_1.default.createElement(ui_box_1.default, Object.assign({ is: "input", id: id, type: "radio", name: name, value: value, checked: checked, onChange: onChange, disabled: disabled, "aria-invalid": isInvalid }, themedProps, { required: isRequired })),
        react_1.default.createElement(ui_box_1.default, { boxSizing: "border-box", borderRadius: 9999, display: "flex", flex: "none", alignItems: "center", justifyContent: "center", marginTop: 2, width: size, height: size },
            react_1.default.createElement(CircleIcon, { size: size / 2 })),
        label && (react_1.default.createElement(typography_1.Text, { marginLeft: size === 12 ? 8 : 10, size: size === 12 ? 300 : 400, color: disabled ? 'muted' : 'default' }, label))));
}));
Radio.propTypes = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ui_box_1.spacing.propTypes), ui_box_1.position.propTypes), ui_box_1.layout.propTypes), ui_box_1.dimensions.propTypes), { 
    /**
     * The id attribute of the radio.
     */
    id: prop_types_1.default.string, 
    /**
     * The name attribute of the radio.
     */
    name: prop_types_1.default.string, 
    /**
     * Label of the radio.
     */
    label: prop_types_1.default.node, 
    /**
     * The value attribute of the radio.
     */
    value: prop_types_1.default.string, 
    /**
     * Function called when state changes
     * Signature:
     * ```
     * function(event: object, checked: boolean) => void
     * ```
     */
    onChange: prop_types_1.default.func, 
    /**
     * When true, the radio is disabled.
     */
    disabled: prop_types_1.default.bool, 
    /**
     * When true, the radio is checked.
     */
    checked: prop_types_1.default.bool, 
    /**
     * The size of the radio circle. This also informs the text size and spacing.
     */
    size: prop_types_1.default.oneOf([12, 16]), 
    /**
     * When true, the radio get the required attribute.
     */
    isRequired: prop_types_1.default.bool, 
    /**
     * When true, the aria-invalid attribute is true.
     * Used for accessibility.
     */
    isInvalid: prop_types_1.default.bool, 
    /**
     * The appearance of the checkbox.
     * The default theme only comes with a default style.
     */
    appearance: prop_types_1.default.string });
exports.default = Radio;
