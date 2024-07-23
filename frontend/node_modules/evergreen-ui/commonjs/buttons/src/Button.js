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
exports.getIconSizeForButton = exports.pseudoSelectors = exports.internalStyles = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const ui_box_1 = __importStar(require("ui-box"));
const hooks_1 = require("../../hooks");
const IconWrapper_1 = require("../../icons/src/IconWrapper");
const deprecated_theme_helpers_1 = require("../../lib/deprecated-theme-helpers");
const spinner_1 = require("../../spinner");
/* eslint-disable react/prop-types */
const ButtonIcon = (0, react_1.memo)(function ButtonIcon({ edge, icon, size, spacing }) {
    if (!icon)
        return null;
    const relativeSpace = typeof spacing === 'number' ? spacing : size;
    const edgeMargin = -Math.round(relativeSpace * 0.25);
    const innerMargin = Math.round(size * 0.7);
    const marginLeft = edge === 'start' ? edgeMargin : innerMargin;
    const marginRight = edge === 'end' ? edgeMargin : innerMargin;
    return react_1.default.createElement(IconWrapper_1.IconWrapper, { icon: icon, size: size, marginLeft: marginLeft, marginRight: marginRight });
});
/* eslint-enable react/prop-types */
exports.internalStyles = {
    position: 'relative',
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    border: 'none',
    outline: 'none',
    userSelect: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    WebkitFontSmoothing: 'antialiased',
    WebkitAppearance: 'none',
    MozAppearance: 'none'
};
exports.pseudoSelectors = {
    _active: '&:not([disabled]):active,&:not([disabled])[aria-expanded="true"],&:not([disabled])[data-active]',
    _disabled: '&[disabled]',
    _focus: '&:not([disabled]):focus',
    _focusAndActive: '&:not([disabled]):focus:active,&:not([disabled])[aria-expanded="true"]:focus,&:not([disabled])[data-active]:focus',
    _hover: '&:not([disabled]):hover'
};
const getIconSizeForButton = height => {
    if (height <= 28)
        return 12;
    if (height <= 32)
        return 14;
    if (height <= 40)
        return 16;
    if (height <= 48)
        return 18;
    return 20;
};
exports.getIconSizeForButton = getIconSizeForButton;
const Button = (0, react_1.memo)((0, react_1.forwardRef)(function Button(props, ref) {
    const { appearance = 'default', children, className, color, disabled, iconAfter, iconBefore, intent = 'none', is = 'button', isActive = false, isLoading } = props, restProps = __rest(props, ["appearance", "children", "className", "color", "disabled", "iconAfter", "iconBefore", "intent", "is", "isActive", "isLoading"]);
    const themedProps = (0, hooks_1.useStyleConfig)('Button', { appearance, color, intent, size: restProps.size || 'medium' }, exports.pseudoSelectors, exports.internalStyles);
    const height = restProps.height || themedProps.height;
    // Keep backwards compat font sizing if an explicit height was passed in.
    const textProps = !restProps.size && restProps.height ? (0, deprecated_theme_helpers_1.getTextPropsForControlHeight)(restProps.height) : {};
    const iconSize = (0, exports.getIconSizeForButton)(height);
    return (react_1.default.createElement(ui_box_1.default, Object.assign({ is: is, ref: ref, className: className, "data-active": isActive || undefined }, themedProps, restProps, textProps, { disabled: disabled || isLoading }),
        isLoading && (react_1.default.createElement(spinner_1.Spinner, { marginLeft: -Math.round(height / 8), marginRight: Math.round(height / 4), size: Math.round(height / 2) })),
        react_1.default.createElement(ButtonIcon, { icon: iconBefore, size: iconSize, spacing: restProps.paddingLeft, edge: "start" }),
        children,
        react_1.default.createElement(ButtonIcon, { icon: iconAfter, size: iconSize, spacing: restProps.paddingRight, edge: "end" })));
}));
Button.propTypes = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ui_box_1.dimensions.propTypes), ui_box_1.spacing.propTypes), ui_box_1.position.propTypes), ui_box_1.layout.propTypes), { 
    /**
     * The intent of the button.
     */
    intent: prop_types_1.default.string, 
    /**
     * The appearance of the button.
     */
    appearance: prop_types_1.default.string, 
    /**
     * The size of the button
     */
    size: prop_types_1.default.oneOf(['small', 'medium', 'large']), 
    /**
     * When true, show a loading spinner before the children.
     * This also disables the button.
     */
    isLoading: prop_types_1.default.bool, 
    /**
     * Forcefully set the active state of a button.
     * Useful in conjunction with a Popover.
     */
    isActive: prop_types_1.default.bool, 
    /**
     * Sets an icon before the text. Can be any icon from Evergreen or a custom element.
     */
    iconBefore: prop_types_1.default.oneOfType([prop_types_1.default.elementType, prop_types_1.default.element]), 
    /**
     * Sets an icon after the text. Can be any icon from Evergreen or a custom element.
     */
    iconAfter: prop_types_1.default.oneOfType([prop_types_1.default.elementType, prop_types_1.default.element]), 
    /**
     * When true, the button is disabled.
     * isLoading also sets the button to disabled.
     */
    disabled: prop_types_1.default.bool, 
    /**
     * Class name passed to the button.
     * Only use if you know what you are doing.
     */
    className: prop_types_1.default.string });
exports.default = Button;
