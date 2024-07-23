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
const ui_box_1 = require("ui-box");
const buttons_1 = require("../../buttons");
const hooks_1 = require("../../hooks");
const icons_1 = require("../../icons");
const layers_1 = require("../../layers");
const overlay_1 = require("../../overlay");
const typography_1 = require("../../typography");
const animationEasing = {
    deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)'
};
const ANIMATION_DURATION = 200;
const openAnimation = (0, ui_box_1.keyframes)('openAnimation', {
    from: {
        transform: 'scale(0.8)',
        opacity: 0
    },
    to: {
        transform: 'scale(1)',
        opacity: 1
    }
});
const closeAnimation = (0, ui_box_1.keyframes)('closeAnimation', {
    from: {
        transform: 'scale(1)',
        opacity: 1
    },
    to: {
        transform: 'scale(0.8)',
        opacity: 0
    }
});
const enterAnimationProps = {
    animationName: openAnimation,
    animationDuration: ANIMATION_DURATION,
    animationTimingFunction: animationEasing.deceleration,
    animationFillMode: 'both'
};
const animationStyles = {
    selectors: {
        '&[data-state="entering"]': enterAnimationProps,
        '&[data-state="entered"]': enterAnimationProps,
        '&[data-state="exiting"]': {
            animationName: closeAnimation,
            animationDuration: ANIMATION_DURATION,
            animationTimingFunction: animationEasing.acceleration,
            animationFillMode: 'both'
        }
    }
};
const closeHandler = close => close();
const emptyProps = {};
const Dialog = (0, react_1.memo)(function Dialog({ children, cancelLabel = 'Cancel', confirmLabel = 'Confirm', containerProps = emptyProps, contentContainerProps, footer, hasCancel = true, hasClose = true, hasFooter = true, hasHeader = true, header, intent = 'none', isConfirmDisabled = false, isConfirmLoading = false, isShown = false, minHeightContent = 80, onCancel = closeHandler, onCloseComplete, onConfirm = closeHandler, onOpenComplete, overlayProps = emptyProps, preventBodyScrolling = false, shouldAutoFocus = true, shouldCloseOnEscapePress = true, shouldCloseOnOverlayClick = true, sideOffset = '16px', title, topOffset = '12vmin', width = 560 }) {
    const sideOffsetWithUnit = Number.isInteger(sideOffset) ? `${sideOffset}px` : sideOffset;
    const maxWidth = `calc(100% - ${sideOffsetWithUnit} * 2)`;
    const topOffsetWithUnit = Number.isInteger(topOffset) ? `${topOffset}px` : topOffset;
    const maxHeight = `calc(100% - ${topOffsetWithUnit} * 2)`;
    const renderChildren = close => {
        if (typeof children === 'function') {
            return children({ close });
        }
        if (typeof children === 'string') {
            return react_1.default.createElement(typography_1.Paragraph, null, children);
        }
        return children;
    };
    const renderNode = (node, close) => {
        if (typeof node === 'function') {
            return node({ close });
        }
        return node;
    };
    const themedHeaderProps = (0, hooks_1.useStyleConfig)('DialogHeader', emptyProps, emptyProps, emptyProps);
    const themedBodyProps = (0, hooks_1.useStyleConfig)('DialogBody', emptyProps, emptyProps, emptyProps);
    const themedFooterProps = (0, hooks_1.useStyleConfig)('DialogFooter', emptyProps, emptyProps, emptyProps);
    const renderHeader = close => {
        if (!header && !hasHeader) {
            return undefined;
        }
        return (react_1.default.createElement(layers_1.Pane, Object.assign({ flexShrink: 0, display: "flex", alignItems: "center" }, themedHeaderProps), header ? (renderNode(header, close)) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(typography_1.Heading, { is: "h4", size: 600, flex: "1" }, title),
            hasClose && react_1.default.createElement(buttons_1.IconButton, { appearance: "minimal", icon: icons_1.CrossIcon, onClick: () => onCancel(close) })))));
    };
    const renderFooter = close => {
        if (!footer && !hasFooter) {
            return undefined;
        }
        return (react_1.default.createElement(layers_1.Pane, Object.assign({ display: "flex", justifyContent: "flex-end" }, themedFooterProps),
            react_1.default.createElement(layers_1.Pane, null, footer ? (renderNode(footer, close)) : (react_1.default.createElement(react_1.default.Fragment, null,
                hasCancel && (react_1.default.createElement(buttons_1.Button, { tabIndex: 0, onClick: () => onCancel(close) }, cancelLabel)),
                react_1.default.createElement(buttons_1.Button, { tabIndex: 0, marginLeft: 8, appearance: "primary", intent: intent, isLoading: isConfirmLoading, disabled: isConfirmDisabled, onClick: () => onConfirm(close) }, confirmLabel))))));
    };
    const { className: containerClassName } = containerProps, remainingContainerProps = __rest(containerProps, ["className"]);
    return (react_1.default.createElement(overlay_1.Overlay, { isShown: isShown, shouldAutoFocus: shouldAutoFocus, shouldCloseOnClick: shouldCloseOnOverlayClick, shouldCloseOnEscapePress: shouldCloseOnEscapePress, onExited: onCloseComplete, onEntered: onOpenComplete, containerProps: Object.assign({ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }, overlayProps), preventBodyScrolling: preventBodyScrolling }, ({ close, state }) => (react_1.default.createElement(layers_1.Pane, Object.assign({}, animationStyles, { role: "dialog", backgroundColor: "white", elevation: 4, borderRadius: 8, width: width, maxWidth: maxWidth, maxHeight: maxHeight, marginX: sideOffsetWithUnit, marginY: topOffsetWithUnit, display: "flex", flexDirection: "column", className: containerClassName, "data-state": state }, remainingContainerProps),
        renderHeader(close),
        react_1.default.createElement(layers_1.Pane, Object.assign({ "data-state": state, display: "flex", overflow: "auto", flexDirection: "column", minHeight: minHeightContent }, themedBodyProps, contentContainerProps),
            react_1.default.createElement(layers_1.Pane, null, renderChildren(close))),
        renderFooter(close)))));
});
Dialog.propTypes = {
    /**
     * Children can be a string, node or a function accepting `({ close })`.
     * When passing a string, <Paragraph /> is used to wrap the string.
     */
    children: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.func]).isRequired,
    /**
     * The intent of the Dialog. Used for the button.
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
     * When true, the header with the title and close icon button is shown.
     */
    hasHeader: prop_types_1.default.bool,
    /**
     * You can override the default header with your own custom component.
     *
     * This is useful if you want to provide a custom header and footer, while
     * also enabling your Dialog's content to scroll.
     *
     * Header can either be a React node or a function accepting `({ close })`.
     */
    header: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.func]),
    /**
     * When true, the footer with the cancel and confirm button is shown.
     */
    hasFooter: prop_types_1.default.bool,
    /**
     * You can override the default footer with your own custom component.
     *
     * This is useful if you want to provide a custom header and footer, while
     * also enabling your Dialog's content to scroll.
     *
     * Footer can either be a React node or a function accepting `({ close })`.
     */
    footer: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.func]),
    /**
     * When true, the cancel button is shown.
     */
    hasCancel: prop_types_1.default.bool,
    /**
     * When true, the close button is shown
     */
    hasClose: prop_types_1.default.bool,
    /**
     * Function that will be called when the exit transition is complete.
     */
    onCloseComplete: prop_types_1.default.func,
    /**
     * Function that will be called when the enter transition is complete.
     */
    onOpenComplete: prop_types_1.default.func,
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
     * When true, the confirm button is set to loading.
     */
    isConfirmLoading: prop_types_1.default.bool,
    /**
     * When true, the confirm button is set to disabled.
     */
    isConfirmDisabled: prop_types_1.default.bool,
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
     * Width of the Dialog.
     */
    width: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    /**
     * The space above the dialog.
     * This offset is also used at the bottom when there is not enough vertical
     * space available on screen — and the dialog scrolls internally.
     */
    topOffset: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    /**
     * The space on the left/right sides of the dialog when there isn't enough
     * horizontal space available on screen.
     */
    sideOffset: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    /**
     * The min height of the body content.
     * Makes it less weird when only showing little content.
     */
    minHeightContent: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    /**
     * Props that are passed to the dialog container.
     */
    containerProps: prop_types_1.default.object,
    /**
     * Props that are passed to the content container.
     */
    contentContainerProps: prop_types_1.default.object,
    /**
     * Whether or not to prevent scrolling in the outer body
     * @default false
     */
    preventBodyScrolling: prop_types_1.default.bool,
    /**
     * Props that are passed to the Overlay component.
     */
    overlayProps: prop_types_1.default.object
};
exports.default = Dialog;
