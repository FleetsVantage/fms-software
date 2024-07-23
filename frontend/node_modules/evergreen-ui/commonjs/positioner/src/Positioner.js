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
const constants_1 = require("../../constants");
const hooks_1 = require("../../hooks");
const portal_1 = require("../../portal");
const stack_1 = require("../../stack");
const getPosition_1 = __importDefault(require("./getPosition"));
const animationEasing = {
    spring: 'cubic-bezier(0.175, 0.885, 0.320, 1.175)'
};
const getCSS = ({ animationDuration, initialScale }) => ({
    position: 'fixed',
    transitionTimingFunction: animationEasing.spring,
    transitionDuration: `${animationDuration}ms`,
    transitionProperty: 'opacity, transform',
    transform: `scale(${initialScale}) translateY(-1px)`,
    selectors: {
        '&[data-state="entering"],&[data-state="entered"]': {
            opacity: 1,
            visibility: 'visible',
            transform: 'scale(1)'
        },
        '&[data-state="exiting"],&[data-state="exited"]': {
            opacity: 0,
            transform: 'scale(1)'
        }
    }
});
const noop = () => { };
const initialDimensions = {
    left: 0,
    top: 0,
    height: 0,
    width: 0,
    transformOrigin: null
};
const Positioner = (0, react_1.memo)(function Positioner(props) {
    const { target, isShown, children, initialScale = 0.9, animationDuration = 300, position = constants_1.Position.BOTTOM, bodyOffset = 6, targetOffset = 6, onOpenComplete = noop, onCloseComplete = noop } = props;
    const [dimensions, setDimensions] = (0, react_1.useState)(initialDimensions);
    const previousDimensions = (0, hooks_1.usePrevious)(dimensions, initialDimensions);
    const latestAnimationFrame = (0, react_1.useRef)();
    const transitionState = (0, react_1.useRef)();
    const positionerRef = (0, react_1.useRef)();
    const targetRef = (0, react_1.useRef)();
    const setTargetRef = (0, hooks_1.useMergedRef)(targetRef);
    const getRef = (0, hooks_1.useMergedRef)(positionerRef);
    const update = (0, react_1.useCallback)((prevHeight = 0, prevWidth = 0) => {
        if (!isShown || !targetRef.current || !positionerRef.current)
            return;
        const targetRect = targetRef.current.getBoundingClientRect();
        const hasEntered = positionerRef.current.getAttribute('data-state') === 'entered';
        const viewportHeight = document.documentElement.clientHeight;
        const viewportWidth = document.documentElement.clientWidth;
        let height;
        let width;
        if (hasEntered) {
            // Only when the animation is done should we opt-in to `getBoundingClientRect`
            const positionerRect = positionerRef.current.getBoundingClientRect();
            // https://github.com/segmentio/evergreen/issues/255
            // We need to ceil the width and height to prevent jitter when
            // the window is zoomed (when `window.devicePixelRatio` is not an integer)
            height = Math.round(positionerRect.height);
            width = Math.round(positionerRect.width);
        }
        else {
            // When the animation is in flight use `offsetWidth/Height` which
            // does not calculate the `transform` property as part of its result.
            // There is still change on jitter during the animation (although unoticable)
            // When the browser is zoomed in — we fix this with `Math.max`.
            height = Math.max(positionerRef.current.offsetHeight, prevHeight);
            width = Math.max(positionerRef.current.offsetWidth, prevWidth);
        }
        const { rect, transformOrigin } = (0, getPosition_1.default)({
            position,
            targetRect,
            targetOffset,
            dimensions: {
                height,
                width
            },
            viewport: {
                width: viewportWidth,
                height: viewportHeight
            },
            viewportOffset: bodyOffset
        });
        setDimensions({
            left: rect.left,
            top: rect.top,
            height,
            width,
            transformOrigin
        });
    }, [bodyOffset, isShown, position, targetOffset]);
    // Call `update` whenever the component has "entered" and dimensions change
    // additionally, when there are dynamic children
    (0, react_1.useEffect)(() => {
        if (transitionState.current === 'entered') {
            latestAnimationFrame.current = requestAnimationFrame(() => {
                update(previousDimensions.height, previousDimensions.width);
            });
        }
        return () => {
            if (latestAnimationFrame.current) {
                cancelAnimationFrame(latestAnimationFrame.current);
            }
        };
    }, [previousDimensions.height, previousDimensions.width, update, children]);
    const handleEntering = () => {
        transitionState.current = 'entering';
        update();
    };
    const handleEnter = () => {
        transitionState.current = 'entered';
        update();
    };
    const handleExited = () => {
        transitionState.current = 'exited';
        setDimensions(initialDimensions);
        onCloseComplete();
    };
    (0, react_1.useEffect)(() => {
        const handleResizeOrScroll = () => update();
        window.addEventListener('resize', handleResizeOrScroll);
        window.addEventListener('scroll', handleResizeOrScroll);
        return () => {
            window.removeEventListener('resize', handleResizeOrScroll);
            window.removeEventListener('scroll', handleResizeOrScroll);
        };
    });
    return (react_1.default.createElement(stack_1.Stack, { value: constants_1.StackingOrder.POSITIONER }, zIndex => {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            target({ getRef: setTargetRef, isShown }),
            react_1.default.createElement(react_transition_group_1.Transition, { nodeRef: positionerRef, appear: true, in: isShown, timeout: animationDuration, onEnter: handleEnter, onEntering: handleEntering, onEntered: onOpenComplete, onExited: handleExited, unmountOnExit: true }, state => (react_1.default.createElement(portal_1.Portal, null, children({
                top: dimensions.top,
                left: dimensions.left,
                state,
                zIndex,
                css: getCSS({
                    initialScale,
                    animationDuration
                }),
                style: {
                    transformOrigin: dimensions.transformOrigin,
                    left: dimensions.left,
                    top: dimensions.top,
                    zIndex
                },
                getRef,
                animationDuration
            }))))));
    }));
});
Positioner.propTypes = {
    /**
     * The position the element that is being positioned is on.
     * Smart positioning might override this.
     */
    position: prop_types_1.default.oneOf([
        constants_1.Position.TOP,
        constants_1.Position.TOP_LEFT,
        constants_1.Position.TOP_RIGHT,
        constants_1.Position.BOTTOM,
        constants_1.Position.BOTTOM_LEFT,
        constants_1.Position.BOTTOM_RIGHT,
        constants_1.Position.LEFT,
        constants_1.Position.RIGHT
    ]),
    /**
     * When true, show the element being positioned.
     */
    isShown: prop_types_1.default.bool,
    /**
     * Function that returns the element being positioned.
     */
    children: prop_types_1.default.func.isRequired,
    /**
     * The minimum distance from the body to the element being positioned.
     */
    bodyOffset: prop_types_1.default.number,
    /**
     * The minimum distance from the target to the element being positioned.
     */
    targetOffset: prop_types_1.default.number,
    /**
     * Function that should return a node for the target.
     * ({ getRef: () -> Ref, isShown: Bool }) -> React Node
     */
    target: prop_types_1.default.func.isRequired,
    /**
     * Initial scale of the element being positioned.
     */
    initialScale: prop_types_1.default.number,
    /**
     * Duration of the animation.
     */
    animationDuration: prop_types_1.default.number,
    /**
     * Function that will be called when the exit transition is complete.
     */
    onCloseComplete: prop_types_1.default.func,
    /**
     * Function that will be called when the enter transition is complete.
     */
    onOpenComplete: prop_types_1.default.func
};
exports.default = Positioner;
