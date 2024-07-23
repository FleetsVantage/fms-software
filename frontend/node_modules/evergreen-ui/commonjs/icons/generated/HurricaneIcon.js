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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HurricaneIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M3.5 12c-.86 0-2.5-.5-3.5-1 1 3.5 4.506 4 7 4a7 7 0 007-7l-.006-.004a5.974 5.974 0 00-1.29-3.988c.896.066 2.37.53 3.296.992-1-3.5-4.506-4-7-4a6.998 6.998 0 00-6.14 3.635 5.972 5.972 0 00-.859 3.226L2 8l.006.005a5.98 5.98 0 001.771 3.99A7.469 7.469 0 013.5 12zM8 6a2 2 0 100 4 2 2 0 000-4z',
    'M0 0h16v16H0z'
];
const svgPaths20 = [
    'M0 14c1.648.775 3 1 4 1-1-1-2-3.112-2-5a5.098 5.098 0 000-.045C2 5.17 6.201 1 11.172 1c3.206 0 6.9.667 8.828 5-1.648-.775-3-1-4-1 1 1 2 3.112 2 5v.045C18 14.83 13.799 19 8.828 19c-3.206 0-6.9-.667-8.828-5zm10-7a3 3 0 100 6 3 3 0 000-6z'
];
exports.HurricaneIcon = (0, react_1.memo)((0, react_1.forwardRef)(function HurricaneIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "hurricane" }, props));
}));
