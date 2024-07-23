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
const IconWrapper_1 = require("../../icons/src/IconWrapper");
const scales_1 = require("../../scales");
const Text_1 = __importDefault(require("./Text"));
const ListItem = (0, react_1.memo)((0, react_1.forwardRef)(function ListItem(props, ref) {
    const { children, icon, iconColor, size } = props, rest = __rest(props, ["children", "icon", "iconColor", "size"]);
    let paddingLeft;
    if (size === 300)
        paddingLeft = (0, scales_1.minorScale)(1);
    if (size === 400)
        paddingLeft = (0, scales_1.minorScale)(2);
    if (size === 500)
        paddingLeft = (0, scales_1.minorScale)(2);
    if (size === 600)
        paddingLeft = (0, scales_1.minorScale)(3);
    let iconTop;
    if (size === 300)
        iconTop = 1;
    if (size === 400)
        iconTop = 3;
    if (size === 500)
        iconTop = 3;
    if (size === 600)
        iconTop = 4;
    let iconSize;
    if (size === 300)
        iconSize = 12;
    if (size === 400)
        iconSize = 14;
    if (size === 500)
        iconSize = 14;
    if (size === 600)
        iconSize = 16;
    let iconLeft = -iconSize - 4;
    if (size === 600)
        iconLeft = -iconSize;
    return (react_1.default.createElement(Text_1.default, Object.assign({ is: "li", position: "relative", marginY: "0.5em", size: size, listStyleType: icon ? 'none' : undefined, paddingLeft: icon ? paddingLeft : undefined, ref: ref }, rest),
        icon && (react_1.default.createElement(IconWrapper_1.IconWrapper, { icon: icon, color: iconColor, position: "absolute", size: iconSize, left: iconLeft, top: iconTop })),
        children));
}));
ListItem.propTypes = Object.assign(Object.assign({}, Text_1.default.propTypes), { 
    /**
     * When provided, adds a icon before the list item.
     */
    icon: prop_types_1.default.oneOfType([prop_types_1.default.elementType, prop_types_1.default.element]), 
    /**
     * The color of the icon.
     */
    iconColor: prop_types_1.default.string });
exports.default = ListItem;
