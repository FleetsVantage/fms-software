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
const form_field_1 = require("../../form-field");
const hooks_1 = require("../../hooks");
const generate_aria_describedby_1 = require("../../lib/generate-aria-describedby");
const Select_1 = __importDefault(require("./Select"));
const SelectField = (0, react_1.memo)((0, react_1.forwardRef)(function SelectField(props, ref) {
    const id = (0, hooks_1.useId)('SelectField', props.id);
    const { 
    // We are using the id from the state
    appearance, 
    // FormField props
    description, disabled, hint, id: unusedId, 
    // TextInput props
    inputHeight = 32, 
    /** The input width should be as wide as the form field. */
    inputWidth = '100%', isInvalid, label, required, validationMessage } = props, 
    // Rest props are spread on the FormField
    rest = __rest(props
    /**
     * Split the wrapper props from the input props.
     */
    , ["appearance", "description", "disabled", "hint", "id", "inputHeight", "inputWidth", "isInvalid", "label", "required", "validationMessage"]);
    /**
     * Split the wrapper props from the input props.
     */
    const { matchedProps, remainingProps } = (0, ui_box_1.splitBoxProps)(rest);
    return (react_1.default.createElement(form_field_1.FormField, Object.assign({ marginBottom: 24, label: label, isRequired: required, hint: hint, description: description, validationMessage: validationMessage, labelFor: id }, matchedProps),
        react_1.default.createElement(Select_1.default, Object.assign({ id: id, width: inputWidth, height: inputHeight, disabled: disabled, required: required, isInvalid: isInvalid, appearance: appearance, ref: ref, "aria-describedby": (0, generate_aria_describedby_1.generateAriaDescribedBy)(id, { description, hint, validationMessage }) }, remainingProps))));
}));
SelectField.propTypes = Object.assign(Object.assign(Object.assign({}, Select_1.default.propTypes), form_field_1.FormField.propTypes), { 
    /**
     * The label used above the input element.
     */
    label: prop_types_1.default.node.isRequired, 
    /**
     * Passed on the label as a htmlFor prop.
     */
    labelFor: prop_types_1.default.string, 
    /**
     * Whether or not to show an asterix after the label.
     */
    required: prop_types_1.default.bool, 
    /**
     * An optional description of the field under the label, above the input element.
     */
    description: prop_types_1.default.node, 
    /**
     * An optional hint under the input element.
     */
    hint: prop_types_1.default.node, 
    /**
     * If a validation message is passed it is shown under the input element
     * and above the hint. This is unaffected by `isInvalid`.
     */
    validationMessage: prop_types_1.default.node, 
    /**
     * The height of the input element.
     */
    inputHeight: prop_types_1.default.number, 
    /**
     * The width of the input width.
     */
    inputWidth: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]) });
exports.default = SelectField;
