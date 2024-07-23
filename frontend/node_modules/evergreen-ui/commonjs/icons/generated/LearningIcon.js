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
exports.LearningIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M8.441 1.104a.985.985 0 00-.882 0L.365 5c-.487.253-.487.747 0 1L7.56 9.896a.985.985 0 00.882 0L15.635 6c.487-.253.487-.747 0-1L8.44 1.104z',
    'M14 5.5l.016 4.514c.002.548.447.99.994.99a.99.99 0 00.99-.99V5.5h-2zM3.371 9.047l4.387 2.432a.5.5 0 00.485 0l4.39-2.432a.25.25 0 01.371.218v2.955a.25.25 0 01-.134.222l-4.635 2.436a.5.5 0 01-.466 0l-4.635-2.436A.25.25 0 013 12.22V9.265a.25.25 0 01.371-.218z'
];
const svgPaths20 = [
    'M10.551 1.127a1.256 1.256 0 00-1.102 0L.456 5.89c-.608.309-.608.913 0 1.222l8.993 4.762c.334.17.767.17 1.102 0l8.992-4.762c.61-.309.61-.913 0-1.222l-8.992-4.762z',
    'M18 6.5l.016 4.514c.002.548.447.99.994.99a.99.99 0 00.99-.99V6.5h-2zM3.366 10.033l6.401 3.358a.5.5 0 00.465 0l6.406-3.358a.25.25 0 01.366.221v5.109a.25.25 0 01-.139.224l-6.64 3.302a.5.5 0 01-.446 0l-6.64-3.302A.25.25 0 013 15.363v-5.108a.25.25 0 01.366-.222z'
];
exports.LearningIcon = (0, react_1.memo)((0, react_1.forwardRef)(function LearningIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "learning" }, props));
}));
