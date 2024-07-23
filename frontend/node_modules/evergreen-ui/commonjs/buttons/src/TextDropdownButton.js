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
const IconWrapper_1 = require("../../icons/src/IconWrapper");
const spinner_1 = require("../../spinner");
const Button_1 = require("./Button");
const TextDropdownButton = (0, react_1.memo)((0, react_1.forwardRef)(function TextDropdownButton(props, ref) {
    const { appearance, children, className, disabled, icon = icons_1.CaretDownIcon, is = 'button', isActive = false, isLoading, size = 'medium' } = props, restProps = __rest(props, ["appearance", "children", "className", "disabled", "icon", "is", "isActive", "isLoading", "size"]);
    const themedProps = (0, hooks_1.useStyleConfig)('TextDropdownButton', { size }, Button_1.pseudoSelectors, Button_1.internalStyles);
    return (react_1.default.createElement(ui_box_1.default, Object.assign({ is: is, ref: ref, type: is === 'button' ? 'button' : undefined, className: className, "data-active": isActive || undefined }, themedProps, restProps, { disabled: disabled || isLoading }),
        isLoading && react_1.default.createElement(spinner_1.Spinner, { marginLeft: -2, marginRight: 4, size: 12 }),
        children,
        react_1.default.createElement(IconWrapper_1.IconWrapper, { icon: icon, marginLeft: 2, color: "default", size: 12 })));
}));
TextDropdownButton.propTypes = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ui_box_1.dimensions.propTypes), ui_box_1.spacing.propTypes), ui_box_1.position.propTypes), ui_box_1.layout.propTypes), { 
    /**
     * Forcefully set the active state of a button.
     * Useful in conjuction with a Popover.
     */
    isActive: prop_types_1.default.bool, 
    /**
     * When true, the button is disabled.
     * isLoading also sets the button to disabled.
     */
    disabled: prop_types_1.default.bool, 
    /**
     * An Evergreen icon or custom icon node. By default it uses CaretDownIcon
     */
    icon: prop_types_1.default.oneOfType([prop_types_1.default.elementType, prop_types_1.default.element]), 
    /**
     * Class name passed to the button.
     * Only use if you know what you are doing.
     */
    className: prop_types_1.default.string });
exports.default = TextDropdownButton;
