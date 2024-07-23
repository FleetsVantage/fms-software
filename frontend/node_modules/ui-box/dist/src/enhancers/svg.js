"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const get_css_1 = __importDefault(require("../get-css"));
exports.propTypes = {
    fill: prop_types_1.default.string,
    stroke: prop_types_1.default.string,
    strokeDasharray: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    strokeDashoffset: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    strokeLinecap: prop_types_1.default.string,
    strokeMiterlimit: prop_types_1.default.number,
    strokeWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])
};
exports.propAliases = {};
exports.propValidators = {};
const fill = {
    className: 'fill',
    cssName: 'fill',
    jsName: 'fill'
};
const stroke = { className: 'strk', cssName: 'stroke', jsName: 'stroke' };
const strokeDasharray = {
    className: 'strk-dshary',
    cssName: 'stroke-dasharray',
    jsName: 'strokeDasharray',
    defaultUnit: ''
};
const strokeDashoffset = {
    className: 'strk-dshofst',
    cssName: 'stroke-dashoffset',
    jsName: 'strokeDashoffset',
    defaultUnit: ''
};
const strokeLinecap = { className: 'strk-lncp', cssName: 'stroke-linecap', jsName: 'strokeLinecap', safeValue: true };
const strokeMiterlimit = {
    className: 'strk-mtrlmt',
    cssName: 'stroke-miterlimit',
    jsName: 'strokeMiterlimit',
    defaultUnit: ''
};
const strokeWidth = { className: 'strk-w', cssName: 'stroke-width', jsName: 'strokeWidth', defaultUnit: '' };
exports.propEnhancers = {
    fill: (value, selector) => (0, get_css_1.default)(fill, value, selector),
    stroke: (value, selector) => (0, get_css_1.default)(stroke, value, selector),
    strokeDasharray: (value, selector) => (0, get_css_1.default)(strokeDasharray, value, selector),
    strokeDashoffset: (value, selector) => (0, get_css_1.default)(strokeDashoffset, value, selector),
    strokeLinecap: (value, selector) => (0, get_css_1.default)(strokeLinecap, value, selector),
    strokeMiterlimit: (value, selector) => (0, get_css_1.default)(strokeMiterlimit, value, selector),
    strokeWidth: (value, selector) => (0, get_css_1.default)(strokeWidth, value, selector)
};
