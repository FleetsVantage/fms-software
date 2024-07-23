"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enhancers_1 = require("./enhancers");
const expand_aliases_1 = __importDefault(require("./expand-aliases"));
const cache = __importStar(require("./cache"));
const styles = __importStar(require("./styles"));
const SELECTORS_PROP = 'selectors';
function enhanceProps(props, selectorHead = '', parentProperty = '') {
    const propsMap = (0, expand_aliases_1.default)(props);
    const preservedProps = {};
    let className = props.className || '';
    for (const [property, value] of propsMap) {
        const isSelectorOrChildProp = property === SELECTORS_PROP || parentProperty.length > 0;
        if (isObject(value) && isSelectorOrChildProp) {
            const prop = property === SELECTORS_PROP ? '' : property;
            const newSelectorHead = selectorHead.includes(',')
                ? selectorHead
                    .split(',')
                    .map(selector => `${selector}${prop}`)
                    .join(',')
                : `${selectorHead}${prop}`;
            const parsed = enhanceProps(value, noAnd(newSelectorHead), property);
            className = `${className} ${parsed.className}`;
            continue;
        }
        const enhancer = enhancers_1.propEnhancers[property];
        if (!enhancer) {
            preservedProps[property] = value;
            continue;
        }
        if (value === null || value === undefined || value === false) {
            continue;
        }
        const cachedClassName = cache.get(property, value, selectorHead);
        if (cachedClassName) {
            className = `${className} ${cachedClassName}`;
            continue;
        }
        const newCss = enhancer(value, selectorHead);
        if (newCss) {
            styles.add(newCss.styles);
            cache.set(property, value, newCss.className, selectorHead);
            className = `${className} ${newCss.className}`;
        }
    }
    className = className.trim();
    return { className, enhancedProps: preservedProps };
}
exports.default = enhanceProps;
const isObject = (value) => value != null && typeof value === 'object';
const noAnd = (value) => value.replace(/&/g, '');
