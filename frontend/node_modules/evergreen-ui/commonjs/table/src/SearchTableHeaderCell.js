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
const icons_1 = require("../../icons");
const IconWrapper_1 = require("../../icons/src/IconWrapper");
const typography_1 = require("../../typography");
const TableHeaderCell_1 = __importDefault(require("./TableHeaderCell"));
const noop = () => { };
/**
 * This prop is non-standard, macOS specific and unsupported by ui-box. We probably don't need it,
 * but retaining it for backwards compatibility
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth
 */
const style = {
    '-webkit-font-smoothing': 'antialiased'
};
const SearchTableHeaderCell = (0, react_1.memo)((0, react_1.forwardRef)(function SearchTableHeaderCell(props, ref) {
    const { value, children, onChange = noop, autoFocus, spellCheck = true, placeholder = 'Filter...', icon = icons_1.SearchIcon } = props, rest = __rest(props, ["value", "children", "onChange", "autoFocus", "spellCheck", "placeholder", "icon"]);
    const handleChange = (0, react_1.useCallback)(e => onChange(e.target.value), [onChange]);
    return (react_1.default.createElement(TableHeaderCell_1.default, Object.assign({}, rest),
        react_1.default.createElement(IconWrapper_1.IconWrapper, { icon: icon, color: "muted", marginLeft: 2, marginRight: 10, size: 12 }),
        react_1.default.createElement(typography_1.Text, { is: "input", size: 300, flex: "1", border: "none", backgroundColor: "transparent", appearance: "none", style: style, selectors: {
                '&:focus': {
                    outline: 'none'
                },
                '&::placeholder': {
                    color: 'rgba(67, 90, 111, 0.7)'
                }
            }, value: value, onChange: handleChange, autoFocus: autoFocus, spellCheck: spellCheck, fontWeight: 500, marginLeft: -2, paddingLeft: 0, placeholder: placeholder, ref: ref })));
}));
SearchTableHeaderCell.propTypes = Object.assign(Object.assign({}, TableHeaderCell_1.default.propTypes), { 
    /**
     * The value of the input.
     */
    value: prop_types_1.default.string, 
    /**
     * Handler to be called when the input changes.
     */
    onChange: prop_types_1.default.func, 
    /**
     * Sets whether the component should be automatically focused on component render.
     */
    autoFocus: prop_types_1.default.bool, 
    /**
     * Sets whether to apply spell checking to the content.
     */
    spellCheck: prop_types_1.default.bool, 
    /**
     * Text to display in the input if the input is empty.
     */
    placeholder: prop_types_1.default.string, 
    /**
     * The Evergreen or custom icon before the label.
     */
    icon: prop_types_1.default.oneOfType([prop_types_1.default.elementType, prop_types_1.default.element]) });
exports.default = SearchTableHeaderCell;
