"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const get_css_1 = __importDefault(require("../get-css"));
const regex_1 = require("../utils/regex");
exports.propTypes = {
    borderBottomLeftRadius: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.number
    ]),
    borderBottomRightRadius: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.number
    ]),
    borderRadius: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    borderTopLeftRadius: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.number
    ]),
    borderTopRightRadius: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.number
    ])
};
exports.propAliases = {
    borderRadius: [
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
        'borderTopLeftRadius',
        'borderTopRightRadius'
    ]
};
exports.propValidators = {};
if (process.env.NODE_ENV !== 'production') {
    exports.propValidators.borderRadius = value => {
        if (regex_1.spacesOutsideParentheses.test(value)) {
            return `multiple values (“${value}”) aren՚t supported with “borderRadius”. Use “borderBottomLeftRadius”, “borderBottomRightRadius” “borderTopLeftRadius” and “borderTopRightRadius” instead.`;
        }
        return;
    };
}
const borderTopLeftRadius = {
    className: 'btlr',
    cssName: 'border-top-left-radius',
    jsName: 'borderTopLeftRadius'
};
const borderTopRightRadius = {
    className: 'btrr',
    cssName: 'border-top-right-radius',
    jsName: 'borderTopRightRadius'
};
const borderBottomLeftRadius = {
    className: 'bblr',
    cssName: 'border-bottom-left-radius',
    jsName: 'borderBottomLeftRadius'
};
const borderBottomRightRadius = {
    className: 'bbrr',
    cssName: 'border-bottom-right-radius',
    jsName: 'borderBottomRightRadius'
};
exports.propEnhancers = {
    borderBottomLeftRadius: (value, selector) => (0, get_css_1.default)(borderBottomLeftRadius, value, selector),
    borderBottomRightRadius: (value, selector) => (0, get_css_1.default)(borderBottomRightRadius, value, selector),
    borderTopLeftRadius: (value, selector) => (0, get_css_1.default)(borderTopLeftRadius, value, selector),
    borderTopRightRadius: (value, selector) => (0, get_css_1.default)(borderTopRightRadius, value, selector)
};
