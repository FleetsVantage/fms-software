"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function safeInvoke(fn, ...args) {
    if (typeof fn === 'function') {
        return fn(...args);
    }
}
exports.default = safeInvoke;
