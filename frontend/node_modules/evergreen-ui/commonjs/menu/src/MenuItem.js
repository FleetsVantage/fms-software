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
const ui_box_1 = __importDefault(require("ui-box"));
const hooks_1 = require("../../hooks");
const IconWrapper_1 = require("../../icons/src/IconWrapper");
const layers_1 = require("../../layers");
const typography_1 = require("../../typography");
const noop = () => { };
const pseudoSelectors = {
    _hover: '&[data-isselectable="true"]:not([aria-current="true"]):not([aria-checked="true"]):not(:focus):not(:active):hover',
    _focus: '&[data-isselectable="true"]:not([aria-current="true"]):not([aria-checked="true"]):focus,&[aria-selected="true"]',
    _active: '&[aria-current="true"],&[data-isselectable="true"]:active',
    _current: '&[aria-current="true"],&[aria-checked="true"]',
    _isSelectable: '&[data-isselectable="true"]',
    _disabled: '&:disabled,&[aria-disabled="true"]'
};
const internalStyles = {
    display: 'flex',
    alignItems: 'center'
};
const MenuItem = (0, react_1.memo)((0, react_1.forwardRef)(function MenuItem(props, ref) {
    const { is = 'div', children, className, appearance = 'default', disabled, secondaryText, intent = 'none', icon, onSelect = noop } = props, passthroughProps = __rest(props, ["is", "children", "className", "appearance", "disabled", "secondaryText", "intent", "icon", "onSelect"]);
    const handleClick = (0, react_1.useCallback)(event => {
        if (disabled)
            return;
        onSelect(event);
    }, [disabled, onSelect]);
    // Pass all props, so the hook can handled `disabled`, `onKeyDown`, `tabIndex`
    // and any other explicit props that are passed through to the underlying component
    const { onKeyDown, tabIndex } = (0, hooks_1.useClickable)(props);
    const themedProps = (0, hooks_1.useStyleConfig)('MenuItem', { appearance }, pseudoSelectors, internalStyles);
    let iconColor = intent === 'none' ? 'default' : intent;
    if (disabled) {
        iconColor = 'muted';
    }
    const textColor = disabled ? 'muted' : intent;
    const secondaryTextColor = 'muted';
    const disabledProps = (0, react_1.useMemo)(() => {
        return disabled
            ? {
                backgroundColor: 'tint1',
                cursor: 'not-allowed',
                disabled: true,
                onClick: null,
                onKeyPress: null,
                tabIndex: -1,
                'aria-disabled': 'true',
                'data-isselectable': 'false'
            }
            : {};
    }, [disabled]);
    return (react_1.default.createElement(layers_1.Pane, Object.assign({ is: is, role: "menuitem", className: className, onClick: handleClick, "data-isselectable": !disabled || undefined, "aria-disabled": disabled, ref: ref, height: icon ? 40 : 32 }, themedProps, passthroughProps, disabledProps, { tabIndex: tabIndex, onKeyDown: onKeyDown }),
        react_1.default.createElement(IconWrapper_1.IconWrapper, { icon: icon, color: iconColor, marginLeft: 16, marginRight: -4, size: 16, flexShrink: 0 }),
        react_1.default.createElement(typography_1.Text, { color: textColor, marginLeft: 16, marginRight: 16, flex: 1 }, children),
        secondaryText && (react_1.default.createElement(typography_1.Text, { marginRight: 16, color: secondaryTextColor }, secondaryText))));
}));
MenuItem.propTypes = {
    /**
     * Element type to use for the menu item.
     * For example: `<MenuItem is={ReactRouterLink}>...</MenuItem>`
     */
    is: ui_box_1.default.propTypes.is,
    /**
     * Class name passed to the component.
     * Only use if you know what you are doing.
     */
    className: prop_types_1.default.string,
    /**
     * Function that is called on click and enter/space keypress.
     */
    onSelect: prop_types_1.default.func,
    /**
     * The Evergreen or custom icon before the label.
     */
    icon: prop_types_1.default.oneOfType([prop_types_1.default.elementType, prop_types_1.default.element]),
    /**
     * The children of the component.
     */
    children: prop_types_1.default.node,
    /**
     * Secondary text shown on the right.
     */
    secondaryText: prop_types_1.default.node,
    /**
     * The default theme only supports one default appearance.
     */
    appearance: prop_types_1.default.string,
    /**
     * The intent of the menu item.
     */
    intent: prop_types_1.default.string,
    /**
     * Flag to indicate whether the menu item is disabled or not
     */
    disabled: prop_types_1.default.bool
};
exports.default = MenuItem;
