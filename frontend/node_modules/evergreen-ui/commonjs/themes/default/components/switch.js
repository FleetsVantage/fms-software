"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseStyle = {};
const appearances = {
    default: {
        selectors: {
            _base: {
                color: 'white',
                backgroundColor: 'colors.gray400'
            },
            _disabled: {
                cursor: 'not-allowed',
                opacity: 0.5
            },
            _hover: {
                backgroundColor: 'colors.gray500'
            },
            _focus: {
                boxShadow: theme => `0 0 0 3px ${theme.colors.blue100}`
            },
            _active: {
                backgroundColor: 'colors.gray600'
            },
            _checked: {
                backgroundColor: 'colors.blue500',
                color: 'white'
            },
            _checkedHover: {
                backgroundColor: 'colors.blue600',
                color: 'white'
            },
            _checkedActive: {
                backgroundColor: 'colors.blue700',
                color: 'white'
            },
            _checkedDisabled: {}
        }
    }
};
const sizes = {};
exports.default = {
    baseStyle,
    appearances,
    sizes
};
