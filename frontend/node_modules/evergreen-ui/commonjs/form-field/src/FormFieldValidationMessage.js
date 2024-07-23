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
const icons_1 = require("../../icons");
const layers_1 = require("../../layers");
const scales_1 = require("../../scales");
const typography_1 = require("../../typography");
const FormFieldValidationMessage = (0, react_1.memo)((0, react_1.forwardRef)(function FormFieldValidationMessage(_a, ref) {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (react_1.default.createElement(layers_1.Pane, Object.assign({ ref: ref, display: "flex" }, props),
        react_1.default.createElement(layers_1.Pane, { display: "flex", marginRight: (0, scales_1.majorScale)(1) },
            react_1.default.createElement(icons_1.ErrorIcon, { color: "danger", marginTop: 1, size: 14 })),
        react_1.default.createElement(typography_1.Paragraph, { marginTop: 0, size: 300, color: "danger", role: "alert" }, children)));
}));
FormFieldValidationMessage.propTypes = Object.assign({}, layers_1.Pane.propTypes);
exports.default = FormFieldValidationMessage;
