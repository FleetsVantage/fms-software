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
const react_transition_group_1 = require("react-transition-group");
const ui_box_1 = __importStar(require("ui-box"));
const constants_1 = require("../../constants");
const prevent_body_scroll_1 = __importDefault(require("../../lib/prevent-body-scroll"));
const safe_invoke_1 = __importDefault(require("../../lib/safe-invoke"));
const portal_1 = require("../../portal");
const stack_1 = require("../../stack");
const theme_1 = require("../../theme");
const noop = () => { };
const emptyProps = {};
const animationEasing = {
    standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
    spring: 'cubic-bezier(0.175, 0.885, 0.320, 1.175)'
};
const ANIMATION_DURATION = 240;
const fadeInAnimation = (0, ui_box_1.keyframes)('fadeInAnimation', {
    from: {
        opacity: 0
    },
    to: {
        opacity: 1
    }
});
const fadeOutAnimation = (0, ui_box_1.keyframes)('fadeOutAnimation', {
    from: {
        opacity: 1
    },
    to: {
        opacity: 0
    }
});
const enterAnimationProps = {
    animationName: fadeInAnimation,
    animationDuration: ANIMATION_DURATION,
    animationTimingFunction: animationEasing.deceleration,
    animationFillMode: 'both'
};
const exitAnimationProps = {
    animationName: fadeOutAnimation,
    animationDuration: ANIMATION_DURATION,
    animationTimingFunction: animationEasing.acceleration,
    animationFillMode: 'both'
};
const animationStyles = backgroundColor => ({
    selectors: {
        '&::before': {
            backgroundColor,
            left: 0,
            top: 0,
            position: 'fixed',
            display: 'block',
            width: '100%',
            height: '100%',
            content: '" "'
        },
        '&[data-state="entering"]::before': enterAnimationProps,
        '&[data-state="entered"]::before': enterAnimationProps,
        '&[data-state="exiting"]::before': exitAnimationProps,
        '&[data-state="exited"]::before': exitAnimationProps
    }
});
/**
 * Overlay is essentially a wrapper around react-transition-group/Transition
 */
