"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_tools_1 = require("../../../theme/src/theme-tools");
const baseStyle = (theme, { color }) => {
    return {
        fill: (0, theme_tools_1.get)(theme, `intents.${color}.icon`) ||
            (0, theme_tools_1.get)(theme, `colors.icon.${color}`) ||
            (0, theme_tools_1.get)(theme, `colors.${color}`) ||
            color
    };
};
const appearances = {};
const sizes = {};
exports.default = {
    baseStyle,
    appearances,
    sizes
};
