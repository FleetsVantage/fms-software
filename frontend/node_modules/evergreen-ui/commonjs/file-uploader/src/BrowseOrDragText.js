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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const is_function_1 = __importDefault(require("../../lib/is-function"));
const scales_1 = require("../../scales");
const theme_1 = require("../../theme");
const typography_1 = require("../../typography");
const internalStyles = {
    marginTop: (0, scales_1.majorScale)(3),
    pointerEvents: 'none'
};
const BrowseOrDragText = props => {
    const { browseOrDragText: getBrowseOrDragText, disabled, maxFiles } = props;
    const defaultOrDragCopy = `or drag ${maxFiles === 1 ? 'a file' : 'files'} here`;
    const { colors } = (0, theme_1.useTheme)();
    const ctaTextColor = disabled ? colors.gray500 : colors.blue400;
    if (!(0, is_function_1.default)(getBrowseOrDragText)) {
        return (react_1.default.createElement(typography_1.Paragraph, Object.assign({}, internalStyles),
            react_1.default.createElement(typography_1.Text, { color: ctaTextColor }, "Browse "),
            react_1.default.createElement(typography_1.Text, { color: disabled ? colors.gray500 : colors.gray700 }, defaultOrDragCopy)));
    }
    const browseOrDragText = getBrowseOrDragText(maxFiles);
    if (typeof browseOrDragText === 'string') {
        return (react_1.default.createElement(typography_1.Paragraph, Object.assign({}, internalStyles),
            react_1.default.createElement(typography_1.Text, { color: ctaTextColor }, browseOrDragText)));
    }
    return browseOrDragText;
};
BrowseOrDragText.propTypes = {
    /**
     * Function to return a string or component for the 'Browse or drag' text
     * @type {(maxFiles: number) => React.ReactNode}
     */
    browseOrDragText: prop_types_1.default.func,
    /**
     * Renders the text in a muted color
     */
    disabled: prop_types_1.default.bool,
    /**
     * Maximum number of files to accept
     */
    maxFiles: prop_types_1.default.number
};
exports.default = (0, react_1.memo)(BrowseOrDragText);
