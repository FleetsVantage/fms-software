"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prefixer_1 = __importDefault(require("./prefixer"));
const value_to_string_1 = __importDefault(require("./value-to-string"));
const get_class_name_1 = __importDefault(require("./get-class-name"));
const is_production_1 = __importDefault(require("./utils/is-production"));
function getCss(propertyInfo, value, selector = '') {
    let rules;
    const valueType = typeof value;
    if (valueType !== 'string' && valueType !== 'number') {
        if (process.env.NODE_ENV !== 'production') {
            const name = propertyInfo.jsName;
            const encodedValue = JSON.stringify(value);
            console.error(`📦 ui-box: property “${name}” was passed invalid value “${encodedValue}”. Only numbers and strings are supported.`);
        }
        return null;
    }
    const valueString = (0, value_to_string_1.default)(value, propertyInfo.defaultUnit);
    const className = (0, get_class_name_1.default)(propertyInfo, valueString, selector);
    if (propertyInfo.isPrefixed) {
        rules = (0, prefixer_1.default)(propertyInfo.jsName || '', valueString);
    }
    else {
        rules = [{ property: propertyInfo.cssName || '', value: valueString }];
    }
    let styles;
    if ((0, is_production_1.default)()) {
        const rulesString = rules.map(rule => `${rule.property}:${rule.value}`).join(';');
        styles = `${expandSelectors(className, selector)}{${rulesString}}`;
    }
    else {
        const rulesString = rules.map(rule => `  ${rule.property}: ${rule.value};`).join('\n');
        styles = `
${expandSelectors(className, selector)} {
${rulesString}
}`;
    }
    return { className, styles, rules };
}
exports.default = getCss;
const expandSelectors = (className, selector) => {
    if (!selector.includes(',')) {
        return `.${className}${selector}`;
    }
    return selector
        .split(',')
        .map(selectorPart => `.${className}${selectorPart}`)
        .join(', ');
};
