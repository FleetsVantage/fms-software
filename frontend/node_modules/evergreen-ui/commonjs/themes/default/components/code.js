"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseStyle = {};
const codeBackgroundColor = 'rgba(16, 112, 202, 0.06)';
const codeBorderColor = 'rgba(16, 112, 202, 0.14)';
const appearances = {
    default: {
        backgroundColor: codeBackgroundColor,
        boxShadow: `inset 0 0 0 1px ${codeBorderColor}`,
        paddingX: 6,
        paddingY: 3,
        borderRadius: 'radii.1'
    }
};
const sizes = {};
exports.default = {
    baseStyle,
    appearances,
    sizes
};
