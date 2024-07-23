"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setClassNamePrefix = exports.getClassNamePrefix = void 0;
const hash_1 = __importDefault(require("@emotion/hash"));
const get_safe_value_1 = __importDefault(require("./get-safe-value"));
let PREFIX = 'ub-';
function getClassNamePrefix() {
    return PREFIX;
}
exports.getClassNamePrefix = getClassNamePrefix;
function setClassNamePrefix(prefix) {
    PREFIX = prefix;
}
exports.setClassNamePrefix = setClassNamePrefix;
function getClassName(propertyInfo, value, selector = '') {
    const { className, safeValue = false, complexValue = false } = propertyInfo;
    let valueKey;
    if (value === 'inherit' || value === 'initial' || value === 'unset') {
        valueKey = value;
    }
    else if (complexValue || value.includes('calc(')) {
        valueKey = (0, hash_1.default)(value);
    }
    else if (safeValue) {
        valueKey = value;
    }
    else {
        valueKey = (0, get_safe_value_1.default)(value);
    }
    if (selector) {
        valueKey = `${valueKey}_${(0, hash_1.default)(selector)}`;
    }
    return `${PREFIX}${className}_${valueKey}`;
}
exports.default = getClassName;
