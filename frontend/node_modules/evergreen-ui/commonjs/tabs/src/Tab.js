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
const hooks_1 = require("../../hooks");
const safe_invoke_1 = __importDefault(require("../../lib/safe-invoke"));
const warning_1 = __importDefault(require("../../lib/warning"));
const typography_1 = require("../../typography");
const noop = () => { };
const getInternalStyles = direction => ({
    alignItems: 'center',
    justifyContent: direction === 'horizontal' ? 'center' : 'flex-start',
    textDecoration: 'none',
    cursor: 'pointer',
    outline: 'none',
    WebkitFontSmoothing: 'antialiased',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    display: direction === 'horizontal' ? 'inline-flex' : 'flex',
    width: direction === 'horizontal' ? 'auto' : '100%'
});
const pseudoSelectors = {
    _active: '&:active',
    _after: '&:after',
    _before: '&:before',
    _current: '&[aria-current="page"],&[aria-selected="true"]',
    _disabled: '&[aria-disabled="true"]',
    _focus: '&:focus',
    _hover: '&:hover'
};
const Tab = (0, react_1.memo)((0, react_1.forwardRef)(function Tab(props, ref) {
    const { appearance = 'secondary', direction = 'horizontal', disabled = false, is = 'span', isSelected, onKeyDown = noop, onSelect = noop, height = 28, className, tabIndex } = props, rest = __rest(props, ["appearance", "direction", "disabled", "is", "isSelected", "onKeyDown", "onSelect", "height", "className", "tabIndex"]);
    const themedProps = (0, hooks_1.useStyleConfig)('Tab', { appearance, direction }, pseudoSelectors, getInternalStyles(direction));
    const onClickRef = (0, hooks_1.useLatest)(props.onClick);
    const handleClick = (0, react_1.useCallback)(event => {
        (0, safe_invoke_1.default)(onClickRef.current, event);
        if (!disabled) {
            onSelect();
        }
    }, 
    // onClickRef is a ref, but eslint can't figure that out
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [disabled, onSelect]);
    const clickableProps = (0, hooks_1.useClickable)({ disabled, onKeyDown, tabIndex });
    if (process.env.NODE_ENV !== 'production') {
        (0, warning_1.default)(typeof props.onClick === 'function', '<Tab> expects `onSelect` prop, but you passed `onClick`.');
    }
    let elementBasedProps;
    if (disabled) {
        elementBasedProps = {
            'aria-disabled': true
        };
    }
    if (is === 'a') {
        // Use aria-current when it's a link
        // https://tink.uk/using-the-aria-current-attribute/
        elementBasedProps = isSelected
            ? Object.assign(Object.assign({}, elementBasedProps), { 'aria-current': 'page' }) : {};
    }
    else {
        // Use a role="tablist" around the tabs
        // Also pass down a aria-controls="panelId"
        // https://www.stefanjudis.com/blog/aria-selected-and-when-to-use-it/
        elementBasedProps = Object.assign(Object.assign({}, elementBasedProps), { 'aria-selected': isSelected, role: 'tab' });
    }
    return (react_1.default.createElement(typography_1.Text, Object.assign({ className: className, is: is, size: 300, height: height, ref: ref, tabIndex: 0 }, themedProps, rest, { onClick: handleClick }, clickableProps, elementBasedProps)));
}));
Tab.propTypes = Object.assign(Object.assign({}, typography_1.Text.propTypes), { 
    /**
     * Function triggered when tab is selected.
     */
    onSelect: prop_types_1.default.func, 
    /**
     * When true, the tab is selected.
     */
    isSelected: prop_types_1.default.bool, 
    /**
     * The appearance of the tab.
     * The default theme has primary, and secondary. The default is secondary
     */
    appearance: prop_types_1.default.string, 
    /**
     * The directionality of the tab.
     * If the tab is apart of a vertical or horizontal list
     */
    direction: prop_types_1.default.oneOf(['horizontal', 'vertical']), 
    /**
     * Class name passed to the Tab.
     * Only use this if you know what you are doing.
     */
    className: prop_types_1.default.string });
exports.default = Tab;
