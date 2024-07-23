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
const layers_1 = require("../../layers");
const ScrollbarSize_1 = __importDefault(require("./ScrollbarSize"));
const emptyObject = {};
const pseudoSelectors = {
    _firstOfType: '&:first-of-type'
};
const internalStyles = {
    display: 'flex',
    flexShrink: 0
};
const TableHead = (0, react_1.memo)(function TableHead(props) {
    const { accountForScrollbar = true, children, className } = props, rest = __rest(props, ["accountForScrollbar", "children", "className"]);
    const [scrollbarWidth, setScrollBarWidth] = (0, react_1.useState)(0);
    const _a = (0, hooks_1.useStyleConfig)('TableHead', emptyObject, pseudoSelectors, internalStyles), { height: themeHeight } = _a, themedProps = __rest(_a, ["height"]);
    const height = rest.height || themeHeight;
    return (react_1.default.createElement(layers_1.Pane, Object.assign({ paddingRight: scrollbarWidth, className: className, height: height }, themedProps, rest),
        children,
        " ",
        accountForScrollbar && react_1.default.createElement(ScrollbarSize_1.default, { handleScrollbarSize: setScrollBarWidth })));
});
TableHead.propTypes = Object.assign(Object.assign({}, layers_1.Pane.propTypes), { 
    /**
     * The height of the table head.
     */
    height: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]), 
    /**
     * This should always be true if you are using TableHead together with a TableBody.
     * Because TableBody has `overflowY: scroll` by default.
     */
    accountForScrollbar: prop_types_1.default.bool });
exports.default = TableHead;
