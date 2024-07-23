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
const image_1 = require("../../image");
const Option_1 = __importDefault(require("../../select-menu/src/Option"));
const AutocompleteItem = (0, react_1.memo)((0, react_1.forwardRef)(function AutocompleteItem(props, ref) {
    const { children, isHighlighted, isSelected, style } = props, restProps = __rest(props, ["children", "isHighlighted", "isSelected", "style"]);
    return (react_1.default.createElement(Option_1.default, Object.assign({ ref: ref, isHighlighted: isHighlighted, isSelected: isSelected, style: style }, restProps),
        restProps.icon && react_1.default.createElement(image_1.Image, { src: restProps.icon, width: 24, marginRight: 8 }),
        children));
}));
AutocompleteItem.propTypes = {
    children: prop_types_1.default.node,
    style: prop_types_1.default.object,
    isSelected: prop_types_1.default.bool,
    isHighlighted: prop_types_1.default.bool
};
exports.default = AutocompleteItem;
