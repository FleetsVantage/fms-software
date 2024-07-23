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
exports.IssueClosedIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M9.296.104a2.99 2.99 0 00-1.003.664 2.987 2.987 0 00-.75 1.25 6 6 0 106.28 4.527c.043-.039.085-.079.127-.12l1.456-1.456A8 8 0 119.296.105zm2.532 5.2a.997.997 0 01-.707-.294L9.707 3.596a1 1 0 011.414-1.414l.707.707 1.768-1.768a1 1 0 111.414 1.415L12.536 5.01a.997.997 0 01-.708.293zM9 12H7v-2h2v2zm0-3H7V4h2v5z'
];
const svgPaths20 = [
    'M15.364 5.9a.997.997 0 01-.707-.293l-2.121-2.122a1 1 0 111.414-1.414l1.414 1.414L18.192.657a1 1 0 011.414 1.414l-3.535 3.536a.997.997 0 01-.707.292zM11.78.157a3.002 3.002 0 00-1.437 1.85 8 8 0 107.1 5.055l.042-.042 1.472-1.472A9.959 9.959 0 0120 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0c.608 0 1.202.054 1.78.158zM11 16H9v-2h2v2zm0-3H9V4h2v9z'
];
exports.IssueClosedIcon = (0, react_1.memo)((0, react_1.forwardRef)(function IssueClosedIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "issue-closed" }, props));
}));
