"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseStyle = {};
const appearances = {};
const textSizes = {
    300: {
        fontSize: 'fontSizes.1',
        fontWeight: 'fontWeights.normal',
        lineHeight: 'lineHeights.0',
        letterSpacing: 'letterSpacings.normal'
    },
    400: {
        fontSize: 'fontSizes.2',
        fontWeight: 'fontWeights.normal',
        lineHeight: 'lineHeights.2',
        letterSpacing: 'letterSpacings.tight'
    },
    500: {
        fontSize: 'fontSizes.3',
        fontWeight: 'fontWeights.normal',
        lineHeight: 'lineHeights.2',
        letterSpacing: 'letterSpacings.tight'
    },
    600: {
        fontSize: 'fontSizes.4',
        fontWeight: 'fontWeights.normal',
        lineHeight: 'lineHeights.3',
        letterSpacing: 'letterSpacings.tighter'
    }
};
const sizes = Object.assign(Object.assign({}, textSizes), { small: textSizes['300'], medium: textSizes['400'], large: textSizes['500'] });
exports.default = {
    baseStyle,
    appearances,
    sizes
};
