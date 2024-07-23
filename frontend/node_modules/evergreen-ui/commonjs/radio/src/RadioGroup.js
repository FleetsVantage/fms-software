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
const ui_box_1 = require("ui-box");
const hooks_1 = require("../../hooks");
const layers_1 = require("../../layers");
const typography_1 = require("../../typography");
const Radio_1 = __importDefault(require("./Radio"));
const noop = () => { };
const emptyArray = [];
const emptyString = '';
const RadioGroup = (0, react_1.memo)((0, react_1.forwardRef)(function RadioGroup(props, ref) {
    const { size = 12, label, defaultValue, value, options = emptyArray, onChange = noop, isRequired = false, name = emptyString } = props, rest = __rest(props, ["size", "label", "defaultValue", "value", "options", "onChange", "isRequired", "name"]);
    const autoNameAttribute = (0, hooks_1.useId)('RadioGroup');
    const nameAttribute = name || autoNameAttribute;
    const selected = value || defaultValue || props.options[0].value;
    return (react_1.default.createElement(layers_1.Pane, Object.assign({ role: "group", "aria-label": label }, rest, { ref: ref }),
        label && (react_1.default.createElement(typography_1.Text, { color: "muted", fontWeight: 500 }, label)),
        options.map(item => (react_1.default.createElement(Radio_1.default, { key: item.value, size: size, name: nameAttribute, value: item.value, label: item.label, checked: selected === item.value, disabled: item.isDisabled, onChange: onChange, isRequired: isRequired })))));
}));
RadioGroup.propTypes = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ui_box_1.spacing.propTypes), ui_box_1.position.propTypes), ui_box_1.layout.propTypes), ui_box_1.dimensions.propTypes), { 
    /**
     * The options for the radios of the Radio Group.
     */
    options: prop_types_1.default.arrayOf(prop_types_1.default.shape({
        label: prop_types_1.default.node.isRequired,
        value: prop_types_1.default.string.isRequired,
        isDisabled: prop_types_1.default.bool
    })).isRequired, 
    /**
     * The selected item value when controlled.
     */
    value: prop_types_1.default.string, 
    /**
     * The default value of the Radio Group when uncontrolled.
     */
    defaultValue: prop_types_1.default.string, 
    /**
     * Function called when state changes.
     */
    onChange: prop_types_1.default.func, 
    /**
     * Label to display above the radio button options.
     */
    label: prop_types_1.default.string, 
    /**
     * The size of the radio circle. This also informs the text size and spacing.
     */
    size: prop_types_1.default.oneOf([12, 16]), 
    /**
     * When true, the radio get the required attribute.
     */
    isRequired: prop_types_1.default.bool, 
    /**
     * The name attribute for HTML radio button. Default to auto-generated string with 'RadioGroup' prefix
     */
    name: prop_types_1.default.string });
exports.default = RadioGroup;
