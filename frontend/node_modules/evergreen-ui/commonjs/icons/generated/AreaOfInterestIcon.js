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
exports.AreaOfInterestIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M4 3.664C4 1.644 5.793 0 8 0s3.993 1.643 4 3.664C12 5.692 8 11 8 11S4 5.692 4 3.664zM6 4a2 2 0 104.001-.001A2 2 0 006 4zm7.504 6.269l-2.68-1.609.021-.033c.34-.538.688-1.115 1-1.687l3.67 2.202a1 1 0 01.266 1.482l-4 5A1 1 0 0111 16H5a1 1 0 01-.78-.376l-4-5a1 1 0 01.266-1.482l3.67-2.202a30.46 30.46 0 00.999 1.687l.021.033-2.68 1.609 2.985 3.73h5.038l2.985-3.73z'
];
const svgPaths20 = [
    'M5 4.664C5 2.09 7.241 0 10 0s4.99 2.091 5 4.664C15 7.245 10 14 10 14S5 7.245 5 4.664zM8 5a2 2 0 104.001-.001A2 2 0 008 5zM.504 12.132l4.302-2.458c.322.576.662 1.145.995 1.681l.025.04-3.294 1.881L6.468 18h7.064l3.936-4.724-3.293-1.882.024-.039c.333-.536.673-1.105.995-1.681l4.302 2.458a1 1 0 01.272 1.508l-5 6A1 1 0 0114 20H6a1 1 0 01-.768-.36l-5-6a1 1 0 01.272-1.508z'
];
exports.AreaOfInterestIcon = (0, react_1.memo)((0, react_1.forwardRef)(function AreaOfInterestIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "area-of-interest" }, props));
}));
