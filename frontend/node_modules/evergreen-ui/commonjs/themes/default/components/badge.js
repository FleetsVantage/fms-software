"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_tools_1 = require("../../../theme/src/theme-tools");
const baseStyle = {
    height: 16,
    paddingY: 0,
    paddingX: 6,
    borderRadius: 'radii.1',
    fontSize: '11.5px',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase'
};
const appearances = {
    subtle: (theme, props) => {
        const scheme = (0, theme_tools_1.get)(theme, `fills.${props.color}`, {
            backgroundColor: props.color,
            color: props.color
        });
        return {
            color: scheme.color,
            backgroundColor: scheme.backgroundColor
        };
    }
};
const sizes = {};
exports.default = {
    baseStyle,
    appearances,
    sizes
};
