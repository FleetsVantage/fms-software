"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ThemeContext_1 = __importDefault(require("./ThemeContext"));
function useTheme() {
    return (0, react_1.useContext)(ThemeContext_1.default);
}
exports.default = useTheme;
