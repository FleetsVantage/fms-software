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
exports.SyringeIcon = void 0;
const react_1 = __importStar(require("react"));
const Icon_1 = __importDefault(require("../src/Icon"));
const svgPaths16 = [
    'M11.146.146a.5.5 0 000 .708l.647.646L10.5 2.793 8.854 1.146a.5.5 0 10-.708.708l.647.646-1.146 1.146-5.5 5.5a.5.5 0 000 .708l.646.646-1.647 1.646a.5.5 0 000 .708l.647.646-1.647 1.646a.5.5 0 00.708.708L2.5 14.207l.646.647a.5.5 0 00.708 0L5.5 13.207l.646.647a.5.5 0 00.708 0l5.5-5.5L13.5 7.207l.646.647a.5.5 0 00.708-.708L13.207 5.5 14.5 4.207l.646.647a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0zM11.293 8l-.793.793-1.646-1.647a.5.5 0 10-.708.708L9.793 9.5 8.5 10.793 6.854 9.146a.5.5 0 10-.708.708L7.793 11.5 6.5 12.793 3.207 9.5 8 4.707 11.293 8zM8.707 4L12 7.293l.793-.793L9.5 3.207 8.707 4zm-6.5 8.5L3.5 13.793 4.793 12.5 3.5 11.207 2.207 12.5zm11.586-9L12.5 2.207 11.207 3.5 12.5 4.793 13.793 3.5z'
];
const svgPaths20 = [
    'M15.146.854a.5.5 0 01.708-.708l4 4a.5.5 0 01-.708.708l-.646-.647L17.207 5.5l1.647 1.646a.5.5 0 01-.708.708l-.646-.647-1.146 1.146-7.5 7.5a.5.5 0 01-.708 0l-.646-.646-2.646 2.647a.5.5 0 01-.708 0l-.646-.647-2.646 2.647a.5.5 0 01-.708-.708L2.793 16.5l-.647-.646a.5.5 0 010-.708L4.793 12.5l-.647-.646a.5.5 0 010-.708l7.5-7.5L12.794 2.5l-.647-.646a.5.5 0 01.708-.708L14.5 2.793 15.793 1.5l-.647-.646zM12.707 4l.793-.793L16.793 6.5 16 7.293 12.707 4zm2.586 4l-.793.793-1.646-1.647a.5.5 0 00-.708.708L13.793 9.5 12.5 10.793l-1.646-1.647a.5.5 0 00-.708.708l1.647 1.646-1.293 1.293-1.646-1.647a.5.5 0 00-.708.708L9.793 13.5 8.5 14.793 5.207 11.5 12 4.707 15.293 8zM3.207 15.5L5.5 13.207 6.793 14.5 4.5 16.793 3.207 15.5zM16.5 2.207L17.793 3.5 16.5 4.793 15.207 3.5 16.5 2.207z'
];
exports.SyringeIcon = (0, react_1.memo)((0, react_1.forwardRef)(function SyringeIcon(props, ref) {
    return react_1.default.createElement(Icon_1.default, Object.assign({ svgPaths16: svgPaths16, svgPaths20: svgPaths20, ref: ref, name: "syringe" }, props));
}));
