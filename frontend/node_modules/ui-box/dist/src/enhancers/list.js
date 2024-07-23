"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const get_css_1 = __importDefault(require("../get-css"));
exports.propTypes = {
    listStyle: prop_types_1.default.string,
    listStyleType: prop_types_1.default.string,
    listStyleImage: prop_types_1.default.string,
    listStylePosition: prop_types_1.default.string
};
exports.propAliases = {};
exports.propValidators = {};
const listStyle = {
    className: 'ls',
    cssName: 'list-style',
    jsName: 'listStyle',
    complexValue: true
};
const listStyleType = {
    className: 'ls-typ',
    cssName: 'list-style-type',
    jsName: 'listStyleType'
};
const listStyleImage = {
    className: 'ls-img',
    cssName: 'list-style-image',
    jsName: 'listStyleImage',
    complexValue: true
};
const listStylePosition = {
    className: 'ls-pos',
    cssName: 'list-style-position',
    jsName: 'listStylePosition',
    safeValue: true
};
exports.propEnhancers = {
    listStyle: (value, selector) => (0, get_css_1.default)(listStyle, value, selector),
    listStyleType: (value, selector) => (0, get_css_1.default)(listStyleType, value, selector),
    listStyleImage: (value, selector) => (0, get_css_1.default)(listStyleImage, value, selector),
    listStylePosition: (value, selector) => (0, get_css_1.default)(listStylePosition, value, selector)
};
