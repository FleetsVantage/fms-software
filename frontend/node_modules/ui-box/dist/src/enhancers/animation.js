"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const get_css_1 = __importDefault(require("../get-css"));
exports.propTypes = {
    animation: prop_types_1.default.string,
    animationDelay: prop_types_1.default.string,
    animationDirection: prop_types_1.default.string,
    animationDuration: prop_types_1.default.string,
    animationFillMode: prop_types_1.default.string,
    animationIterationCount: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    animationName: prop_types_1.default.string,
    animationPlayState: prop_types_1.default.string,
    animationTimingFunction: prop_types_1.default.string
};
exports.propAliases = {};
exports.propValidators = {};
const animation = {
    className: 'a',
    cssName: 'animation',
    jsName: 'animation',
    complexValue: true
};
const animationDelay = {
    className: 'a-dly',
    cssName: 'animation-delay',
    jsName: 'animationDelay',
    defaultUnit: 'ms'
};
const animationDirection = {
    className: 'a-dir',
    cssName: 'animation-direction',
    jsName: 'animationDirection',
    safeValue: true
};
const animationDuration = {
    className: 'a-dur',
    cssName: 'animation-duration',
    jsName: 'animationDuration',
    defaultUnit: 'ms'
};
const animationFillMode = {
    className: 'a-fill-md',
    cssName: 'animation-fill-mode',
    jsName: 'animationFillMode',
    safeValue: true
};
const animationIterationCount = {
    className: 'a-itr-ct',
    cssName: 'animation-iteration-count',
    jsName: 'animationIterationCount',
    defaultUnit: ''
};
const animationName = {
    className: 'a-nm',
    cssName: 'animation-name',
    jsName: 'animationName'
};
const animationPlayState = {
    className: 'a-ply-ste',
    cssName: 'animation-play-state',
    jsName: 'animationPlayState',
    safeValue: true
};
const animationTimingFunction = {
    className: 'a-tmng-fn',
    cssName: 'animation-timing-function',
    jsName: 'animationTimingFunction',
    complexValue: true
};
exports.propEnhancers = {
    animation: (value, selector) => (0, get_css_1.default)(animation, value, selector),
    animationDelay: (value, selector) => (0, get_css_1.default)(animationDelay, value, selector),
    animationDirection: (value, selector) => (0, get_css_1.default)(animationDirection, value, selector),
    animationDuration: (value, selector) => (0, get_css_1.default)(animationDuration, value, selector),
    animationFillMode: (value, selector) => (0, get_css_1.default)(animationFillMode, value, selector),
    animationIterationCount: (value, selector) => (0, get_css_1.default)(animationIterationCount, value, selector),
    animationName: (value, selector) => (0, get_css_1.default)(animationName, value, selector),
    animationPlayState: (value, selector) => (0, get_css_1.default)(animationPlayState, value, selector),
    animationTimingFunction: (value, selector) => (0, get_css_1.default)(animationTimingFunction, value, selector)
};
