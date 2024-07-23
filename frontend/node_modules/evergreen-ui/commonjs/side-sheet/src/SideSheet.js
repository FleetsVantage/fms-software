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
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const ui_box_1 = require("ui-box");
const constants_1 = require("../../constants");
const layers_1 = require("../../layers");
const overlay_1 = require("../../overlay");
const SheetClose_1 = __importDefault(require("./SheetClose"));
const paneProps = {
    [constants_1.Position.LEFT]: {
        height: '100vh',
        maxWidth: '100vw',
        position: 'absolute',
        left: 0,
        right: 'auto'
    },
    [constants_1.Position.RIGHT]: {
        height: '100vh',
        maxWidth: '100vw',
        position: 'absolute',
        right: 0,
        left: 'auto'
    },
    [constants_1.Position.TOP]: {
        width: '100vw',
        position: 'absolute',
        maxHeight: '100vh',
        top: 0,
        bottom: 'auto'
    },
    [constants_1.Position.BOTTOM]: {
        width: '100vw',
        maxHeight: '100vh',
        position: 'absolute',
        bottom: 0,
        top: 'auto'
    }
};
const subpaneProps = {
    [constants_1.Position.LEFT]: {
        height: '100vh'
    },
    [constants_1.Position.RIGHT]: {
        height: '100vh'
    },
    [constants_1.Position.TOP]: {
        width: '100vw'
    },
    [constants_1.Position.BOTTOM]: {
        width: '100vw'
    }
};
const animationEasing = {
    deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)'
};
const ANIMATION_DURATION = 240;
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
const animationStylesClass = {
    [constants_1.Position.LEFT]: Object.assign({ transform: 'translateX(-100%)' }, withAnimations((0, ui_box_1.keyframes)('anchoredLeftSlideInAnimation', {
        from: { transform: 'translateX(-100%)' },
        to: { transform: 'translateX(0)' }
    }), (0, ui_box_1.keyframes)('anchoredLeftSlideOutAnimation', {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' }
    }))),
    [constants_1.Position.RIGHT]: Object.assign({ transform: 'translateX(100%)' }, withAnimations((0, ui_box_1.keyframes)('anchoredRightSlideInAnimation', {
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(0)' }
    }), (0, ui_box_1.keyframes)('anchoredRightSlideOutAnimation', {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(100%)' }
    }))),
    [constants_1.Position.TOP]: Object.assign({ transform: 'translateY(-100%)' }, withAnimations((0, ui_box_1.keyframes)('anchoredTopSlideInAnimation', {
        from: { transform: 'translateY(-100%)' },
        to: { transform: 'translateY(0)' }
    }), (0, ui_box_1.keyframes)('anchoredTopSlideOutAnimation', {
        from: { transform: 'translateY(0)' },
        to: { transform: 'translateY(-100%)' }
    }))),
    [constants_1.Position.BOTTOM]: Object.assign({ transform: 'translateY(100%)' }, withAnimations((0, ui_box_1.keyframes)('anchoredBottomSlideInAnimation', {
        from: { transform: 'translateY(100%)' },
        to: { transform: 'translateY(0)' }
    }), (0, ui_box_1.keyframes)('anchoredBottomSlideOutAnimation', {
        from: { transform: 'translateY(0)' },
        to: { transform: 'translateY(100%)' }
    })))
};
const noop = () => { };
const SideSheet = (0, react_1.memo)(function SideSheet(props) {
    const { width = 620, isShown, children, containerProps, onOpenComplete = noop, onCloseComplete = noop, onBeforeClose, shouldAutoFocus = true, shouldCloseOnOverlayClick = true, shouldCloseOnEscapePress = true, position = constants_1.Position.RIGHT, preventBodyScrolling } = props;
    return (react_1.default.createElement(overlay_1.Overlay, { isShown: isShown, shouldAutoFocus: shouldAutoFocus, shouldCloseOnClick: shouldCloseOnOverlayClick, shouldCloseOnEscapePress: shouldCloseOnEscapePress, onBeforeClose: onBeforeClose, onExited: onCloseComplete, onEntered: onOpenComplete, preventBodyScrolling: preventBodyScrolling }, ({ close, state }) => (react_1.default.createElement(layers_1.Pane, Object.assign({ width: width }, paneProps[position], animationStylesClass[position], { "data-state": state }),
        react_1.default.createElement(SheetClose_1.default, { position: position, "data-state": state, isClosing: false, onClick: close }),
        react_1.default.createElement(layers_1.Pane, Object.assign({ elevation: 4, backgroundColor: "white", overflowY: "auto", maxHeight: "100vh", "data-state": state, width: width }, subpaneProps[position], containerProps), typeof children === 'function' ? children({ close }) : children)))));
});
SideSheet.propTypes = {
    /**
     * Children can be a string, node or a function accepting `({ close })`.
     */
    children: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.func]).isRequired,
    /**
     * When true, the Side Sheet is shown.
     */
    isShown: prop_types_1.default.bool,
    /**
     * Function that will be called when the exit transition is complete.
     */
    onCloseComplete: prop_types_1.default.func,
    /**
     * Function that will be called when the enter transition is complete.
     */
    onOpenComplete: prop_types_1.default.func,
    /**
     * Function called when overlay is about to close.
     * Return `false` to prevent the sheet from closing.
     * type: `Function -> Boolean`
     */
    onBeforeClose: prop_types_1.default.func,
    /**
     * Controls whether the overlay should automatically try to bring focus inside.
     * @default true
     */
    shouldAutoFocus: prop_types_1.default.bool,
    /**
     * Boolean indicating if clicking the overlay should close the overlay.
     * @default true
     */
    shouldCloseOnOverlayClick: prop_types_1.default.bool,
    /**
     * Boolean indicating if pressing the esc key should close the overlay.
     * @default true
     */
    shouldCloseOnEscapePress: prop_types_1.default.bool,
    /**
     * Width of the SideSheet.
     */
    width: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    /**
     * Properties to pass through the SideSheet container Pane.
     */
    containerProps: prop_types_1.default.object,
    /**
     * Positions the sheet to the top, left, right, or bottom of the screen.
     */
    position: prop_types_1.default.oneOf([constants_1.Position.TOP, constants_1.Position.BOTTOM, constants_1.Position.LEFT, constants_1.Position.RIGHT]),
    /**
     * Whether or not to prevent scrolling in the outer body
     * @default false
     */
    preventBodyScrolling: prop_types_1.default.bool
};
exports.default = SideSheet;
