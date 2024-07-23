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
exports.Pulsar = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const ui_box_1 = __importStar(require("ui-box"));
const Position_1 = __importDefault(require("../../constants/src/Position"));
const layers_1 = require("../../layers");
const scales_1 = require("../../scales");
const theme_1 = require("../../theme");
const pulseAnimation = (0, ui_box_1.keyframes)('pulseAnimation', {
    0: {
        transform: 'scale(1)'
    },
    50: {
        transform: 'scale(1.9)'
    },
    100: {
        transform: 'scale(1)'
    }
});
const animationTiming = 'cubic-bezier(0, 0, 0.58, 1)';
const animationDuration = '1.8s';
const pulsarAnimationStyles = {
    animation: `${pulseAnimation} ${animationDuration} ${animationTiming} both infinite`
};
const POSITION_KEYS = {
    [Position_1.default.TOP_LEFT]: ['top', 'left'],
    [Position_1.default.TOP_RIGHT]: ['top', 'right'],
    [Position_1.default.BOTTOM_LEFT]: ['bottom', 'left'],
    [Position_1.default.BOTTOM_RIGHT]: ['bottom', 'right']
};
const getPositionProps = ({ position, size }) => {
    const keys = POSITION_KEYS[position];
    const props = {};
    keys.forEach(key => {
        const isYAxisKey = key === 'top' || key === 'bottom';
        if (isYAxisKey) {
            props[key] = -(size / 2);
        }
        else {
            props[key] = -size;
        }
    });
    return props;
};
exports.Pulsar = (0, react_1.memo)((0, react_1.forwardRef)((_a, ref) => {
    var { position = Position_1.default.TOP_RIGHT, size = (0, scales_1.majorScale)(1), onClick } = _a, rest = __rest(_a, ["position", "size", "onClick"]);
    const { colors } = (0, theme_1.useTheme)();
    const positionProps = getPositionProps({ position, size });
    const outerPadding = size * 0.25;
    return (react_1.default.createElement(layers_1.Pane, Object.assign({ ref: ref, position: "absolute", borderRadius: "50%", backgroundColor: colors.blue100, boxSizing: "content-box", opacity: 0.7, display: "flex", alignItems: "center", justifyContent: "center", padding: outerPadding }, pulsarAnimationStyles, { onClick: onClick, cursor: onClick ? 'pointer' : undefined }, positionProps, rest),
        react_1.default.createElement(layers_1.Pane, { width: size, height: size, backgroundColor: colors.blue200, borderRadius: "50%", opacity: 0.7 })));
}));
exports.Pulsar.propTypes = Object.assign(Object.assign({}, ui_box_1.default.propTypes), { 
    /**
     * The position of the pulsar
     */
    position: prop_types_1.default.oneOf([Position_1.default.TOP_LEFT, Position_1.default.TOP_RIGHT, Position_1.default.BOTTOM_LEFT, Position_1.default.BOTTOM_RIGHT]), 
    /**
     * The width/height of the dot
     */
    size: prop_types_1.default.number });
