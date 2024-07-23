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
const ui_box_1 = require("ui-box");
const buttons_1 = require("../../buttons");
const AbsolutePosition_1 = __importDefault(require("../../constants/src/AbsolutePosition"));
const Position_1 = __importDefault(require("../../constants/src/Position"));
const icons_1 = require("../../icons");
const layers_1 = require("../../layers");
const portal_1 = require("../../portal");
const typography_1 = require("../../typography");
const animationEasing = {
    deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)',
    spring: 'cubic-bezier(0.175, 0.885, 0.320, 1.175)'
};
const ANIMATION_DURATION = 240;
const openAnimation = (0, ui_box_1.keyframes)('openAnimation', {
    from: {
        transform: 'translateY(100%)'
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
const closeHandler = close => close();
const noop = () => { };
const emptyProps = {};
const CornerDialog = (0, react_1.memo)(function CornerDialog(props) {
    const { title, width = 448, children, intent = 'none', isShown, hasFooter = true, hasCancel = true, hasClose = true, cancelLabel = 'Close', confirmLabel = 'Learn More', onOpenComplete, onCloseComplete = noop, onCancel = closeHandler, onConfirm = closeHandler, containerProps = emptyProps, position = Position_1.default.BOTTOM_RIGHT } = props;
    const [exiting, setExiting] = (0, react_1.useState)(false);
    const [exited, setExited] = (0, react_1.useState)(!props.isShown);
    const transitionRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (isShown) {
            setExited(false);
        }
    }, [isShown]);
    const handleExited = (0, react_1.useCallback)(() => {
        setExiting(false);
        setExited(true);
        onCloseComplete();
    }, [onCloseComplete]);
    const handleClose = (0, react_1.useCallback)(() => setExiting(true), []);
    const handleCancel = (0, react_1.useCallback)(() => {
        onCancel(handleClose);
    }, [onCancel, handleClose]);
    const handleConfirm = (0, react_1.useCallback)(() => {
        onConfirm(handleClose);
    }, [onConfirm, handleClose]);
    const renderChildren = (0, react_1.useCallback)(() => {
        if (typeof children === 'function') {
            return children({ close: handleClose });
        }
        if (typeof children === 'string') {
            return (react_1.default.createElement(typography_1.Paragraph, { size: 400, color: "muted" }, children));
        }
        return children;
    }, [children, handleClose]);
    if (exited) {
        return null;
    }
    const { className: containerClassName } = containerProps, remainingContainerProps = __rest(containerProps, ["className"]);
    return (react_1.default.createElement(portal_1.Portal, null,
        react_1.default.createElement(react_transition_group_1.Transition, { nodeRef: transitionRef, appear: true, unmountOnExit: true, timeout: ANIMATION_DURATION, in: isShown && !exiting, onExited: handleExited, onEntered: onOpenComplete }, state => (react_1.default.createElement(layers_1.Card, Object.assign({}, animationStyles, { ref: transitionRef, role: "dialog", backgroundColor: "white", elevation: 4, width: width, className: containerClassName, "data-state": state, padding: 32, position: "fixed" }, AbsolutePosition_1.default[Object.keys(AbsolutePosition_1.default).includes(position) ? position : Position_1.default.BOTTOM_RIGHT], remainingContainerProps),
            react_1.default.createElement(layers_1.Pane, { display: "flex", alignItems: "center", marginBottom: 12 },
                react_1.default.createElement(typography_1.Heading, { is: "h4", size: 600, flex: "1" }, title),
                hasClose && react_1.default.createElement(buttons_1.IconButton, { icon: icons_1.CrossIcon, appearance: "minimal", onClick: handleClose })),
            react_1.default.createElement(layers_1.Pane, { overflowY: "auto", "data-state": state }, renderChildren()),
            hasFooter && (react_1.default.createElement(layers_1.Pane, { marginTop: 24, flexShrink: 0, display: "flex", flexDirection: "row-reverse" },
                react_1.default.createElement(buttons_1.Button, { appearance: "primary", intent: intent, marginLeft: 8, onClick: handleConfirm }, confirmLabel),
                hasCancel && react_1.default.createElement(buttons_1.Button, { onClick: handleCancel }, cancelLabel))))))));
});
CornerDialog.propTypes = {
    /**
     * Children can be a string, node or a function accepting `({ close })`.
     * When passing a string, <Paragraph size={400} color="muted" /> is used to wrap the string.
     */
    children: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.func]).isRequired,
    /**
     * The intent of the CornerDialog. Used for the button.
     */
    intent: prop_types_1.default.string,
    /**
     * When true, the dialog is shown.
     */
    isShown: prop_types_1.default.bool,
    /**
     * Title of the Dialog. Titles should use Title Case.
     */
    title: prop_types_1.default.node,
    /**
     * Function that will be called when the exit transition is complete.
     */
    onCloseComplete: prop_types_1.default.func,
    /**
     * Function that will be called when the enter transition is complete.
     */
    onOpenComplete: prop_types_1.default.func,
    /**
     * When true, the footer with the cancel and confirm button is shown.
     */
    hasFooter: prop_types_1.default.bool,
    /**
     * Function that will be called when the confirm button is clicked.
     * This does not close the Dialog. A close function will be passed
     * as a paramater you can use to close the dialog.
     *
     * `onConfirm={(close) => close()}`
     */
    onConfirm: prop_types_1.default.func,
    /**
     * Label of the confirm button.
     */
    confirmLabel: prop_types_1.default.string,
    /**
     * When true, the cancel button is shown.
     */
    hasCancel: prop_types_1.default.bool,
    /**
     * When true, the close button is shown.
     */
    hasClose: prop_types_1.default.bool,
    /**
     * Function that will be called when the cancel button is clicked.
     * This closes the Dialog by default.
     *
     * `onCancel={(close) => close()}`
     */
    onCancel: prop_types_1.default.func,
    /**
     * Label of the cancel button.
     */
    cancelLabel: prop_types_1.default.string,
    /**
     * Width of the Dialog.
     */
    width: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    /**
     * Props that are passed to the dialog container.
     */
    containerProps: prop_types_1.default.object,
    /**
     * Props that will set position of corner dialog
     */
    position: prop_types_1.default.oneOf([Position_1.default.TOP_LEFT, Position_1.default.TOP_RIGHT, Position_1.default.BOTTOM_LEFT, Position_1.default.BOTTOM_RIGHT])
};
exports.default = CornerDialog;
