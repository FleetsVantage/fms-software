"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const get_css_1 = __importDefault(require("../get-css"));
exports.propTypes = {
    transition: prop_types_1.default.string,
    transitionDelay: prop_types_1.default.string,
    transitionDuration: prop_types_1.default.string,
    transitionProperty: prop_types_1.default.string,
    transitionTimingFunction: prop_types_1.default.string
};
exports.propAliases = {};
exports.propValidators = {};
const transition = {
    className: 'tstn',
    cssName: 'transition',
    jsName: 'transition',
    complexValue: true
};
const transitionDelay = {
    className: 'tstn-dly',
    cssName: 'transition-delay',
    jsName: 'transitionDelay',
    complexValue: true
};
const transitionDuration = {
    className: 'tstn-drn',
    cssName: 'transition-duration',
    jsName: 'transitionDuration',
    complexValue: true
};
const transitionProperty = {
    className: 'tstn-pty',
    cssName: 'transition-property',
    jsName: 'transitionProperty',
    complexValue: true
};
const transitionTimingFunction = {
    className: 'tstn-tf',
    cssName: 'transition-timing-function',
    jsName: 'transitionTimingFunction',
    complexValue: true
};
exports.propEnhancers = {
    transition: (value, selector) => (0, get_css_1.default)(transition, value, selector),
    transitionDelay: (value, selector) => (0, get_css_1.default)(transitionDelay, value, selector),
    transitionDuration: (value, selector) => (0, get_css_1.default)(transitionDuration, value, selector),
    transitionProperty: (value, selector) => (0, get_css_1.default)(transitionProperty, value, selector),
    transitionTimingFunction: (value, selector) => (0, get_css_1.default)(transitionTimingFunction, value, selector)
};
