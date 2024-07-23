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
const react_transition_group_1 = require("react-transition-group");
const ui_box_1 = __importStar(require("ui-box"));
const Alert_1 = __importDefault(require("../../alert/src/Alert"));
const animationEasing = {
    deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)',
    spring: 'cubic-bezier(0.175, 0.885, 0.320, 1.175)'
};
const ANIMATION_DURATION = 240;
const openAnimation = (0, ui_box_1.keyframes)('openAnimation', {
    from: {
        opacity: 0,
        transform: 'translateY(-120%)'
    },
    to: {
        transform: 'translateY(0)'
    }
});
const closeAnimation = (0, ui_box_1.keyframes)('closeAnimation', {
    from: {
        transform: 'scale(1)',
        opacity: 1
    },
    to: {
        transform: 'scale(0.9)',
        opacity: 0
    }
});
const enterAnimationProps = {
    animationName: openAnimation,
    animationDuration: ANIMATION_DURATION,
    animationTimingFunction: animationEasing.spring,
    animationFillMode: 'both'
};
const animationStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 0,
    transition: `all ${ANIMATION_DURATION}ms ${animationEasing.deceleration}`,
    selectors: {
        '&[data-state="entering"]': enterAnimationProps,
        '&[data-state="entered"]': enterAnimationProps,
        '&[data-state="exiting"]': {
            animationName: closeAnimation,
            animationDuration: 120,
            animationTimingFunction: animationEasing.acceleration,
            animationFillMode: 'both'
        }
    }
};
const Toast = (0, react_1.memo)(function Toast(props) {
    const { children, duration, hasCloseButton, 
    // Template props
    intent = 'none', isShown: isShownProp, onRemove, title, zIndex } = props;
    const transitionRef = (0, react_1.useRef)(null);
    const [isShown, setIsShown] = (0, react_1.useState)(true);
    const [height, setHeight] = (0, react_1.useState)(0);
    const closeTimer = (0, react_1.useRef)(null);
    const clearCloseTimer = (0, react_1.useCallback)(() => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    }, []);
    const close = (0, react_1.useCallback)(() => {
        clearCloseTimer();
        setIsShown(false);
    }, [clearCloseTimer]);
    const startCloseTimer = (0, react_1.useCallback)(() => {
        if (duration) {
            clearCloseTimer();
            closeTimer.current = setTimeout(() => {
                close();
            }, duration * 1000);
        }
    }, [duration, clearCloseTimer, close]);
    (0, react_1.useEffect)(() => {
        startCloseTimer();
        return () => {
            clearCloseTimer();
        };
    }, [startCloseTimer, clearCloseTimer]);
    (0, react_1.useEffect)(() => {
        if (isShownProp !== isShown && typeof isShownProp === 'boolean') {
            setIsShown(isShownProp);
        }
    }, [isShown, isShownProp]);
    const handleMouseEnter = (0, react_1.useCallback)(() => clearCloseTimer(), [clearCloseTimer]);
    const handleMouseLeave = (0, react_1.useCallback)(() => startCloseTimer(), [startCloseTimer]);
    const onRef = (0, react_1.useCallback)(ref => {
        if (ref === null)
            return;
        const { height: rectHeight } = ref.getBoundingClientRect();
        setHeight(rectHeight);
    }, []);
    const styles = (0, react_1.useMemo)(() => ({
        height,
        zIndex,
        marginBottom: isShown ? 0 : -height
    }), [isShown, height, zIndex]);
    return (react_1.default.createElement(react_transition_group_1.Transition, { nodeRef: transitionRef, appear: true, unmountOnExit: true, timeout: ANIMATION_DURATION, in: isShown, onExited: onRemove }, state => (react_1.default.createElement(ui_box_1.default, Object.assign({}, animationStyles, { ref: transitionRef, "data-state": state, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }, styles),
        react_1.default.createElement(ui_box_1.default, { ref: onRef, padding: 8 },
            react_1.default.createElement(Alert_1.default, { flexShrink: 0, appearance: "card", elevation: 3, intent: intent, title: title, isRemoveable: hasCloseButton, onRemove: close, pointerEvents: "all" }, children))))));
});
Toast.propTypes = {
    /**
     * The z-index of the toast.
     */
    zIndex: prop_types_1.default.number,
    /**
     * Duration of the toast.
     */
    duration: prop_types_1.default.number,
    /**
     * Function called when the toast is all the way closed.
     */
    onRemove: prop_types_1.default.func,
    /**
     * The type of the alert.
     */
    intent: prop_types_1.default.string,
    /**
     * The title of the alert.
     */
    title: prop_types_1.default.node,
    /**
     * Description of the alert.
     */
    children: prop_types_1.default.node,
    /**
     * When true, show a close icon button inside of the toast.
     */
    hasCloseButton: prop_types_1.default.bool,
    /**
     * When false, will close the Toast and call onRemove when finished.
     */
    isShown: prop_types_1.default.bool
};
exports.default = Toast;
