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
exports.CycleIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M13 9a3 3 0 110 6 3 3 0 010-6zM3 9a3 3 0 110 6 3 3 0 010-6zm6.169-5.27l.087.09 1.51 1.746 1.589.549a1 1 0 01.65 1.16l-.032.112a1 1 0 01-1.159.65l-.112-.032-1.843-.636a1 1 0 01-.337-.198l-.092-.093-.959-1.109L7.041 7.5l1.691 1.819a1 1 0 01.26.556L9 10v3a1 1 0 01-1.993.117L7 13l-.001-2.608-2.056-2.211a1 1 0 01-.081-1.264l.082-.1 2.825-3.026a1 1 0 011.4-.061zM13 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-10 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM11 1a1.5 1.5 0 110 3 1.5 1.5 0 010-3z'
];
const svgPaths20 = [
    'M16 10a4 4 0 110 8 4 4 0 010-8zM4 10a4 4 0 110 8 4 4 0 010-8zm7.299-5.543l.087.089 1.93 2.232 2.048.708a1 1 0 01.65 1.16l-.031.112a1 1 0 01-1.16.65l-.112-.031-2.302-.796a1 1 0 01-.337-.197l-.092-.094-1.387-1.603-1.891 1.982 2.046 2.274a1 1 0 01.25.547l.007.122v4.24a1 1 0 01-1.993.117l-.007-.117-.001-3.857-2.408-2.676a1 1 0 01-.063-1.26l.082-.099 3.29-3.45a1 1 0 011.394-.053zM16 12a2 2 0 100 4 2 2 0 000-4zM4 12a2 2 0 100 4 2 2 0 000-4zm9.5-10a1.5 1.5 0 110 3 1.5 1.5 0 010-3z'
];
exports.CycleIcon = (0, react_1.memo)((0, react_1.forwardRef)(function CycleIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "cycle" }, props));
}));
