"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Cleans an object of undefined values
 */
function removeUndefined(input = {}) {
    const obj = Object.assign({}, input);
    Object.keys(obj).forEach(key => {
        if (obj[key] === undefined) {
            delete obj[key];
        }
    });
    return obj;
}
exports.default = removeUndefined;
