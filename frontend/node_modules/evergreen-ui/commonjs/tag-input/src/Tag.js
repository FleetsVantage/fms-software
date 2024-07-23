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
/**
 * @overview TagInput accepts multiple values that can be individually removed
 */
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const badges_1 = require("../../badges");
const icons_1 = require("../../icons");
const scales_1 = require("../../scales");
const badgeStyles = {
    alignItems: 'center',
    display: 'inline-flex',
    fontWeight: 400,
    borderRadius: 4,
    paddingX: 8,
    paddingY: 6,
    marginTop: 0,
    marginBottom: 0,
    textTransform: 'none'
};
const Tag = (0, react_1.memo)((0, react_1.forwardRef)(function Tag(props, ref) {
    const { children, isRemovable, onRemove } = props, restProps = __rest(props, ["children", "isRemovable", "onRemove"]);
    return (react_1.default.createElement(badges_1.Badge, Object.assign({ ref: ref, isInteractive: true }, badgeStyles, { paddingRight: isRemovable ? (0, scales_1.minorScale)(1) : undefined }, restProps),
        children,
        isRemovable && react_1.default.createElement(icons_1.CrossIcon, { marginLeft: (0, scales_1.minorScale)(1), onClick: onRemove, size: (0, scales_1.minorScale)(3) })));
}));
Tag.propTypes = {
    /** The tag content */
    children: prop_types_1.default.node,
    /**
     * Callback invoked when the removal icon is clicked.
     * (event) => void
     */
    onRemove: prop_types_1.default.func,
    /** Whether or not the tag can be removed. */
    isRemovable: prop_types_1.default.bool
};
exports.default = Tag;
