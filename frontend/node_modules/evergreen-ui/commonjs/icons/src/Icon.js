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
const pseudoSelectors = {};
const internalStyles = {};
const Icon = (0, react_1.forwardRef)(function Icon(_a, ref) {
    var { className, color = 'currentColor', name, size = 16, svgPaths16, svgPaths20, title } = _a, svgProps = __rest(_a, ["className", "color", "name", "size", "svgPaths16", "svgPaths20", "title"]);
    const themedProps = (0, hooks_1.useStyleConfig)('Icon', { color }, pseudoSelectors, internalStyles);
    const SIZE_STANDARD = 16;
    const SIZE_LARGE = 20;
    // Choose which pixel grid is most appropriate for given icon size
    const pixelGridSize = size >= SIZE_LARGE ? SIZE_LARGE : SIZE_STANDARD;
    const pathStrings = pixelGridSize === SIZE_STANDARD ? svgPaths16 : svgPaths20;
    const paths = pathStrings.map((d, i) => (
    // eslint-disable-next-line react/no-array-index-key
    react_1.default.createElement("path", { key: i, d: d, fillRule: "evenodd" })));
    const viewBox = `0 0 ${pixelGridSize} ${pixelGridSize}`;
    return (react_1.default.createElement(ui_box_1.default, Object.assign({ is: "svg", ref: ref, className: className }, themedProps, svgProps, { "data-icon": name, width: size, height: size, viewBox: viewBox }),
        title && react_1.default.createElement("title", null, title),
        paths));
});
Icon.propTypes = {
    /**
     * Class name passed to the component.
     * Only use if you know what you are doing.
     */
    className: prop_types_1.default.string,
    /**
     * Color of icon. Equivalent to setting CSS `fill` property.
     */
    color: prop_types_1.default.string,
    /**
     * Size of the icon, in pixels.
     * Blueprint contains 16px and 20px SVG icon images,
     * and chooses the appropriate resolution based on this prop.
     */
    size: prop_types_1.default.number,
    /**
     * Name of the icon
     */
    name: prop_types_1.default.string,
    /**
     * Description string.
     * Browsers usually render this as a tooltip on hover, whereas screen
     * readers will use it for aural feedback.
     * By default, this is set to the icon's name for accessibility.
     */
    title: prop_types_1.default.string,
    svgPaths16: prop_types_1.default.arrayOf(prop_types_1.default.string).isRequired,
    svgPaths20: prop_types_1.default.arrayOf(prop_types_1.default.string).isRequired
};
exports.default = Icon;
