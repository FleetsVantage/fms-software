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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const ui_box_1 = __importStar(require("ui-box"));
const hooks_1 = require("../../hooks");
const loadingKeyframes = (0, ui_box_1.keyframes)('loading', {
    0: {
        transform: 'rotate(0)'
    },
    100: {
        transform: 'rotate(360deg)'
    }
});
const loadingCircleKeyframes = (0, ui_box_1.keyframes)('loading-circle', {
    0: {
        strokeDashoffset: 600
    },
    100: {
        strokeDashoffset: 0
    }
});
const innerStyle = color => ({
    animation: `${loadingCircleKeyframes} 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite`,
    fill: 'transparent',
    stroke: color,
    strokeDasharray: 300,
    strokeDashoffset: 600,
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
    strokeWidth: 12
});
const emptyObject = {};
const Spinner = (0, react_1.memo)((0, react_1.forwardRef)(function Spinner(_a, ref) {
    var { delay = 0, size = 'medium' } = _a, props = __rest(_a, ["delay", "size"]);
    const [isVisible, setIsVisible] = (0, react_1.useState)(delay === 0);
    const themedProps = (0, hooks_1.useStyleConfig)('Spinner', { size }, emptyObject, emptyObject);
    const _b = typeof size === 'string' ? themedProps : { width: size, height: size }, { height, width } = _b, rest = __rest(_b, ["height", "width"]);
    (0, react_1.useEffect)(() => {
        let delayTimer = null;
        if (delay > 0) {
            delayTimer = setTimeout(() => {
                setIsVisible(true);
            }, delay);
        }
        return function () {
            clearTimeout(delayTimer);
        };
    }, [delay]);
    if (!isVisible) {
        return null;
    }
    return (react_1.default.createElement(ui_box_1.default, Object.assign({ width: width, height: height, lineHeight: 0 }, props, rest, { ref: ref }),
        react_1.default.createElement(ui_box_1.default, { is: "svg", animation: `${loadingKeyframes} 2s linear infinite`, x: "0px", y: "0px", viewBox: "0 0 150 150" },
            react_1.default.createElement(ui_box_1.default, Object.assign({ is: "circle" }, innerStyle(themedProps.color), { cx: "75", cy: "75", r: "60" })))));
}));
Spinner.propTypes = Object.assign(Object.assign({}, ui_box_1.default.propTypes), { 
    /**
     * Delay after which spinner should be visible.
     */
    delay: prop_types_1.default.number, 
    /**
     * The size of the spinner.
     */
    size: prop_types_1.default.number });
exports.default = Spinner;
