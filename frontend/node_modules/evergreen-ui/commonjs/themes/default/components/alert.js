"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseStyle = (theme, { intent = 'info' }) => ({
    backgroundColor: `intents.${intent}.background`,
    border: `1px solid ${theme.intents[intent].border}`,
    borderRadius: 'radii.2',
    color: theme.intents[intent].text
});
const appearances = {};
const sizes = {};
exports.default = {
    baseStyle,
    appearances,
    sizes
};
