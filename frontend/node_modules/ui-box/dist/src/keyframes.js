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
const hash_1 = __importDefault(require("@emotion/hash"));
const flatten_object_1 = __importDefault(require("./utils/flatten-object"));
const enhancers_1 = require("./enhancers");
const is_production_1 = __importDefault(require("./utils/is-production"));
const stylesheet = __importStar(require("./styles"));
const cache = __importStar(require("./cache"));
const keyframes = (friendlyName, timeline) => {
    const hashedValue = (0, hash_1.default)((0, flatten_object_1.default)(timeline));
    const name = `${friendlyName}_${hashedValue}`;
    const cachedStyles = cache.get(friendlyName, hashedValue, 'keyframe');
    if (cachedStyles != null) {
        return name;
    }
    const keys = Object.keys(timeline);
    const timelineStyles = keys.map(key => getStylesForTimelineKey(key, timeline[key] || {}));
    const styles = getKeyframesStyles(name, timelineStyles);
    cache.set(friendlyName, hashedValue, styles, 'keyframe');
    stylesheet.add(styles);
    return name;
};
const flatten = (values) => {
    const flattenedValues = [];
    return flattenedValues.concat(...values);
};
const getStylesForTimelineKey = (timelineKey, cssProps) => {
    const cssPropKeys = Object.keys(cssProps);
    const rules = flatten(cssPropKeys.map(cssPropKey => getRulesForKey(cssPropKey, cssProps)));
    const key = timelineKeyToString(timelineKey);
    const rulesString = rules
        .map(rule => {
        const { property, value } = rule;
        if ((0, is_production_1.default)()) {
            return `${property}:${value};`;
        }
        return `    ${property}: ${value};`;
    })
        .join((0, is_production_1.default)() ? '' : '\n');
    if ((0, is_production_1.default)()) {
        return `${key} {${rulesString}}`;
    }
    return `  ${key} {\n${rulesString}\n  }`;
};
const getRulesForKey = (key, cssProps) => {
    const value = cssProps[key];
    const enhancer = enhancers_1.propEnhancers[key];
    if (enhancer == null || value == null || value === false) {
        return [];
    }
    const enhancedProp = enhancer(value, '');
    if (enhancedProp == null) {
        return [];
    }
    return enhancedProp.rules;
};
const getKeyframesStyles = (name, rules) => {
    const separator = (0, is_production_1.default)() ? '' : '\n';
    const openBrace = `{${separator}`;
    const closeBrace = `${separator}}`;
    const concatenatedRules = rules.join(separator);
    return `@keyframes ${name} ${openBrace}${concatenatedRules}${closeBrace}`;
};
const timelineKeyToString = (timelineKey) => {
    const isNumber = !isNaN(Number(timelineKey));
    return isNumber ? `${timelineKey}%` : timelineKey.toString();
};
exports.default = keyframes;
