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
const theme_1 = require("../../theme");
const emptyObject = {};
const Paragraph = (0, react_1.memo)((0, react_1.forwardRef)(function Paragraph(props, ref) {
    const { color = 'default', fontFamily = 'ui', size = 400 } = props, restProps = __rest(props, ["color", "fontFamily", "size"]);
    const theme = (0, theme_1.useTheme)();
    const { colors, fontFamilies } = theme;
    const themedFontFamily = fontFamilies[fontFamily] || fontFamily;
    const themedColor = colors[color] || (colors.text && colors.text[color]) || color;
    const themedProps = (0, hooks_1.useStyleConfig)('Paragraph', { size }, emptyObject, emptyObject);
    return react_1.default.createElement(ui_box_1.default, Object.assign({ is: "p", ref: ref }, themedProps, { fontFamily: themedFontFamily, color: themedColor }, restProps));
}));
Paragraph.propTypes = Object.assign(Object.assign({}, ui_box_1.default.propTypes), { 
    /**
     * Size of the text style.
     * Can be: 300, 400, 500, `small`, `medium`, `large`.
     */
    size: prop_types_1.default.oneOf([300, 400, 500, 'small', 'medium', 'large']), 
    /**
     * Font family.
     * Can be: `ui`, `display` or `mono` or a custom font family.
     */
    fontFamily: prop_types_1.default.string });
exports.default = Paragraph;
