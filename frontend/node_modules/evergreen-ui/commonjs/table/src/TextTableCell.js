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
const typography_1 = require("../../typography");
const TableCell_1 = __importDefault(require("./TableCell"));
const ellipsis = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
};
const TextTableCell = (0, react_1.memo)((0, react_1.forwardRef)(function TextTableCell(props, ref) {
    const { children, isNumber = false, placeholder, textProps } = props, rest = __rest(props, ["children", "isNumber", "placeholder", "textProps"]);
    return (react_1.default.createElement(TableCell_1.default, Object.assign({ ref: ref }, rest),
        react_1.default.createElement(typography_1.Text, Object.assign({ size: 300, flex: "1", title: typeof children === 'string' ? children : undefined }, ellipsis, (isNumber ? { fontFamily: 'mono' } : {}), textProps), children)));
}));
TextTableCell.propTypes = Object.assign(Object.assign({}, TableCell_1.default.propTypes), { 
    /**
     * Adds fontFamily: mono.
     */
    isNumber: prop_types_1.default.bool, 
    /**
     * Pass additional props to the Text component.
     */
    textProps: prop_types_1.default.object });
exports.default = TextTableCell;
