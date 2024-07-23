"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeConsumer = exports.ThemeProvider = exports.getThemeContext = void 0;
const react_1 = __importDefault(require("react"));
const default_1 = __importDefault(require("../../themes/default"));
/**
 * Use React 16.3+ createContext API.
 */
// NOTE(allen) - switch this back once we properly refactor Toasts to render
// them in the existing DOM tree flow, instead of mounting a new root
// outside of whatever app root an EG consumer is using.
const ThemeContext = react_1.default.createContext(default_1.default);
const { Consumer: ThemeConsumer, Provider: ThemeProvider } = ThemeContext;
exports.ThemeConsumer = ThemeConsumer;
exports.ThemeProvider = ThemeProvider;
/**
 * Returns a typed version of the ThemeContext when using a custom theme
 */
const getThemeContext = () => ThemeContext;
exports.getThemeContext = getThemeContext;
exports.default = ThemeContext;
