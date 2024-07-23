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
exports.RainIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M3.5 8a2.5 2.5 0 11.608-4.926 4.002 4.002 0 017.381-1.03A3 3 0 1112 8H3.501zM3 10a1 1 0 012 0v4a1 1 0 11-2 0v-4zm7-1a1 1 0 00-1 1v5a1 1 0 102 0v-5a1 1 0 00-1-1zm2 1a1 1 0 112 0v2a1 1 0 11-2 0v-2zM7 9a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1z'
];
const svgPaths20 = [
    'M4 10a3 3 0 111.065-5.806A5.001 5.001 0 0114.63 3.11 3.5 3.5 0 1115.5 10H4zm0 2a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm9 1a1 1 0 10-2 0v6a1 1 0 102 0v-6zm3-1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-7 1a1 1 0 10-2 0v3a1 1 0 102 0v-3z'
];
exports.RainIcon = (0, react_1.memo)((0, react_1.forwardRef)(function RainIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "rain" }, props));
}));
