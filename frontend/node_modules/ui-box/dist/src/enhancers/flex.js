"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const get_css_1 = __importDefault(require("../get-css"));
exports.propTypes = {
    alignContent: prop_types_1.default.string,
    alignItems: prop_types_1.default.string,
    alignSelf: prop_types_1.default.string,
    flex: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    flexBasis: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    flexDirection: prop_types_1.default.string,
    flexFlow: prop_types_1.default.string,
    flexGrow: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    flexShrink: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    flexWrap: prop_types_1.default.string,
    justifyContent: prop_types_1.default.string,
    justifyItems: prop_types_1.default.string,
    justifySelf: prop_types_1.default.string,
    order: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    placeContent: prop_types_1.default.string,
    placeItems: prop_types_1.default.string,
    placeSelf: prop_types_1.default.string
};
exports.propAliases = {};
exports.propValidators = {};
const flex = {
    className: 'flx',
    cssName: 'flex',
    jsName: 'flex',
    isPrefixed: true,
    defaultUnit: ''
};
const alignItems = {
    className: 'algn-itms',
    cssName: 'align-items',
    jsName: 'alignItems',
    isPrefixed: true
};
const alignSelf = {
    className: 'algn-slf',
    cssName: 'align-self',
    jsName: 'alignSelf',
    isPrefixed: true
};
const alignContent = {
    className: 'algn-cnt',
    cssName: 'align-content',
    jsName: 'alignContent',
    isPrefixed: true
};
const justifyContent = {
    className: 'just-cnt',
    cssName: 'justify-content',
    jsName: 'justifyContent',
    isPrefixed: true
};
const justifyItems = {
    className: 'just-items',
    cssName: 'justify-items',
    jsName: 'justifyItems',
    isPrefixed: true
};
const justifySelf = {
    className: 'just-self',
    cssName: 'justify-self',
    jsName: 'justifySelf',
    isPrefixed: true
};
const flexDirection = {
    className: 'flx-drct',
    cssName: 'flex-direction',
    jsName: 'flexDirection',
    isPrefixed: true,
    safeValue: true
};
const flexWrap = {
    className: 'flx-wrap',
    cssName: 'flex-wrap',
    jsName: 'flexWrap',
    isPrefixed: true,
    safeValue: true
};
const flexGrow = {
    className: 'flx-grow',
    cssName: 'flex-grow',
    jsName: 'flexGrow',
    isPrefixed: true,
    defaultUnit: ''
};
const flexShrink = {
    className: 'flx-srnk',
    cssName: 'flex-shrink',
    jsName: 'flexShrink',
    isPrefixed: true,
    defaultUnit: ''
};
const flexBasis = {
    className: 'flx-basis',
    cssName: 'flex-basis',
    jsName: 'flexBasis',
    isPrefixed: true
};
const order = {
    className: 'order',
    cssName: 'order',
    jsName: 'order',
    isPrefixed: true,
    defaultUnit: '',
    safeValue: true
};
const flexFlow = {
    className: 'flx-flow',
    cssName: 'flex-flow',
    jsName: 'flexFlow',
    isPrefixed: true,
    defaultUnit: ''
};
const placeContent = {
    className: 'plc-cnt',
    cssName: 'place-content',
    jsName: 'placeContent'
};
const placeItems = {
    className: 'plc-items',
    cssName: 'place-items',
    jsName: 'placeItems'
};
const placeSelf = {
    className: 'plc-self',
    cssName: 'place-self',
    jsName: 'placeSelf'
};
exports.propEnhancers = {
    alignContent: (value, selector) => (0, get_css_1.default)(alignContent, value, selector),
    alignItems: (value, selector) => (0, get_css_1.default)(alignItems, value, selector),
    alignSelf: (value, selector) => (0, get_css_1.default)(alignSelf, value, selector),
    flex: (value, selector) => (0, get_css_1.default)(flex, value, selector),
    flexBasis: (value, selector) => (0, get_css_1.default)(flexBasis, value, selector),
    flexDirection: (value, selector) => (0, get_css_1.default)(flexDirection, value, selector),
    flexFlow: (value, selector) => (0, get_css_1.default)(flexFlow, value, selector),
    flexGrow: (value, selector) => (0, get_css_1.default)(flexGrow, value, selector),
    flexShrink: (value, selector) => (0, get_css_1.default)(flexShrink, value, selector),
    flexWrap: (value, selector) => (0, get_css_1.default)(flexWrap, value, selector),
    justifyContent: (value, selector) => (0, get_css_1.default)(justifyContent, value, selector),
    justifyItems: (value, selector) => (0, get_css_1.default)(justifyItems, value, selector),
    justifySelf: (value, selector) => (0, get_css_1.default)(justifySelf, value, selector),
    order: (value, selector) => (0, get_css_1.default)(order, value, selector),
    placeContent: (value, selector) => (0, get_css_1.default)(placeContent, value, selector),
    placeItems: (value, selector) => (0, get_css_1.default)(placeItems, value, selector),
    placeSelf: (value, selector) => (0, get_css_1.default)(placeSelf, value, selector)
};
