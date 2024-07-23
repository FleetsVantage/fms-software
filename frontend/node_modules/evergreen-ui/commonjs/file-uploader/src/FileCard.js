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
const humanize_plus_1 = __importDefault(require("humanize-plus"));
const prop_types_1 = __importDefault(require("prop-types"));
const ui_box_1 = __importDefault(require("ui-box"));
const buttons_1 = require("../../buttons");
const hooks_1 = require("../../hooks");
const icons_1 = require("../../icons");
const image_1 = require("../../image");
const layers_1 = require("../../layers");
const has_value_1 = __importDefault(require("../../lib/has-value"));
const is_function_1 = __importDefault(require("../../lib/is-function"));
const scales_1 = require("../../scales");
const spinner_1 = require("../../spinner");
const theme_1 = require("../../theme");
const typography_1 = require("../../typography");
const get_icon_from_type_1 = __importDefault(require("./utils/get-icon-from-type"));
const is_image_1 = __importDefault(require("./utils/is-image"));
const imageSize = (0, scales_1.majorScale)(5);
const styleModifiers = {};
const pseudoSelectors = {
    _invalid: `&[aria-invalid='true']`
};
const internalStyles = {};
const FileCard = (0, react_1.memo)((0, react_1.forwardRef)((props, ref) => {
    const { description, disabled = false, isInvalid = false, isLoading = false, name, onRemove, sizeInBytes, src, type, validationMessage } = props, rest = __rest(props, ["description", "disabled", "isInvalid", "isLoading", "name", "onRemove", "sizeInBytes", "src", "type", "validationMessage"]);
    const { colors } = (0, theme_1.useTheme)();
    const themedProps = (0, hooks_1.useStyleConfig)('FileCard', styleModifiers, pseudoSelectors, internalStyles);
    const FileTypeIcon = (0, get_icon_from_type_1.default)(type);
    const renderImage = (0, has_value_1.default)(src) && (0, is_image_1.default)(type);
    const renderInvalidIcon = !isLoading && isInvalid;
    const renderDefaultIcon = !isLoading && !isInvalid;
    return (react_1.default.createElement(ui_box_1.default, { ref: ref, display: "flex", flexDirection: "column", marginBottom: isInvalid ? (0, scales_1.majorScale)(1) : (0, scales_1.majorScale)(2) },
        react_1.default.createElement(ui_box_1.default, Object.assign({ "aria-invalid": isInvalid }, themedProps, rest),
            react_1.default.createElement(ui_box_1.default, { alignItems: "center", display: "flex", flexDirection: "row", width: "100%" },
                react_1.default.createElement(ui_box_1.default, { marginLeft: (0, scales_1.majorScale)(2), marginRight: (0, scales_1.majorScale)(1) }, renderImage ? (react_1.default.createElement(image_1.Image, { height: imageSize, src: src, width: imageSize })) : (react_1.default.createElement(layers_1.Card, { alignItems: "center", backgroundColor: isInvalid || isLoading ? undefined : colors.gray90, display: "flex", height: (0, scales_1.majorScale)(5), justifyContent: "center", width: (0, scales_1.majorScale)(5) },
                    isLoading && react_1.default.createElement(spinner_1.Spinner, { size: (0, scales_1.majorScale)(2) }),
                    renderInvalidIcon && react_1.default.createElement(icons_1.InfoSignIcon, { color: colors.red500, size: (0, scales_1.majorScale)(2) }),
                    renderDefaultIcon && react_1.default.createElement(FileTypeIcon, { color: colors.gray600, size: (0, scales_1.majorScale)(2) })))),
                react_1.default.createElement(ui_box_1.default, { display: "flex", flexDirection: "column", overflow: "hidden" },
                    react_1.default.createElement(typography_1.Paragraph, { color: colors.gray800, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, name),
                    react_1.default.createElement(typography_1.Paragraph, { color: colors.gray700, size: 300 }, (0, has_value_1.default)(description) ? description : humanize_plus_1.default.fileSize(sizeInBytes, 0))),
                (0, is_function_1.default)(onRemove) && (react_1.default.createElement(buttons_1.IconButton, { appearance: "minimal", disabled: disabled || isLoading, icon: icons_1.TrashIcon, onClick: onRemove, marginLeft: "auto", marginRight: (0, scales_1.majorScale)(2), type: "button" })))),
        (0, has_value_1.default)(validationMessage) && (react_1.default.createElement(typography_1.Paragraph, { color: colors.red500, size: "small" }, validationMessage))));
}));
FileCard.propTypes = {
    /**
     * Description to display under the file name. If not provided, defaults to the file size
     */
    description: prop_types_1.default.string,
    /**
     * Disables the button to remove the file
     */
    disabled: prop_types_1.default.bool,
    /**
     * When true, displays the card in an error state
     */
    isInvalid: prop_types_1.default.bool,
    /**
     * Sets a loading state on the card. If the remove button is rendered, it will be disabled
     */
    isLoading: prop_types_1.default.bool,
    /**
     * Name of the file to display
     */
    name: prop_types_1.default.string,
    /**
     * Callback to be fired when the remove button is clicked. If not provided, the button will not
     * render
     */
    onRemove: prop_types_1.default.func,
    /**
     * Size of the file
     */
    sizeInBytes: prop_types_1.default.number,
    /**
     * Url of the uploaded image
     */
    src: prop_types_1.default.string,
    /**
     * MimeType of the file to display, which controls what type of icon is rendered
     */
    type: prop_types_1.default.string,
    /**
     * Message to display underneath the card
     */
    validationMessage: prop_types_1.default.string
};
exports.default = FileCard;
