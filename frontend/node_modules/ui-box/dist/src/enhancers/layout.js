"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const get_css_1 = __importDefault(require("../get-css"));
const get_class_name_1 = require("../get-class-name");
exports.propTypes = {
    boxSizing: prop_types_1.default.string,
    clear: prop_types_1.default.string,
    clearfix: prop_types_1.default.bool,
    content: prop_types_1.default.string,
    display: prop_types_1.default.string,
    float: prop_types_1.default.string,
    zIndex: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])
};
exports.propAliases = {};
exports.propValidators = {};
const display = {
    className: 'dspl',
    cssName: 'display',
    jsName: 'display',
    safeValue: true,
    isPrefixed: true
};
const float = {
    className: 'flt',
    cssName: 'float',
    jsName: 'float',
    safeValue: true
};
const clear = {
    className: 'clr',
    cssName: 'clear',
    jsName: 'clear',
    safeValue: true
};
const zIndex = {
    className: 'z-idx',
    cssName: 'z-index',
    jsName: 'zIndex',
    safeValue: true,
    defaultUnit: ''
};
const boxSizing = {
    className: 'box-szg',
    cssName: 'box-sizing',
    jsName: 'boxSizing',
    safeValue: true
};
const clearfix = () => {
    const className = `${(0, get_class_name_1.getClassNamePrefix)()}clearfix`;
    const rules = [
        { property: 'display', value: 'table' },
        { property: 'clear', value: 'both' },
        { property: 'content', value: '""' }
    ];
    const concatenatedRules = rules.map(rule => `  ${rule.property}: ${rule.value};`).join('\n');
    const styles = `\n.${className}:before, .${className}:after {\n${concatenatedRules}\n}`;
    return { className, rules, styles };
};
const content = {
    className: 'cnt',
    cssName: 'content',
    jsName: 'content',
    complexValue: true
};
exports.propEnhancers = {
    boxSizing: (value, selector) => (0, get_css_1.default)(boxSizing, value, selector),
    clear: (value, selector) => (0, get_css_1.default)(clear, value, selector),
    clearfix,
    content: (value, selector) => (0, get_css_1.default)(content, value, selector),
    display: (value, selector) => (0, get_css_1.default)(display, value, selector),
    float: (value, selector) => (0, get_css_1.default)(float, value, selector),
    zIndex: (value, selector) => (0, get_css_1.default)(zIndex, value, selector)
};
