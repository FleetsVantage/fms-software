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
exports.pseudoSelectors = void 0;
const react_1 = __importStar(require("react"));
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const prop_types_1 = __importDefault(require("prop-types"));
const hooks_1 = require("../../hooks");
const layers_1 = require("../../layers");
const TableRow_1 = __importDefault(require("../../table/src/TableRow"));
const TextTableCell_1 = __importDefault(require("../../table/src/TextTableCell"));
exports.pseudoSelectors = {
    _active: '&[aria-current="true"]:active,&[data-isselectable="true"]:active',
    _before: '&:before',
    _disabled: '&[disabled]',
    _focus: ':focus',
    _hover: ':hover',
    _isSelectable: '&[data-isselectable="true"]',
    _selected: '&[aria-current="true"]'
};
const internalStyles = {
    alignItems: 'center',
    display: 'flex'
};
const emptyObject = {};
const Option = (0, react_1.memo)((0, react_1.forwardRef)(function Option(props, ref) {
    const { children, disabled, height, isHighlighted, isSelectable, isSelected, item, onDeselect, onSelect, style: styleProp } = props, rest = __rest(props, ["children", "disabled", "height", "isHighlighted", "isSelectable", "isSelected", "item", "onDeselect", "onSelect", "style"]);
    const _a = (0, hooks_1.useStyleConfig)('Option', emptyObject, exports.pseudoSelectors, internalStyles), { style: themedStyle } = _a, themedProps = __rest(_a, ["style"]);
    const style = (0, lodash_merge_1.default)({}, styleProp, themedStyle);
    return (react_1.default.createElement(TableRow_1.default, Object.assign({ isSelectable: isSelectable && !disabled, isHighlighted: isHighlighted, onSelect: onSelect, onDeselect: onDeselect, isSelected: isSelected, style: style }, themedProps, rest, { ref: ref }),
        react_1.default.createElement(TextTableCell_1.default, { borderRight: null, flex: 1, alignSelf: "stretch", height: height, cursor: disabled ? 'default' : 'pointer' },
            react_1.default.createElement(layers_1.Pane, { alignItems: "center", display: "flex" }, children))));
}));
Option.propTypes = {
    children: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.node]),
    disabled: prop_types_1.default.bool,
    height: prop_types_1.default.number,
    isHighlighted: prop_types_1.default.bool,
    isSelectable: prop_types_1.default.bool,
    isSelected: prop_types_1.default.bool,
    item: prop_types_1.default.any,
    onDeselect: prop_types_1.default.func,
    onSelect: prop_types_1.default.func,
    style: prop_types_1.default.any
};
exports.default = Option;
