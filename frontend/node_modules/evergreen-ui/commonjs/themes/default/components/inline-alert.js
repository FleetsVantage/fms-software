"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseStyle = (theme, { intent = 'info' }) => ({
    color: theme.intents[intent].text
});
const appearances = {};
const sizes = {};
exports.default = {
    baseStyle,
    appearances,
    sizes
};
