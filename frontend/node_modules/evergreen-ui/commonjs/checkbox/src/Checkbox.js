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
const CheckIcon = (_a) => {
    var { fill = 'currentColor' } = _a, props = __rest(_a, ["fill"]);
    return (react_1.default.createElement("svg", Object.assign({ width: 10, height: 7, viewBox: "0 0 10 7" }, props),
        react_1.default.createElement("path", { fill: fill, fillRule: "evenodd", d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z" })));
};
CheckIcon.propTypes = {
    fill: prop_types_1.default.string
};
const MinusIcon = (_a) => {
    var { fill = 'currentColor' } = _a, props = __rest(_a, ["fill"]);
    return (react_1.default.createElement("svg", Object.assign({ width: 16, height: 16, viewBox: "0 0 16 16" }, props),
        react_1.default.createElement("path", { fill: fill, fillRule: "evenodd", d: "M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z" })));
};
MinusIcon.propTypes = {
    fill: prop_types_1.default.string
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
    WebkitFontSmoothing: 'antialiased',
    textDecoration: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    width: '1px',
    opacity: '0',
    selectors: {
        [pseudoSelectors._base]: {
            outline: 'none',
            cursor: 'pointer'
        }
    }
};
const Checkbox = (0, react_1.memo)((0, react_1.forwardRef)(function Checkbox(props, forwardedRef) {
    const { id, name, label, appearance = 'default', disabled, isInvalid, checked = false, onChange = noop, value, indeterminate = false } = props, rest = __rest(props, ["id", "name", "label", "appearance", "disabled", "isInvalid", "checked", "onChange", "value", "indeterminate"]);
    const [ref, setRef] = (0, react_1.useState)(null);
    const callbackRef = (0, hooks_1.useMergedRef)(setRef, forwardedRef);
    (0, react_1.useEffect)(() => {
        if (ref) {
            ref.indeterminate = indeterminate;
        }
    }, [ref, indeterminate]);
    const themedProps = (0, hooks_1.useStyleConfig)('Checkbox', { appearance }, pseudoSelectors, internalStyles);
    return (react_1.default.createElement(ui_box_1.default, Object.assign({ is: "label", cursor: disabled ? 'not-allowed' : 'pointer', position: "relative", display: "flex", marginY: 16 }, rest),
        react_1.default.createElement(ui_box_1.default, Object.assign({ is: "input", id: id, type: "checkbox", name: name, value: value, checked: checked || indeterminate, onChange: onChange, disabled: disabled, "aria-invalid": isInvalid }, themedProps, { ref: callbackRef })),
        react_1.default.createElement(ui_box_1.default, { boxSizing: "border-box", borderRadius: 3, display: "flex", flex: "none", alignItems: "center", justifyContent: "center", width: 16, height: 16 }, indeterminate ? react_1.default.createElement(MinusIcon, null) : react_1.default.createElement(CheckIcon, null)),
        label && (react_1.default.createElement(typography_1.Text, { marginLeft: 8, size: 300, color: disabled ? 'muted' : 'default' }, label))));
}));
Checkbox.propTypes = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ui_box_1.spacing.propTypes), ui_box_1.position.propTypes), ui_box_1.layout.propTypes), ui_box_1.dimensions.propTypes), { 
    /**
     * The id attribute of the checkbox.
     */
    id: prop_types_1.default.string, 
    /**
     * The id attribute of the checkbox.
     */
    name: prop_types_1.default.string, 
    /**
     * Label of the checkbox.
     */
    label: prop_types_1.default.node, 
    /**
     * The value attribute of the checkbox.
     */
    value: prop_types_1.default.string, 
    /**
     * The checked attribute of the checkbox.
     */
    checked: prop_types_1.default.bool, 
    /**
     * State in addition to "checked" and "unchecked".
     * When true, the checkbox displays a "minus" icon.
     */
    indeterminate: prop_types_1.default.bool, 
    /**
     * Function called when state changes.
     */
    onChange: prop_types_1.default.func, 
    /**
     * When true, the checkbox is disabled.
     */
    disabled: prop_types_1.default.bool, 
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
exports.default = Checkbox;
