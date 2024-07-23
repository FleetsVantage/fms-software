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
const animationEasing = {
    spring: 'cubic-bezier(0.175, 0.885, 0.320, 1.175)'
};
const iconContainerStyles = {
    transition: `all 500ms ${animationEasing.spring}`,
    opacity: 0,
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 4,
    selectors: {
        '&[data-checked="true"]': {
            opacity: 1,
            transform: 'scale(1)'
        },
        '> svg': {
            transition: `all 500ms ${animationEasing.spring}`,
            transform: 'scale(0)'
        },
        '&[data-checked="true"] > svg': {
            transform: 'scale(1)'
        }
    }
};
const handleContainerStyles = {
    transition: 'transform 200ms ease-in-out',
    transform: 'translateX(0%)',
    selectors: {
        '&[data-checked="true"]': {
            transform: 'translateX(50%)'
        }
    }
};
const CheckIcon = (0, react_1.memo)(function CheckIcon(_a) {
    var { fill = 'currentColor', size } = _a, props = __rest(_a, ["fill", "size"]);
    return (react_1.default.createElement("svg", Object.assign({ width: 10, height: size, viewBox: "0 0 10 7" }, props),
        react_1.default.createElement("path", { fill: fill, fillRule: "evenodd", d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z" })));
});
CheckIcon.propTypes = {
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
    _checked: '&:checked + div',
    _checkedHover: '&:checked:hover + div',
    _checkedActive: '&:not([disabled]):checked:active + div',
    _checkedDisabled: '&[disabled]:checked + div'
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
        '& + div > svg': { display: 'none' },
        [pseudoSelectors._base]: {
            transition: 'all 120ms ease-in-out'
        }
    }
};
const Switch = (0, react_1.memo)((0, react_1.forwardRef)(function Switch(props, ref) {
    const { id, name, height = 16, checked = false, onChange = noop, disabled = false, appearance = 'default', hasCheckIcon = false, defaultChecked } = props, rest = __rest(props, ["id", "name", "height", "checked", "onChange", "disabled", "appearance", "hasCheckIcon", "defaultChecked"]);
    const themedProps = (0, hooks_1.useStyleConfig)('Switch', { appearance }, pseudoSelectors, internalStyles);
    return (react_1.default.createElement(ui_box_1.default, Object.assign({ is: "label", display: "block", width: height * 2, position: "relative", ref: ref }, rest),
        react_1.default.createElement(ui_box_1.default, Object.assign({ is: "input", id: id, name: name }, themedProps, { type: "checkbox", checked: checked, disabled: disabled, defaultChecked: defaultChecked, onChange: onChange })),
        react_1.default.createElement(ui_box_1.default, { height: height, width: height * 2, borderRadius: 9999, cursor: "pointer" },
            react_1.default.createElement(ui_box_1.default, Object.assign({ height: height, width: height, "data-checked": checked }, iconContainerStyles), hasCheckIcon && react_1.default.createElement(CheckIcon, { display: checked ? 'block' : undefined, size: height / 2 - 3 })),
            react_1.default.createElement(ui_box_1.default, Object.assign({ width: height * 2, display: "flex", "data-checked": checked }, handleContainerStyles),
                react_1.default.createElement(ui_box_1.default, { flex: 1, padding: 2 },
                    react_1.default.createElement(ui_box_1.default, { width: height - 4, height: height - 4, backgroundColor: "#fff", borderRadius: 9999 }))))));
}));
Switch.propTypes = Object.assign(Object.assign(Object.assign(Object.assign({}, ui_box_1.spacing.propTypes), ui_box_1.position.propTypes), ui_box_1.layout.propTypes), { 
    /**
     * The id attribute of the radio.
     */
    id: prop_types_1.default.string, 
    /**
     * The name attribute of the radio.
     */
    name: prop_types_1.default.string, 
    /**
     * The value attribute of the radio.
     */
    value: prop_types_1.default.string, 
    /**
     * The height of the switch.
     */
    height: prop_types_1.default.number, 
    /**
     * When true, the switch is checked (on).
     */
    checked: prop_types_1.default.bool, 
    /**
     * Function called when state changes.
     */
    onChange: prop_types_1.default.func, 
    /**
     * When true, the switch is disabled.
     */
    disabled: prop_types_1.default.bool, 
    /**
     * When true, the switch is invalid.
     */
    isInvalid: prop_types_1.default.bool, 
    /**
     * The appearance of the checkbox.
     * The default theme only comes with a default style.
     */
    appearance: prop_types_1.default.string, 
    /**
     * When true, the switch has a check icon.
     */
    hasCheckIcon: prop_types_1.default.bool, 
    /**
     * When true, the switch is true by default.
     * This is for uncontrolled usage.
     */
    defaultChecked: prop_types_1.default.bool });
exports.default = Switch;
