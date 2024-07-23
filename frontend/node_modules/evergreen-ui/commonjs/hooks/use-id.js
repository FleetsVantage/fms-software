"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useId = void 0;
const react_1 = require("react");
let count = 0;
/**
 * React hook that always returns an id value that is stable across re-renders
 * @param {string} prefix - a prefix to apply to id
 * @param {string} [explicitId] - an optional explicit value that takes precedence over the generated id
 * @returns {string}
 */
function useId(prefix, explicitId) {
    const [value] = (0, react_1.useState)(() => explicitId || [prefix, ++count].filter(Boolean).join('-'));
    return value;
}
exports.useId = useId;
