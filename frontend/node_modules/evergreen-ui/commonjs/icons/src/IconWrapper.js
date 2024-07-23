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
exports.IconWrapper = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_is_1 = __importDefault(require("react-is"));
const ui_box_1 = __importDefault(require("ui-box"));
/**
 * This is an internal helper component for rendering custom or Evergreen icons
 * Box props are applied to the outer Box container, and Evergreen icon-specific props are added to the icon element.
 */
exports.IconWrapper = (0, react_1.memo)((0, react_1.forwardRef)(function Icon(_a, ref) {
    var { color, icon, size, title } = _a, props = __rest(_a, ["color", "icon", "size", "title"]);
    if (!icon || typeof icon === 'string') {
        return null;
    }
    const iconProps = {
        color,
        size,
        title
    };
    let iconWithProps = null;
    if (react_is_1.default.isValidElementType(icon)) {
        const Component = icon;
        iconWithProps = react_1.default.createElement(Component, Object.assign({ ref: ref }, iconProps));
    }
    else if (react_1.default.isValidElement(icon)) {
        iconWithProps = react_1.default.cloneElement(icon, Object.assign(Object.assign(Object.assign({}, iconProps), icon.props), { ref }));
    }
    return (react_1.default.createElement(ui_box_1.default, Object.assign({ display: "inline-flex" }, props), iconWithProps));
}));
exports.IconWrapper.propTypes = {
    /**
     * Color of icon. Equivalent to setting CSS `fill` property.
     */
    color: prop_types_1.default.string,
    /**
     * The icon component - whether an Evergreen icon or a custom icon node:
     *
     * - If `null` or `undefined` or `false`, this component will render nothing.
     * - If given a `JSX.Element`, that element will be rendered, with size/color/title props cloned into it
     * - If given a React element type, it will be rendered with the other icon props
     *   As a consumer, you should never use `<IconWrapper icon={<element />}` directly; simply render `<element />` instead.
     */
    icon: prop_types_1.default.oneOfType([prop_types_1.default.elementType, prop_types_1.default.element]),
    /**
     * Size of the icon, in pixels.
     * Icons contains 16px and 20px SVG icon paths,
     * and chooses the appropriate resolution based on this prop.
     */
    size: prop_types_1.default.number,
    /**
     * Description string.
     * Browsers usually render this as a tooltip on hover, whereas screen
     * readers will use it for aural feedback.
     * By default, this is set to the icon's name for accessibility.
     */
    title: prop_types_1.default.string
};
