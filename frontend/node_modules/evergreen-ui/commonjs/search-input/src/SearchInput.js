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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ui_box_1 = __importStar(require("ui-box"));
const constants_1 = require("../../constants");
const icons_1 = require("../../icons");
const text_input_1 = require("../../text-input");
const getIconSizeForInput = height => {
    if (height <= 28)
        return 12;
    if (height <= 32)
        return 14;
    if (height <= 40)
        return 16;
    if (height <= 48)
        return 18;
    return 20;
};
const SearchInput = (0, react_1.memo)((0, react_1.forwardRef)(function SearchInput(props, ref) {
    const { appearance = 'default', disabled, height = 32 } = props, restProps = __rest(props, ["appearance", "disabled", "height"]);
    const { matchedProps, remainingProps } = (0, ui_box_1.splitBoxProps)(restProps);
    const { width } = matchedProps;
    const iconSize = getIconSizeForInput(height);
    return (react_1.default.createElement(ui_box_1.default, Object.assign({ position: "relative", display: "inline-flex", height: height }, matchedProps),
        react_1.default.createElement(ui_box_1.default, { height: height, width: height, pointerEvents: "none", position: "absolute", display: "flex", justifyContent: "center", alignItems: "center" },
            react_1.default.createElement(icons_1.SearchIcon, { color: "default", zIndex: constants_1.StackingOrder.FOCUSED + 1, size: iconSize })),
        react_1.default.createElement(text_input_1.TextInput, Object.assign({ ref: ref, height: height, paddingLeft: height, appearance: appearance, disabled: disabled, width: width, type: "search" }, remainingProps))));
}));
SearchInput.propTypes = Object.assign({}, text_input_1.TextInput.propTypes);
exports.default = SearchInput;
