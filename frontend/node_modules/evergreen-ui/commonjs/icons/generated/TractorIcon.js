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
exports.TractorIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M3.5 9a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm9.5 1a3 3 0 110 6 3 3 0 010-6zm-9.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9.5 1a1 1 0 100 2 1 1 0 000-2zM5 0c1.46 0 2.527.668 3 2l.815 3.255a78.9 78.9 0 012.186.195L11 2h2l.001 3.688c.698.095 1.37.198 2.013.312.623.11.986.479.986 1v3.354a4.001 4.001 0 00-6.873 1.645H7.999l-.026-.002A4.5 4.5 0 00.659 9.01l-.654.001v-.829C.003 7.386.002 6.423 0 6.022 0 5.5.376 4.99 1 4.99V1a1 1 0 011-1h3zm1 2H3v2.99c1.29.024 2.554.069 3.781.135L6 2z'
];
const svgPaths20 = [
    'M4.5 11a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm11.499 1a4 4 0 110 8 4 4 0 010-8zm-11.5 1.571a1.928 1.928 0 100 3.857 1.928 1.928 0 000-3.857zM16 14.667a1.333 1.333 0 100 2.666 1.333 1.333 0 000-2.666zM5.999 0C7.46 0 8.527.668 9 2l.851 4.256c1.433.096 2.82.217 4.147.362V2h2L16 6.862c.962.13 1.886.275 2.767.435.779.141 1.232.614 1.232 1.284L20 13a4.995 4.995 0 00-4-1.997A5.001 5.001 0 0011.099 15h-1.12a5.499 5.499 0 00-5.478-4.994 5.482 5.482 0 00-3.377 1.157H.004v-1.18L0 7.327c-.002-.597.37-1.18.999-1.302V1a1 1 0 011-1h4zm1 2H3v4h.75c1.386.027 2.749.073 4.079.139L6.999 2z'
];
exports.TractorIcon = (0, react_1.memo)((0, react_1.forwardRef)(function TractorIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "tractor" }, props));
}));
