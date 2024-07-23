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
const lodash_debounce_1 = __importDefault(require("lodash.debounce"));
const prop_types_1 = __importDefault(require("prop-types"));
const constants_1 = require("../../constants");
const hooks_1 = require("../../hooks");
const positioner_1 = require("../../positioner");
const TooltipStateless_1 = __importDefault(require("./TooltipStateless"));
const emptyProps = {};
const Tooltip = (0, react_1.memo)(function Tooltip(props) {
    const { appearance = 'default', position = constants_1.Position.BOTTOM, content, hideDelay = 120, showDelay = 0, isShown: propIsShown, children, statelessProps = emptyProps } = props;
    const id = (0, hooks_1.useId)('evergreen-tooltip', props.id);
    const [isShown, setIsShown] = (0, react_1.useState)(propIsShown || false);
    const [isShownByTarget, setIsShownByTarget] = (0, react_1.useState)(false);
    const closeTimer = (0, react_1.useRef)(undefined);
    const mouseLeftTarget = () => {
        setIsShownByTarget(false);
    };
    const handleMouseLeaveTarget = (0, lodash_debounce_1.default)(mouseLeftTarget, hideDelay);
    const hide = () => {
        setIsShown(false);
        // Clean up any timeouts that may have been triggered from `showDelay`
        clearTimeout(closeTimer.current);
    };
    const handleHide = (0, lodash_debounce_1.default)(hide, hideDelay);
    // Component will unmount
    (0, react_1.useEffect)(() => () => {
        clearTimeout(closeTimer.current);
    }, []);
    const show = () => {
        if (isShown)
            return;
        if (!showDelay) {
            setIsShown(true);
            return;
        }
        clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => {
            setIsShown(true);
        }, showDelay);
    };
    const renderTarget = ({ getRef }) => {
        const tooltipTargetProps = {
            onMouseEnter: show,
            onMouseLeave: handleHide,
            'aria-describedby': id
        };
        /**
         * Tooltips can be used within a Popover (not the other way around)
         * When a Tooltip is used within a Popover, the Popover passes
         * its props to the Tooltip in a `popoverProps` object.
         */
        // eslint-disable-next-line react/prop-types
        if (props.popoverProps) {
            const _a = props.popoverProps, { 
            // eslint-disable-next-line react/prop-types
            getTargetRef, 
            // eslint-disable-next-line react/prop-types
            isShown } = _a, popoverTargetProps = __rest(_a, ["getTargetRef", "isShown"])
            // eslint-disable-next-line react/prop-types
            ;
            return react_1.default.cloneElement(children, Object.assign(Object.assign(Object.assign({}, popoverTargetProps), tooltipTargetProps), { ref: ref => {
                    // Get the ref for the Tooltip.
                    getRef(ref);
                    // Pass the ref to the Popover.
                    getTargetRef(ref);
                } }));
        }
        /**
         * With normal usage only the props for a Tooltip are passed to the target.
         */
        return react_1.default.cloneElement(children, Object.assign(Object.assign({}, tooltipTargetProps), { ref: ref => {
                getRef(ref);
            } }));
    };
    // eslint-disable-next-line react/prop-types
    const isPopoverShown = () => props.popoverProps && props.popoverProps.isShown;
    const handleMouseEnterTarget = () => {
        setIsShownByTarget(true);
    };
    let shown = (propIsShown || isShown || isShownByTarget) && !isPopoverShown();
    // Tooltip was explicitly set to not be shown
    if (propIsShown === false) {
        shown = false;
    }
    return (react_1.default.createElement(positioner_1.Positioner, { target: renderTarget, isShown: shown, position: position, animationDuration: 160 }, ({ css, getRef, state, style }) => (react_1.default.createElement(TooltipStateless_1.default, Object.assign({ id: id, appearance: appearance, ref: getRef, "data-state": state, style: style, onMouseEnter: handleMouseEnterTarget, onMouseLeave: handleMouseLeaveTarget }, statelessProps, css, { className: statelessProps.className }), content))));
});
Tooltip.propTypes = {
    /**
     * The appearance of the tooltip.
     */
    appearance: prop_types_1.default.oneOf(['default', 'card']),
    /**
     * The id of the tooltip.
     */
    id: prop_types_1.default.string,
    /**
     * The position the Popover is on.
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
     * The content of the Popover.
     */
    content: prop_types_1.default.node,
    /**
     * Time in ms before hiding the Tooltip.
     */
    hideDelay: prop_types_1.default.number,
    /**
     * Time in ms before showing the Tooltip.
     */
    showDelay: prop_types_1.default.number,
    /**
     * Controls whether the Tooltip is shown or not.
     * - When `true`, the component is always shown, regardless of the whether the target is hovered.
     * - When `false`, the component is never shown, regardless of the whether the target is hovered.
     * - When `undefined`, the component is uncontrolled and the isShown state is handled internally
     * (i.e. the Tooltip is shown when the target is hovered)
     */
    isShown: prop_types_1.default.bool,
    /**
     * The target button of the Tooltip.
     */
    children: prop_types_1.default.node,
    /**
     * Properties passed through to the Tooltip.
     */
    statelessProps: prop_types_1.default.object
};
exports.default = Tooltip;
