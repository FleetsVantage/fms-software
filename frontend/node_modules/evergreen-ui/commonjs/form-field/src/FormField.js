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
const FormFieldDescription_1 = __importDefault(require("./FormFieldDescription"));
const FormFieldHint_1 = __importDefault(require("./FormFieldHint"));
const FormFieldLabel_1 = __importDefault(require("./FormFieldLabel"));
const FormFieldValidationMessage_1 = __importDefault(require("./FormFieldValidationMessage"));
const FormField = (0, react_1.memo)((0, react_1.forwardRef)(function FormField(props, ref) {
    const { hint, label, labelFor, children, isRequired, labelProps = { size: 400 }, description, validationMessage } = props, rest = __rest(props, ["hint", "label", "labelFor", "children", "isRequired", "labelProps", "description", "validationMessage"]);
    return (react_1.default.createElement(ui_box_1.default, Object.assign({}, rest, { ref: ref }),
        react_1.default.createElement(ui_box_1.default, { display: "flex", flexDirection: "column", marginBottom: 8 },
            react_1.default.createElement(FormFieldLabel_1.default, Object.assign({ htmlFor: labelFor, isAstrixShown: isRequired }, labelProps), label),
            typeof description === 'string' ? (react_1.default.createElement(FormFieldDescription_1.default, { id: labelFor + '__description' }, description)) : (description)),
        children,
        typeof validationMessage === 'string' ? (react_1.default.createElement(FormFieldValidationMessage_1.default, { marginTop: 8, id: labelFor + '__validation-message' }, validationMessage)) : (validationMessage),
        typeof hint === 'string' ? (react_1.default.createElement(FormFieldHint_1.default, { marginTop: 6, id: labelFor + '__hint' }, hint)) : (hint)));
}));
FormField.propTypes = Object.assign(Object.assign(Object.assign(Object.assign({ 
    /**
     * The label used above the input element.
     */
    label: prop_types_1.default.node, 
    /**
     * Passed on the label as a htmlFor prop.
     */
    labelFor: prop_types_1.default.string, 
    /**
     * Whether or not show an asterix after the label.
     */
    isRequired: prop_types_1.default.bool, 
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
    validationMessage: prop_types_1.default.node }, ui_box_1.dimensions.propTypes), ui_box_1.spacing.propTypes), ui_box_1.position.propTypes), ui_box_1.layout.propTypes);
exports.default = FormField;
