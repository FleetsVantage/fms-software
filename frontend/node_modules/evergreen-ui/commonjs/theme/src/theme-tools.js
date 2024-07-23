"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveThemeTokens = exports.mergeTheme = exports.getValue = exports.get = void 0;
const lodash_merge_1 = __importDefault(require("lodash.merge"));
function get(obj, path, fallback) {
    const keys = path && path.split ? path.split('.') : [path];
    let value = obj;
    for (const key of keys) {
        value = value ? value[key] : undefined;
    }
    return value === undefined ? fallback : value;
}
exports.get = get;
/**
 * Gets a value from the given theme based on a path when present,
 * else returns the provided value
 * @param {object} theme
 * @param {unknown} pathOrValue
 */
function getValue(theme, pathOrValue) {
    return get(theme, pathOrValue, pathOrValue);
}
exports.getValue = getValue;
/**
 * Adds or overrides theme values on top of an existing theme object
 * @param destinationTheme Theme object to merge on top of
 * @param sourceTheme Theme object that adds or overrides values
 */
function mergeTheme(destinationTheme, sourceTheme) {
    return (0, lodash_merge_1.default)({}, destinationTheme, sourceTheme);
}
exports.mergeTheme = mergeTheme;
/**
 * Resolves an object (or style config) when referencing theme paths
 * It will preserve the original object structure (nesting)
 * @param {object} theme
 * @param {object} obj
 * @returns {object} a new object with theme-resolved properties
 */
function resolveThemeTokens(theme, obj) {
    const result = {};
    for (const key of Object.keys(obj)) {
        const raw = obj[key];
        if (raw === null) {
            continue;
        }
        if (typeof raw === 'object') {
            result[key] = resolveThemeTokens(theme, raw);
        }
        else {
            result[key] = getValue(theme, raw);
        }
    }
    return result;
}
exports.resolveThemeTokens = resolveThemeTokens;
