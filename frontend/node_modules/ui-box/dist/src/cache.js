"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = exports.hydrate = exports.entries = exports.set = exports.get = void 0;
let cache = new Map();
function get(property, value, selectorHead = '') {
    return cache.get(selectorHead + property + value);
}
exports.get = get;
function set(property, value, className, selectorHead = '') {
    if (process.env.NODE_ENV !== 'production') {
        const valueType = typeof value;
        if (valueType !== 'boolean' &&
            valueType !== 'number' &&
            valueType !== 'string') {
            const encodedValue = JSON.stringify(value);
            throw new TypeError(`📦 ui-box: invalid cache value “${encodedValue}”. Only booleans, numbers and strings are supported.`);
        }
    }
    cache.set(selectorHead + property + value, className);
}
exports.set = set;
function entries() {
    return [...cache];
}
exports.entries = entries;
function hydrate(newEntries) {
    cache = new Map([...cache, ...newEntries]);
}
exports.hydrate = hydrate;
function clear() {
    cache.clear();
}
exports.clear = clear;
