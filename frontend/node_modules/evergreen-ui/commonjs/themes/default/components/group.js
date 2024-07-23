"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseStyle = {
    selectors: {
        _child: {
            selectors: {
                '&:focus': {
                    zIndex: 'zIndices.focused'
                },
                '&:active': {
                    zIndex: 'zIndices.focused'
                }
            }
        },
        _firstChild: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
        },
        _middleChild: {
            borderRadius: 0,
            marginLeft: '-1px'
        },
        _lastChild: {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            marginLeft: '-1px'
        }
    }
};
const appearances = {};
const sizes = {};
exports.default = {
    baseStyle,
    appearances,
    sizes
};
