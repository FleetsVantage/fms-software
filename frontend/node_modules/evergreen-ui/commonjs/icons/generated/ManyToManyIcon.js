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
exports.ManyToManyIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M3 3a1 1 0 100 2 1 1 0 000-2zm3 1c0 .047-.001.094-.003.14.255.081.538.209.832.41.406.28.8.676 1.171 1.225.37-.549.765-.945 1.171-1.224a3.14 3.14 0 01.832-.411 3 3 0 11.77 1.87 1.038 1.038 0 00-.47.19c-.291.2-.752.672-1.227 1.8.475 1.128.936 1.6 1.227 1.8.183.126.336.173.47.19a3 3 0 11-.77 1.87 3.141 3.141 0 01-.832-.41c-.406-.28-.8-.676-1.171-1.225-.37.549-.765.945-1.171 1.224-.294.202-.577.33-.832.411a3 3 0 11-.77-1.87c.134-.017.287-.064.47-.19.291-.2.752-.672 1.227-1.8-.475-1.128-.936-1.6-1.227-1.8a1.038 1.038 0 00-.47-.19A3 3 0 116 4zm6 0a1 1 0 112 0 1 1 0 01-2 0zm-9 7a1 1 0 100 2 1 1 0 000-2zm9 1a1 1 0 112 0 1 1 0 01-2 0z'
];
const svgPaths20 = [
    'M17 6a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 01-2.73-1.754c-.2.068-.408.154-.617.264-.884.465-1.92 1.418-2.605 3.49.685 2.072 1.721 3.025 2.605 3.49.21.11.416.196.617.264a3 3 0 11-.165 2.034 6.262 6.262 0 01-1.383-.528c-.983-.518-1.948-1.364-2.722-2.705-.774 1.34-1.739 2.187-2.722 2.705-.48.252-.95.419-1.383.528A3.001 3.001 0 010 15a3 3 0 015.73-1.246c.2-.068.408-.154.617-.264.884-.465 1.92-1.418 2.605-3.49-.685-2.072-1.721-3.025-2.605-3.49a4.21 4.21 0 00-.617-.264 3 3 0 11.165-2.034c.433.11.904.276 1.383.528.983.518 1.948 1.364 2.722 2.705.774-1.34 1.739-2.187 2.722-2.705.48-.252.95-.419 1.383-.528A3.001 3.001 0 0120 5a3 3 0 01-3 3zM4 5a1 1 0 10-2 0 1 1 0 002 0zm12 10a1 1 0 102 0 1 1 0 00-2 0zM3 14a1 1 0 110 2 1 1 0 010-2z'
];
exports.ManyToManyIcon = (0, react_1.memo)((0, react_1.forwardRef)(function ManyToManyIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "many-to-many" }, props));
}));
