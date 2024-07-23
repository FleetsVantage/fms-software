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
const image_1 = require("../../image");
const typography_1 = require("../../typography");
const getInitials_1 = __importDefault(require("./utils/getInitials"));
const hash_1 = __importDefault(require("./utils/hash"));
const imageStyles = { objectFit: 'cover' };
const pseudoSelectors = {};
const internalStyles = {
    overflow: 'hidden',
    position: 'relative',
    display: 'inline-flex',
    flexShrink: 0,
    justifyContent: 'center'
};
const isObjectFitSupported = typeof document !== 'undefined' && 'objectFit' in document.documentElement.style;
const getAvatarInitialsFontSize = (size, sizeLimitOneCharacter) => {
    if (size <= sizeLimitOneCharacter) {
        return Math.floor(size / 2.2);
    }
    return Math.floor(size / 2.6);
};
const Avatar = (0, react_1.memo)((0, react_1.forwardRef)(function Avatar(props, ref) {
    const { className, color = 'automatic', forceShowInitials = false, getInitials = getInitials_1.default, hashValue: propsHashValue, name, shape = 'round', size = 24, sizeLimitOneCharacter = 20, src } = props, restProps = __rest(props, ["className", "color", "forceShowInitials", "getInitials", "hashValue", "name", "shape", "size", "sizeLimitOneCharacter", "src"]);
    const hashValue = (0, hash_1.default)(propsHashValue || name);
    const themedProps = (0, hooks_1.useStyleConfig)('Avatar', { color, hashValue, shape }, pseudoSelectors, internalStyles);
    const [imageHasFailedLoading, setImageHasFailedLoading] = (0, react_1.useState)(false);
    const onError = (0, react_1.useCallback)(() => setImageHasFailedLoading(true), []);
    const imageUnavailable = !src || imageHasFailedLoading;
    const initialsFontSize = `${getAvatarInitialsFontSize(size, sizeLimitOneCharacter)}px`;
    let initials = getInitials(name);
    if (size <= sizeLimitOneCharacter) {
        initials = initials.slice(0, 1);
    }
    return (react_1.default.createElement(ui_box_1.default, Object.assign({ width: size, height: size, title: name, ref: ref, className: className }, themedProps, restProps),
        (imageUnavailable || forceShowInitials) && (react_1.default.createElement(typography_1.Text, { top: 0, position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", fontSize: initialsFontSize, lineHeight: initialsFontSize, width: size, height: size, color: "inherit" }, initials)),
        !imageUnavailable && (react_1.default.createElement(image_1.Image, { style: imageStyles, width: isObjectFitSupported ? '100%' : 'auto', height: "100%", src: src, onError: onError }))));
}));
Avatar.propTypes = {
    /**
     * Class name passed to the component.
     * Only use if you know what you are doing.
     */
    className: prop_types_1.default.string,
    /**
     * The src attribute of the image.
     * When it's not available, render initials instead.
     */
    src: prop_types_1.default.string,
    /**
     * The size of the avatar.
     */
    size: prop_types_1.default.number,
    /**
     * The name used for the initials and title attribute.
     */
    name: prop_types_1.default.string,
    /**
     * The value used for the hash function.
     * The name is used as the hashValue by default.
     * When dealing with anonymous users you should use the id instead.
     */
    hashValue: prop_types_1.default.string,
    /**
     * The color used for the avatar.
     * When the value is `automatic`, use the hash function to determine the color.
     */
    color: prop_types_1.default.string,
    /**
     * Function to get the initials based on the name.
     */
    getInitials: prop_types_1.default.func,
    /**
     * When true, force show the initials.
     * This is useful in some cases when using Gravatar and transparent pngs.
     */
    forceShowInitials: prop_types_1.default.bool,
    /**
     * When the size is smaller than this number, use a single initial for the avatar.
     */
    sizeLimitOneCharacter: prop_types_1.default.number,
    /**
     * Allows for the shape of the avatar component to either be round or square
     */
    shape: prop_types_1.default.oneOf(['round', 'square'])
};
exports.default = Avatar;
