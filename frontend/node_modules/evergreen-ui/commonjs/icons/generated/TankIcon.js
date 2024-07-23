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
exports.TankIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M3.7 3.4a1 1 0 01.8-.4h5.086a1 1 0 01.707.293L11 4h3a1 1 0 110 2h-3v1h2.5a2.5 2.5 0 010 5h-11a2.5 2.5 0 010-5H3V4.667a1 1 0 01.2-.6l.5-.667zM2.5 9h11a.5.5 0 010 1h-11a.5.5 0 110-1z'
];
const svgPaths20 = [
    'M3.956 4.47A1 1 0 014.804 4h6.392a1 1 0 01.848.47L13 6h5a1 1 0 010 2h-5v1h4a3 3 0 110 6H3a3 3 0 010-6V6.287a1 1 0 01.152-.53l.804-1.287zM3 11h14a1 1 0 110 2H3a1 1 0 110-2z'
];
exports.TankIcon = (0, react_1.memo)((0, react_1.forwardRef)(function TankIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "tank" }, props));
}));
