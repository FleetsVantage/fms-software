"use strict";
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
exports.useStyleConfig = void 0;
const react_1 = require("react");
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const react_fast_compare_1 = __importDefault(require("react-fast-compare"));
const ui_box_1 = require("ui-box");
const theme_1 = require("../theme");
/**
 * @typedef {object} StateStyles
 * @property {import('csstype').Properties} [_hover]
 * @property {import('csstype').Properties} [_active]
 * @property {import('csstype').Properties} [_disabled]
 * @property {import('csstype').Properties} [_focus]
 * @property {import('csstype').Properties} [_invalid]
 */
/**
 * @typedef {{ [placeholder in keyof StateStyles]: string }} PseudoSelectors
 */
/**
 * @typedef {object} StyleModifiers
 * @property {string} [appearance]
 * @property {string} [size]
 */
/** @typedef {import('ui-box').EnhancerProps & StateStyles} Style */
/**
 * @typedef {object} StyleConfig
 * @property {Style} baseStyle
 * @property {{ [appearance: string]: Style }} [appearances]
 * @property {{ [size: string]: Style }} [sizes]
 */
function maybeRun(value, ...args) {
    return typeof value === 'function' ? value(...args) : value;
}
function maybeRunDeep(raw, ...args) {
    if (raw && typeof raw === 'object') {
        const result = {};
        for (const key of Object.keys(raw)) {
            result[key] = maybeRunDeep(raw[key], ...args);
        }
        return result;
    }
    return maybeRun(raw, ...args);
}
/**
 * Combines styles from a styleConfig, with the given style modifiers (appearance, size, etc) and internal styles
 * @param {object} theme
 * @param {StyleModifiers} props
 * @param {StyleConfig} styleConfig
 * @param {import('ui-box').BoxCssProps<CssProps>} [internalStyles]
 * @returns {StyleConfig}
 */
function combineStyles(theme, props, styleConfig, internalStyles = {}) {
    const config = maybeRun(styleConfig, theme, props);
    const baseStyle = maybeRunDeep(config.baseStyle, theme, props);
    const sizeStyle = maybeRunDeep((0, theme_1.get)(config, `sizes.${props.size}`, {}), theme, props);
    const appearanceStyle = maybeRunDeep((0, theme_1.get)(config, `appearances.${props.appearance}`, {}), theme, props);
    return (0, lodash_merge_1.default)({}, internalStyles, baseStyle, sizeStyle, appearanceStyle);
}
/**
 * Combines a styleConfig object with internal styles based on the theme + style modifiers (props)
 * and returns a memoized style object
 * @returns {StyleConfig}
 */
function useMergedStyles(theme, props, styleConfig, internalStyles) {
    const styleRef = (0, react_1.useRef)({});
    return (0, react_1.useMemo)(() => {
        const combinedStyles = combineStyles(theme, props, styleConfig, internalStyles);
        if (!(0, react_fast_compare_1.default)(styleRef.current, combinedStyles)) {
            styleRef.current = combinedStyles;
        }
        return styleRef.current;
    }, [theme, props, styleConfig, internalStyles]);
}
/**
 * Split up the style props into box-ready props (selectors + spreadable props)
 */
function useBoxProps(styleProps, placeholderSelectors) {
    return (0, react_1.useMemo)(() => {
        // Split the resulting style object into ui-box-compatible props and the rest
        const _a = (0, ui_box_1.splitBoxProps)(styleProps), _b = _a.matchedProps, { selectors: actualSelectors = {} } = _b, matchedProps = __rest(_b, ["selectors"]), { remainingProps } = _a;
        /** @type {import('ui-box').EnhancerProps['selectors']} */
        const selectors = {};
        // Swap out pseudo selector placeholders for their actual css selector strings
        for (const k of Object.keys(actualSelectors)) {
            const key = k in placeholderSelectors ? placeholderSelectors[k] : k;
            selectors[key] = actualSelectors[k];
        }
        const result = Object.assign({}, matchedProps);
        if (!(0, react_fast_compare_1.default)({}, remainingProps)) {
            result.style = remainingProps;
        }
        if (!(0, react_fast_compare_1.default)({}, selectors)) {
            result.selectors = selectors;
        }
        return result;
    }, [styleProps, placeholderSelectors]);
}
/**
 * Takes a styleConfig object and outputs `boxProps` that can be spread on a Box component
 * @param {string} componentKey the name of the component in the theme
 * @param {StyleModifiers} props props that modify the resulting visual style (e.g. `size` or `appearance`)
 * @param {PseudoSelectors} placeholderSelectors mapping for the component between states and actual pseudo selectors
 * @param {import('ui-box').BoxCssProps<CssProps>} [internalStyles] additional styles that are specified internally, separate from the visual styles
 * @returns {{ selectors: import('ui-box').EnhancerProps['selectors'], style: import('react').CSSProperties } & import('ui-box').EnhancerProps}
 */
function useStyleConfig(componentKey, props, placeholderSelectors, internalStyles) {
    const theme = (0, theme_1.useTheme)();
    // Get the component style object from the theme
    const componentStyles = (0, theme_1.get)(theme, `components.${componentKey}`) || {};
    // Merges the theme styles with the modifiers/props (appearance, size, etc)
    const mergedStyles = useMergedStyles(theme, props, componentStyles, internalStyles);
    // Resolve theme token strings found throughout the style object
    const styles = (0, react_1.useMemo)(() => (0, theme_1.resolveThemeTokens)(theme, mergedStyles), [theme, mergedStyles]);
    // Finally, split up the styles based which ones Box supports and the rest construct an inline style object
    return useBoxProps(styles, placeholderSelectors);
}
exports.useStyleConfig = useStyleConfig;
