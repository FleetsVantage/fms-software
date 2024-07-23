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
const ui_box_1 = __importDefault(require("ui-box"));
const hooks_1 = require("../../hooks");
const pseudoSelectors = {
    _hover: '&:hover',
    _active: '&:active'
};
const internalStyles = {};
const _Pane = (props, ref) => {
    const { 
    // Pulled out of props because we'll get them from the style hook
    activeElevation, background, border, borderBottom, borderLeft, borderRight, borderTop, className, elevation, hoverElevation } = props, restProps = __rest(props, ["activeElevation", "background", "border", "borderBottom", "borderLeft", "borderRight", "borderTop", "className", "elevation", "hoverElevation"]);
    const themedProps = (0, hooks_1.useStyleConfig)('Pane', {
        // @ts-expect-error TS(2345): Argument of type '{ elevation: Elevation | undefin... Remove this comment to see the full error message
        elevation,
        hoverElevation,
        activeElevation,
        background,
        border,
        borderTop,
        borderRight,
        borderBottom,
        borderLeft,
        className
    }, pseudoSelectors, internalStyles);
    // @ts-expect-error TS(2322): Type '{ selectors: SelectorMap | undefined; style:... Remove this comment to see the full error message
    return react_1.default.createElement(ui_box_1.default, Object.assign({ ref: ref, className: className }, themedProps, restProps));
};
const Pane = (0, react_1.memo)((0, react_1.forwardRef)(_Pane));
// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type '<E ex... Remove this comment to see the full error message
Pane.propTypes = Object.assign(Object.assign({}, ui_box_1.default.propTypes), { 
    /**
     * Background property.
     * `tint1`, `tint2` etc. from `theme.colors` are available.
     */
    background: prop_types_1.default.string, 
    /**
     * Elevation of the Pane.
     */
    elevation: prop_types_1.default.oneOf([0, 1, 2, 3, 4]), 
    /**
     * Elevation of the Pane on hover. Might get deprecated.
     */
    hoverElevation: prop_types_1.default.oneOf([0, 1, 2, 3, 4]), 
    /**
     * Elevation of the Pane on click. Might get deprecated.
     */
    activeElevation: prop_types_1.default.oneOf([0, 1, 2, 3, 4]), 
    /**
     * Can be an explicit border value or a boolean.
     */
    border: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]), 
    /**
     * Can be an explicit border value or a boolean.
     */
    borderTop: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]), 
    /**
     * Can be an explicit border value or a boolean.
     */
    borderRight: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]), 
    /**
     * Can be an explicit border value or a boolean.
     */
    borderBottom: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]), 
    /**
     * Can be an explicit border value or a boolean.
     */
    borderLeft: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]) });
exports.default = Pane;
