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
exports.FlowBranchIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M10.643 6.595c.22.418.344.894.344 1.399 0 .439-.094.855-.263 1.231l3.265 3.462-.002-1.75a.973.973 0 01.314-.68.99.99 0 011.388.048c.186.2.316.46.3.715l-.009 4.03a.959.959 0 01-.3.68.972.972 0 01-.698.266l-4.053.002a.97.97 0 01-.679-.314 1.031 1.031 0 01.05-1.42.972.972 0 01.698-.266l1.7-.001-3.305-3.35a2.998 2.998 0 01-4.228-1.653H.999a1 1 0 010-2h4.166a2.998 2.998 0 014.06-1.735l3.449-3.268-1.745.002a.979.979 0 01-.631-1.692c.199-.186.459-.316.713-.3l4.025.009c.247.008.493.1.679.3.186.2.274.451.265.7l.002 4.046a.972.972 0 01-.313.68 1.03 1.03 0 01-1.42-.05.973.973 0 01-.266-.7V3.295l-3.34 3.301z'
];
const svgPaths20 = [
    'M14.425 7.953a3.98 3.98 0 01.562 2.045 3.98 3.98 0 01-.583 2.08L18 15.671V12.98c0-.248.097-.496.29-.689.379-.379 1.047-.38 1.426 0a.94.94 0 01.283.696l-.001 5.049a.957.957 0 01-.276.69.955.955 0 01-.69.273h-5.059a.971.971 0 01-.689-.289 1.026 1.026 0 010-1.417.972.972 0 01.69-.29h2.702l-3.634-3.573a3.998 3.998 0 01-5.924-2.431H1a1 1 0 010-2h6.12a3.998 3.998 0 015.96-2.409L16.665 3l-2.694-.001a.972.972 0 01-.689-.29 1.035 1.035 0 010-1.425.94.94 0 01.696-.283l5.05.001c.248 0 .497.083.69.276a.954.954 0 01.272.69l.001 5.052a.971.971 0 01-.29.689 1.028 1.028 0 01-1.419 0 .972.972 0 01-.29-.69V4.323l-3.567 3.63z'
];
exports.FlowBranchIcon = (0, react_1.memo)((0, react_1.forwardRef)(function FlowBranchIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "flow-branch" }, props));
}));
