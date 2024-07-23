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
const constants_1 = require("../../constants");
const icons_1 = require("../../icons");
const animationEasing = {
    deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)'
};
const ANIMATION_DURATION = 240;
const sharedStyles = {
    padding: 4,
    borderRadius: 9999,
    position: 'absolute',
    cursor: 'pointer',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    transition: 'background-color 120ms',
    selectors: {
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.6)'
        },
        '&:active': {
            backgroundColor: 'rgba(255, 255, 255, 0.4)'
        }
    }
};
const withAnimations = (animateIn, animateOut) => {
    const enterAnimation = {
        animation: `${animateIn} ${ANIMATION_DURATION}ms ${animationEasing.deceleration} both`
    };
    return {
        selectors: {
            '&[data-state="entering"]': enterAnimation,
            '&[data-state="entered"]': enterAnimation,
            '&[data-state="exiting"]': {
                animation: `${animateOut} ${ANIMATION_DURATION}ms ${animationEasing.acceleration} both`
            }
        }
    };
};
const sheetCloseStyles = {
    [constants_1.Position.RIGHT]: Object.assign({ left: 0, marginLeft: -12, marginTop: 12, transform: 'translateX(-100%)' }, withAnimations((0, ui_box_1.keyframes)('rotate360InAnimation', {
        from: { transform: 'translateX(100%) rotate(0deg)' },
        to: { transform: 'translateX(-100%) rotate(-360deg)' }
    }), (0, ui_box_1.keyframes)('rotate360OutAnimation', {
        from: { transform: 'translateX(-100%) rotate(0deg)' },
        to: { transform: 'translateX(100%) rotate(360deg)' }
    }))),
    [constants_1.Position.LEFT]: Object.assign({ marginRight: -12, right: 0, marginTop: 12, transform: 'translateX(100%)' }, withAnimations((0, ui_box_1.keyframes)('leftRotate360InAnimation', {
        from: { transform: 'translateX(-100%) rotate(0deg)' },
        to: { transform: 'translateX(100%), rotate(360deg)' }
    }), (0, ui_box_1.keyframes)('leftRotate360OutAnimation', {
        from: { transform: 'translateX(100%) rotate(0deg)' },
        to: { transform: 'translateX(-100%), rotate(360deg)' }
    }))),
    [constants_1.Position.TOP]: Object.assign({ right: 0, marginRight: 12, top: '100%', marginTop: 12, transform: 'translateY(0)' }, withAnimations((0, ui_box_1.keyframes)('topRotate360InAnimation', {
        from: { transform: 'translateY(-200%) rotate(0deg)' },
        to: { transform: 'translateY(0%), rotate(360deg)' }
    }), (0, ui_box_1.keyframes)('topRotate360OutAnimation', {
        from: { transform: 'translateY(0%) rotate(0deg)' },
        to: { transform: 'translateY(-200%), rotate(360deg)' }
    }))),
    [constants_1.Position.BOTTOM]: Object.assign({ right: 0, marginRight: 12, bottom: '100%', marginBottom: 12, transform: 'translateY(0)' }, withAnimations((0, ui_box_1.keyframes)('bottomRotate360InAnimation', {
        from: { transform: 'translateY(200%) rotate(0deg)' },
        to: { transform: 'translateY(0%), rotate(360deg)' }
    }), (0, ui_box_1.keyframes)('bottomRotate360OutAnimation', {
        from: { transform: 'translateY(0%) rotate(0deg)' },
        to: { transform: 'translateY(200%), rotate(360deg)' }
    })))
};
class SheetClose extends react_1.PureComponent {
    render() {
        const _a = this.props, { isClosing, position } = _a, props = __rest(_a, ["isClosing", "position"]);
        return (react_1.default.createElement(ui_box_1.default, Object.assign({ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }, sheetCloseStyles[position], sharedStyles, props),
            react_1.default.createElement(icons_1.CrossIcon, { color: "#fff" })));
    }
}
exports.default = SheetClose;
SheetClose.propTypes = Object.assign(Object.assign({}, ui_box_1.default.propTypes), { isClosing: prop_types_1.default.bool, position: prop_types_1.default.oneOf([constants_1.Position.LEFT, constants_1.Position.RIGHT, constants_1.Position.TOP, constants_1.Position.BOTTOM]).isRequired });
