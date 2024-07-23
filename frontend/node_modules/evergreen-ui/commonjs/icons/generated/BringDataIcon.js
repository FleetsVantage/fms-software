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
exports.BringDataIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M14 14a1 1 0 010 2H2a1 1 0 010-2h12zM7.995 3.005c.55 0 1 .45 1 .999v5.584l1.29-1.288a1.002 1.002 0 011.42 1.419l-3 2.996a1.015 1.015 0 01-1.42 0l-3-2.997A1.002 1.002 0 015.705 8.3l1.29 1.29V4.013c0-.55.45-1.009 1-1.009zM14 0a1 1 0 110 2 1 1 0 010-2zm-3 0a1 1 0 110 2 1 1 0 010-2zM8 0a1 1 0 110 2 1 1 0 010-2zM5 0a1 1 0 110 2 1 1 0 010-2zM2 0a1 1 0 110 2 1 1 0 010-2z'
];
const svgPaths20 = [
    'M18 18a1 1 0 010 2H2a1 1 0 010-2h16zM9.995 3.005c.55 0 1 .45 1 .999v9.584l1.29-1.288a1.002 1.002 0 011.42 1.419l-3 2.996a1.015 1.015 0 01-1.42 0l-3-2.997a1.002 1.002 0 011.42-1.419l1.29 1.29V4.013c0-.55.45-1.009 1-1.009zM16 0a1 1 0 110 2 1 1 0 010-2zm-3 0a1 1 0 110 2 1 1 0 010-2zm-3 0a1 1 0 110 2 1 1 0 010-2zM7 0a1 1 0 110 2 1 1 0 010-2zM4 0a1 1 0 110 2 1 1 0 010-2z'
];
exports.BringDataIcon = (0, react_1.memo)((0, react_1.forwardRef)(function BringDataIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "bring-data" }, props));
}));
