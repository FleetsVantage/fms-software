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
const IconWrapper_1 = require("../../icons/src/IconWrapper");
const Button_1 = __importStar(require("./Button"));
const IconButton = (0, react_1.memo)((0, react_1.forwardRef)(function IconButton(props, ref) {
    const { disabled, icon, iconSize } = props, restProps = __rest(props
    // modifiers
    , ["disabled", "icon", "iconSize"]);
    // modifiers
    const { appearance, intent = 'none', size = 'medium' } = props;
    // Composes the exact same styles as button
    const themedProps = (0, hooks_1.useStyleConfig)('Button', { appearance, intent, size }, Button_1.pseudoSelectors, Button_1.internalStyles);
    const height = restProps.height || themedProps.height;
    const relativeIconSize = (0, Button_1.getIconSizeForButton)(height);
    return (react_1.default.createElement(Button_1.default, Object.assign({ ref: ref, paddingLeft: 0, paddingRight: 0, flex: "none", height: height, width: height, minWidth: height, disabled: disabled }, restProps),
        react_1.default.createElement(IconWrapper_1.IconWrapper, { icon: icon, color: intent === 'none' && !disabled ? 'default' : 'currentColor', size: iconSize || relativeIconSize })));
}));
IconButton.propTypes = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ui_box_1.dimensions.propTypes), ui_box_1.spacing.propTypes), ui_box_1.position.propTypes), ui_box_1.layout.propTypes), { 
    /**
     * The size of the button
     */
    size: prop_types_1.default.oneOf(['small', 'medium', 'large']), 
    /**
     * The Evergreen icon or custom icon to render
     */
    icon: prop_types_1.default.oneOfType([prop_types_1.default.elementType, prop_types_1.default.element]), 
    /**
     * Specifies an explicit icon size instead of the default value
     */
    iconSize: prop_types_1.default.number, 
    /**
     * The intent of the button.
     */
    intent: prop_types_1.default.string, 
    /**
     * The appearance of the button.
     */
    appearance: prop_types_1.default.oneOf(['default', 'minimal', 'primary']), 
    /**
     * Forcefully set the active state of a button.
     * Useful in conjunction with a Popover.
     */
    isActive: prop_types_1.default.bool, 
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
exports.default = IconButton;
