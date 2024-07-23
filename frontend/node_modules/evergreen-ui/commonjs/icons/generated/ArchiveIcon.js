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
exports.ArchiveIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M13.382 0a1 1 0 01.894.553L16 4v11a1 1 0 01-1 1H1a1 1 0 01-1-1V4L1.724.553A1 1 0 012.618 0h10.764zM8 6c-.55 0-1 .45-1 1v2.59l-.29-.29-.081-.076A.97.97 0 006 9a1.003 1.003 0 00-.71 1.71l2 2 .096.084c.168.13.38.206.614.206.28 0 .53-.11.71-.29l2-2 .084-.096A1.003 1.003 0 009.29 9.29l-.29.3V7l-.007-.116A1.004 1.004 0 008 6zm5-4H3L2 4h12l-1-2z'
];
const svgPaths20 = [
    'M16.434 0a1 1 0 01.857.486L20 5v14a1 1 0 01-1 1H1a1 1 0 01-1-1V5L2.709.486A1 1 0 013.566 0h12.868zM10 8c-.55 0-1 .45-1 1v4.58l-1.29-1.29-.081-.073A.996.996 0 007 11.99a1.003 1.003 0 00-.71 1.71l3 3 .096.084c.168.13.38.206.614.206.28 0 .53-.11.71-.29l3-3 .084-.096a1.003 1.003 0 00-1.504-1.324L11 13.58V9l-.007-.116A1.004 1.004 0 0010 8zm6-6H4L2 5.002h16L16 2z'
];
exports.ArchiveIcon = (0, react_1.memo)((0, react_1.forwardRef)(function ArchiveIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "archive" }, props));
}));
