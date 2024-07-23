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
exports.BacklinkIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M14 10a1 1 0 110 2h-.585l2.292 2.293a1 1 0 01-1.32 1.497l-.094-.083L12 13.415V14a1 1 0 11-2 0l.003-3.075.012-.1.012-.059.033-.108.034-.081.052-.098.067-.096.08-.09a1.01 1.01 0 01.112-.097l.11-.071.143-.065.076-.024.091-.02.116-.014L14 10zM6.036 6.136l-3.45 3.45-.117.127a2 2 0 002.818 2.818l.127-.117 3.45-3.449a4 4 0 01-.885 3.704l-.15.16-1 1A4 4 0 011.02 8.33l.15-.16 1-1a3.998 3.998 0 013.865-1.035zm4.671-1.843a1 1 0 01.083 1.32l-.083.094-5 5a1 1 0 01-1.497-1.32l.083-.094 5-5a1 1 0 011.414 0zm3.121-3.121a4 4 0 01.151 5.497l-.15.16-1 1a3.998 3.998 0 01-3.864 1.036l3.45-3.45.116-.128a2 2 0 00-2.818-2.818l-.127.117-3.45 3.45A4 4 0 017.02 2.33l.15-.16 1-1a4 4 0 015.657 0z'
];
const svgPaths20 = [
    'M18.387 19.79l-.094-.083L14 15.415V18a1 1 0 01-2 0l.003-5.075.017-.126.03-.111.044-.111.052-.098.067-.096.08-.09a1.01 1.01 0 01.112-.097l.11-.071.114-.054.105-.035.15-.03L13 12h5a1 1 0 110 2h-2.585l4.292 4.293a1 1 0 01-1.32 1.497zM7.036 9.136l-4.45 4.45-.117.127a2 2 0 002.818 2.818l.127-.117 4.45-4.449a4 4 0 01-.885 3.704l-.15.16-2 2A4 4 0 011.02 12.33l.15-.16 2-2a3.998 3.998 0 013.865-1.035zm6.671-3.843a1 1 0 01.083 1.32l-.083.094-7 7a1 1 0 01-1.497-1.32l.083-.094 7-7a1 1 0 011.414 0zm4.121-4.121a4 4 0 01.151 5.497l-.15.16-2 2a3.998 3.998 0 01-3.864 1.036l4.45-4.45.116-.128a2 2 0 00-2.818-2.818l-.127.117-4.45 4.45a4 4 0 01.885-3.705l.15-.16 2-2a4 4 0 015.657 0z'
];
exports.BacklinkIcon = (0, react_1.memo)((0, react_1.forwardRef)(function BacklinkIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "backlink" }, props));
}));
