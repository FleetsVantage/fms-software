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
exports.CLASS_PREFIX = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const ui_box_1 = __importDefault(require("ui-box"));
const buttons_1 = require("../../buttons");
const safe_invoke_1 = __importDefault(require("../../lib/safe-invoke"));
const text_input_1 = require("../../text-input");
exports.CLASS_PREFIX = 'evergreen-file-picker';
const ROOT_CLASS_NAME = `${exports.CLASS_PREFIX}-root`;
const getBrowseOrReplaceText = fileCount => {
    const action = fileCount === 0 ? 'Select' : 'Replace';
    const fileLabel = fileCount > 1 ? 'files' : 'file';
    return `${action} ${fileLabel}`;
};
const getInputValue = files => {
    if (files.length === 1) {
        return files[0].name;
    }
    if (files.length > 1) {
        return `${files.length} files`;
    }
    return '';
};
const FilePicker = (0, react_1.memo)((0, react_1.forwardRef)(function FilePicker(props, ref) {
    const { accept, browseOrReplaceText = getBrowseOrReplaceText, capture, className, disabled, height = 32, inputText = getInputValue, multiple, name, onBlur, onChange, placeholder = 'Select a file to upload…', required } = props, rest = __rest(props, ["accept", "browseOrReplaceText", "capture", "className", "disabled", "height", "inputText", "multiple", "name", "onBlur", "onChange", "placeholder", "required"]);
    const [files, setFiles] = (0, react_1.useState)([]);
    const fileInputRef = (0, react_1.useRef)();
    const handleFileChange = (0, react_1.useCallback)(e => {
        // Firefox returns the same array instance each time for some reason
        const filesCopy = [...e.target.files];
        setFiles(filesCopy);
        (0, safe_invoke_1.default)(onChange, filesCopy);
    }, [onChange]);
    const handleButtonClick = (0, react_1.useCallback)(() => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }, []);
    const handleBlur = (0, react_1.useCallback)(e => {
        // Setting e.target.files to an array fails. It must be a FileList
        if (e && e.target) {
            e.target.files = fileInputRef.current && fileInputRef.current.files;
        }
        (0, safe_invoke_1.default)(onBlur, e);
    }, [onBlur]);
    const rootClassNames = className ? `${ROOT_CLASS_NAME} ${className}` : ROOT_CLASS_NAME;
    return (react_1.default.createElement(ui_box_1.default, Object.assign({ display: "flex", className: rootClassNames, ref: ref }, rest),
        react_1.default.createElement(ui_box_1.default, { ref: fileInputRef, className: `${exports.CLASS_PREFIX}-file-input`, is: "input", type: "file", name: name, accept: accept, required: required, multiple: multiple, disabled: disabled, capture: capture, onChange: handleFileChange, display: "none" }),
        react_1.default.createElement(text_input_1.TextInput, { className: `${exports.CLASS_PREFIX}-text-input`, readOnly: true, value: inputText(files), placeholder: placeholder, 
            // There's a weird specifity issue when there's two differently sized inputs on the page
            borderTopRightRadius: "0 !important", borderBottomRightRadius: "0 !important", height: height, flex: 1, textOverflow: "ellipsis", onBlur: handleBlur }),
        react_1.default.createElement(buttons_1.Button, { className: `${exports.CLASS_PREFIX}-button`, onClick: handleButtonClick, disabled: disabled, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, marginLeft: -1, height: height, flexShrink: 0, type: "button", onBlur: handleBlur }, browseOrReplaceText(files.length))));
}));
FilePicker.propTypes = {
    /**
     * Name attribute of the input.
     */
    name: prop_types_1.default.string,
    /**
     * The accept attribute of the input.
     */
    accept: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.arrayOf(prop_types_1.default.string)]),
    /**
     * When true, the file picker is required.
     */
    required: prop_types_1.default.bool,
    /**
     * When true, accept multiple files.
     */
    multiple: prop_types_1.default.bool,
    /**
     * When true, the filepicker is disabled.
     */
    disabled: prop_types_1.default.bool,
    /**
     * The capture attribute of the input.
     */
    capture: prop_types_1.default.bool,
    /**
     * The height of the file picker.
     */
    height: prop_types_1.default.number,
    /**
     * Function called when onChange is fired.
     * (files: FileList) => void
     */
    onChange: prop_types_1.default.func,
    /**
     * Function called when onBlur is fired.
     * (event: React.FocusEvent) => void
     */
    onBlur: prop_types_1.default.func,
    /**
     * Placeholder of the text input
     */
    placeholder: prop_types_1.default.string,
    /**
     * Class name passed to the FilePicker.
     * Only use this if you know what you are doing.
     */
    className: prop_types_1.default.string,
    /**
     * Function that returns the call-to-action button text for selecting files.
     * @type {(fileCount: number) => string}
     */
    browseOrReplaceText: prop_types_1.default.func,
    /**
     * Function that returns the text in the input field.
     * @type {(files: File[]) => string}
     */
    inputText: prop_types_1.default.func
};
exports.default = FilePicker;
