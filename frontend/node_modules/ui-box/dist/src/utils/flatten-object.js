"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flattenObject = (object) => {
    const keys = Object.keys(object);
    return keys
        .map(key => {
        const value = object[key];
        const type = typeof value;
        if (Array.isArray(value)) {
            return `${key}:array:[${value.map((value, index) => flattenObject({ [index]: value }))}]`;
        }
        if (value != null && type === 'object') {
            return `${key}:${type}:${flattenObject(value)}`;
        }
        return `${key}:${type}:${value}`;
    })
        .join(';');
};
exports.default = flattenObject;
