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
    _child: '& > *',
    _firstChild: '& > :first-child:not(:last-child)',
    _middleChild: '& > :not(:first-child):not(:last-child)',
    _lastChild: '& > :last-child:not(:first-child)'
};
const internalStyles = {
    display: 'inline-flex'
};
/**
 * Accessible `Group` component to identify a set of inputs/elements. Implements the WAI-ARIA Group Role
 * @see {@link https://www.w3.org/TR/wai-aria-1.1/#group}
 */
const Group = (0, react_1.memo)((0, react_1.forwardRef)(function Group(props, ref) {
    const { children, className, size } = props, restProps = __rest(props, ["children", "className", "size"]);
    const themedProps = (0, hooks_1.useStyleConfig)('Group', { size }, pseudoSelectors, internalStyles);
    const enhancedChildren = react_1.default.Children.map(children, child => {
        if (!react_1.default.isValidElement(child)) {
            return child;
        }
        return react_1.default.cloneElement(child, {
            // Prefer more granularly defined props if present
            size: child.props.size || size
        });
    });
    return (react_1.default.createElement(ui_box_1.default, Object.assign({ className: className, role: "group", ref: ref }, themedProps, restProps), enhancedChildren));
}));
Group.propTypes = {
    children: prop_types_1.default.node.isRequired,
    /**
     * Class name passed to the component.
     * Only use if you know what you are doing.
     */
    className: prop_types_1.default.string,
    /**
     * The size passed down to children (for consistency)
     */
    size: prop_types_1.default.oneOf(['small', 'medium', 'large'])
};
exports.default = Group;