const Overlay = (0, react_1.memo)(function Overlay(_a) {
    var { children, containerProps = emptyProps, preventBodyScrolling = false, shouldAutoFocus = true, shouldCloseOnClick = true, shouldCloseOnEscapePress = true, onBeforeClose, onExit = noop, onExiting = noop, onExited = noop, onEnter = noop, onEntering = noop, onEntered = noop, isShown } = _a, props = __rest(_a, ["children", "containerProps", "preventBodyScrolling", "shouldAutoFocus", "shouldCloseOnClick", "shouldCloseOnEscapePress", "onBeforeClose", "onExit", "onExiting", "onExited", "onEnter", "onEntering", "onEntered", "isShown"]);
    const theme = (0, theme_1.useTheme)();
    const { colors } = theme;
    const [previousActiveElement, setPreviousActiveElement] = (0, react_1.useState)(null);
    const [status, setStatus] = (0, react_1.useState)(isShown ? 'entering' : 'exited');
    const containerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (isShown) {
            setStatus('entering');
        }
    }, [isShown]);
    const close = () => {
        const shouldClose = (0, safe_invoke_1.default)(onBeforeClose);
        if (shouldClose !== false) {
            setStatus('exiting');
        }
    };
    const onEsc = event => {
        if (event.key === 'Escape' && shouldCloseOnEscapePress) {
            close();
        }
    };
    (0, react_1.useEffect)(() => {
        if (status === 'entered') {
            setPreviousActiveElement(document.activeElement);
            bringFocusInsideOverlay();
        }
        if (status === 'entering') {
            document.body.addEventListener('keydown', onEsc, false);
        }
        if (status === 'exiting') {
            document.body.removeEventListener('keydown', onEsc, false);
            bringFocusBackToTarget();
        }
        // These missing deps *should* be okay (adding them would require other changes)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);
    // ComponentWillUnmount
    (0, react_1.useEffect)(() => () => {
        handleBodyScroll(false);
        document.body.removeEventListener('keydown', onEsc, false);
    }, 
    // These missing deps *should* be okay (adding them would require other changes)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    /**
     * Methods borrowed from BlueprintJS
     * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
     */
    const bringFocusInsideOverlay = () => {
        // Always delay focus manipulation to just before repaint to prevent scroll jumping
        return requestAnimationFrame(() => {
            // Container ref may be undefined between component mounting and Portal rendering
            // activeElement may be undefined in some rare cases in IE
            if (!shouldAutoFocus ||
                containerRef.current == null || // eslint-disable-line eqeqeq, no-eq-null
                document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
                !isShown) {
                return;
            }
            const isFocusOutsideModal = !containerRef.current.contains(document.activeElement);
            if (isFocusOutsideModal) {
                // Element marked autofocus has higher priority than the other clowns
                const autofocusElement = containerRef.current.querySelector('[autofocus]');
                const wrapperElement = containerRef.current.querySelector('[tabindex]');
                const buttonElement = containerRef.current.querySelector('button');
                if (autofocusElement) {
                    autofocusElement.focus();
                }
                else if (wrapperElement) {
                    wrapperElement.focus();
                }
                else if (buttonElement) {
                    buttonElement.focus();
                }
            }
        });
    };
    const bringFocusBackToTarget = () => {
        return requestAnimationFrame(() => {
            if (previousActiveElement == null || // eslint-disable-line eqeqeq, no-eq-null
                containerRef.current == null || // eslint-disable-line eqeqeq, no-eq-null
                document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
            ) {
                return;
            }
            // Bring back focus on the target.
            const isFocusInsideModal = containerRef.current.contains(document.activeElement);
            if (document.activeElement === document.body || isFocusInsideModal) {
                previousActiveElement.focus();
            }
        });
    };
    const handleBodyScroll = preventScroll => {
        if (preventBodyScrolling) {
            (0, prevent_body_scroll_1.default)(preventScroll);
        }
    };
    const handleEnter = (node, isAppearing) => {
        handleBodyScroll(true);
        (0, safe_invoke_1.default)(onEnter, node, isAppearing);
    };
    const handleEntering = (node, isAppearing) => {
        setStatus('entering');
        (0, safe_invoke_1.default)(onEntering, node, isAppearing);
    };
    const handleEntered = (node, isAppearing) => {
        setStatus('entered');
        (0, safe_invoke_1.default)(onEntered, node, isAppearing);
    };
    const handleExit = node => {
        handleBodyScroll(false);
        (0, safe_invoke_1.default)(onExit, node);
    };
    const handleExiting = node => {
        setStatus('exiting');
        (0, safe_invoke_1.default)(onExiting, node);
    };
    const handleExited = node => {
        setStatus('exited');
        (0, safe_invoke_1.default)(onExited, node);
    };
    const handleBackdropClick = event => {
        if (event.target !== event.currentTarget || !shouldCloseOnClick) {
            return;
        }
        close();
    };
    if (status === 'exited') {
        return null;
    }
    return (react_1.default.createElement(stack_1.Stack, { value: constants_1.StackingOrder.OVERLAY }, zIndex => (react_1.default.createElement(portal_1.Portal, null,
        react_1.default.createElement(react_transition_group_1.Transition, { nodeRef: containerRef, appear: true, unmountOnExit: true, timeout: ANIMATION_DURATION, in: isShown && status !== 'exiting', onExit: handleExit, onExiting: handleExiting, onExited: handleExited, onEnter: handleEnter, onEntering: handleEntering, onEntered: handleEntered }, state => (react_1.default.createElement(ui_box_1.default, Object.assign({ onClick: handleBackdropClick, ref: containerRef, position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: zIndex, "data-state": state }, containerProps, { className: containerProps.className }, animationStyles(colors.overlay)), typeof children === 'function' ? children({ state, close }) : children)))))));
});
Overlay.propTypes = {
    /**
     * Children can be a node or a function accepting `close: func`
     * and `state: ENTERING | ENTERED | EXITING | EXITED`.
     */
    children: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.func]).isRequired,
    /**
     * Show the component; triggers the enter or exit states.
     */
    isShown: prop_types_1.default.bool,
    /**
     * Props to be passed through on the inner Box.
     */
    containerProps: prop_types_1.default.object,
    /**
     * Whether or not to prevent body scrolling outside the context of the overlay
     * @default false
     */
    preventBodyScrolling: prop_types_1.default.bool,
    /**
     * Controls whether the overlay should automatically try to bring focus inside.
     * @default true
     */
    shouldAutoFocus: prop_types_1.default.bool,
    /**
     * Boolean indicating if clicking the overlay should close the overlay.
     * @default true
     */
    shouldCloseOnClick: prop_types_1.default.bool,
    /**
     * Boolean indicating if pressing the esc key should close the overlay.
     * @default true
     */
    shouldCloseOnEscapePress: prop_types_1.default.bool,
    /**
     * Function called when overlay is about to close.
     * Return `false` to prevent the sheet from closing.
     * type: `Function -> Boolean`
     */
    onBeforeClose: prop_types_1.default.func,
    /**
     * Callback fired before the "exiting" status is applied.
     * type: `Function(node: HtmlElement) -> void`
     */
    onExit: prop_types_1.default.func,
    /**
     * Callback fired after the "exiting" status is applied.
     * type: `Function(node: HtmlElement) -> void`
     */
    onExiting: prop_types_1.default.func,
    /**
     * Callback fired after the "exited" status is applied.
     * type: `Function(exitState: Any?, node: HtmlElement) -> void`
     */
    onExited: prop_types_1.default.func,
    /**
     * Callback fired before the "entering" status is applied.
     * An extra parameter isAppearing is supplied to indicate if the enter stage
     * is occurring on the initial mount.
     *
     * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
     */
    onEnter: prop_types_1.default.func,
    /**
     * Callback fired after the "entering" status is applied.
     * An extra parameter isAppearing is supplied to indicate if the enter stage
     * is occurring on the initial mount.
     *
     * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
     */
    onEntering: prop_types_1.default.func,
    /**
     * Callback fired after the "entered" status is applied.
     * An extra parameter isAppearing is supplied to indicate if the enter stage
     * is occurring on the initial mount.
     *
     * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
     */
    onEntered: prop_types_1.default.func
};
exports.default = Overlay;
