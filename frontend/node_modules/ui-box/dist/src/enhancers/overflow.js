"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const get_css_1 = __importDefault(require("../get-css"));
exports.propTypes = {
    overflow: prop_types_1.default.string,
    overflowX: prop_types_1.default.string,
    overflowY: prop_types_1.default.string
};
exports.propAliases = {
    overflow: ['overflowX', 'overflowY']
};
exports.propValidators = {};
const overflowY = {
    className: 'ovflw-y',
    cssName: 'overflow-y',
    jsName: 'overflowY',
    safeValue: true
};
const overflowX = {
    className: 'ovflw-x',
    cssName: 'overflow-x',
    jsName: 'overflowX',
    safeValue: true
};
exports.propEnhancers = {
    overflowX: (value, selector) => (0, get_css_1.default)(overflowX, value, selector),
    overflowY: (value, selector) => (0, get_css_1.default)(overflowY, value, selector)
};
