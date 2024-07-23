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
const lodash_isempty_1 = __importDefault(require("lodash.isempty"));
const prop_types_1 = __importDefault(require("prop-types"));
const ui_box_1 = __importDefault(require("ui-box"));
const constants_1 = require("../../constants");
const form_field_1 = require("../../form-field");
const hooks_1 = require("../../hooks");
const icons_1 = require("../../icons");
const array_to_csv_1 = __importDefault(require("../../lib/array-to-csv"));
const is_function_1 = __importDefault(require("../../lib/is-function"));
const safe_invoke_1 = __importDefault(require("../../lib/safe-invoke"));
const scales_1 = require("../../scales");
const theme_1 = require("../../theme");
const BrowseOrDragText_1 = __importDefault(require("./BrowseOrDragText"));
const FileCard_1 = __importDefault(require("./FileCard"));
const get_file_data_transfer_items_1 = __importDefault(require("./utils/get-file-data-transfer-items"));
const messages_1 = require("./utils/messages");
const split_files_1 = __importDefault(require("./utils/split-files"));
const UploaderState = {
    Initial: 'initial',
    Dragging: 'dragging',
    Error: 'error'
};
const disabledPseudoSelector = `&[aria-disabled='true']`;
const dragHoverPseudoSelector = `&[data-state='${UploaderState.Dragging}']`;
const invalidPseudoSelector = `&[aria-invalid='true']`;
const hoverPseudoSelector = `&:hover:not(${disabledPseudoSelector}):not(${dragHoverPseudoSelector}):not(${invalidPseudoSelector})`;
const hoverBrowseCopyPseudoSelector = `${hoverPseudoSelector} span:first-of-type`;
const styleModifiers = {};
const pseudoSelectors = {
    _focus: '&:focus',
    _hover: hoverPseudoSelector,
    _hoverBrowseCopy: hoverBrowseCopyPseudoSelector,
    _hoverOrDragCopy: `${hoverPseudoSelector} span:last-of-type:not(${hoverBrowseCopyPseudoSelector})`,
    _dragHover: dragHoverPseudoSelector,
    _disabled: disabledPseudoSelector,
    _invalid: invalidPseudoSelector
};
const internalStyles = {};
const FileUploader = (0, react_1.memo)((0, react_1.forwardRef)((props, ref) => {
    const { acceptedMimeTypes, browseOrDragText, dragMaxFilesMessage = messages_1.getMaxFilesMessage, description, disabled = false, hint, isRequired, label, labelFor, maxFiles, maxSizeInBytes, onAccepted, onChange, onRejected, onRemove, renderFile, validationMessage: validationMessageProp, values } = props, rest = __rest(props, ["acceptedMimeTypes", "browseOrDragText", "dragMaxFilesMessage", "description", "disabled", "hint", "isRequired", "label", "labelFor", "maxFiles", "maxSizeInBytes", "onAccepted", "onChange", "onRejected", "onRemove", "renderFile", "validationMessage", "values"]);
    const { colors } = (0, theme_1.useTheme)();
    const themedProps = (0, hooks_1.useStyleConfig)('FileUploader', styleModifiers, pseudoSelectors, internalStyles);
    const [state, setState] = (0, react_1.useState)(UploaderState.Initial);
    const [validationMessage, setValidationMessage] = (0, react_1.useState)('');
    /**
     * The underlying <input type="file" /> DOM element won't accept the same file after it has been
     * picked unless it is rerendered manually - if a user selects and removes a file, they should
     * still be able to pick it again without refreshing the page.
     * https://stackoverflow.com/a/45846251
     */
    const [fileInputKey, setFileInputKey] = (0, react_1.useState)(0);
    const fileInputRef = (0, react_1.useRef)(null);
    // If the dropzone is meant to be a single file input and we already have a file, don't render
    // the dropzone which will always result in rejected files/errors.
    const renderDropzone = maxFiles !== 1 || (0, lodash_isempty_1.default)(values);
    const resetState = (0, react_1.useCallback)(() => {
        setState(UploaderState.Initial);
        setValidationMessage('');
    }, []);
    const handleChange = (0, react_1.useCallback)(
    /**
     * @param {FileList} fileList
     */
    fileList => {
        setFileInputKey(prev => prev + 1);
        if ((0, lodash_isempty_1.default)(fileList)) {
            (0, safe_invoke_1.default)(onChange, []);
            return;
        }
        const files = [...fileList];
        (0, safe_invoke_1.default)(onChange, files);
        const { accepted, rejected } = (0, split_files_1.default)(files, {
            maxSizeInBytes,
            acceptedMimeTypes,
            currentFileCount: values === null || values === void 0 ? void 0 : values.length,
            maxFiles
        });
        if (!(0, lodash_isempty_1.default)(accepted)) {
            (0, safe_invoke_1.default)(onAccepted, accepted);
        }
        if (!(0, lodash_isempty_1.default)(rejected)) {
            (0, safe_invoke_1.default)(onRejected, rejected);
        }
    }, [acceptedMimeTypes, maxFiles, maxSizeInBytes, onAccepted, onChange, onRejected, values === null || values === void 0 ? void 0 : values.length]);
    const handleClick = (0, react_1.useCallback)(() => {
        if (disabled) {
            return;
        }
        if (fileInputRef.current == null) {
            return;
        }
        fileInputRef.current.click();
    }, [disabled]);
    const handleDragOver = (0, react_1.useCallback)(
    /**
     * @param {React.DragEvent<HTMLDivElement>} event
     */
    event => {
        event.preventDefault();
        event.stopPropagation();
        event.dataTransfer.dropEffect = 'copy';
        if (disabled) {
            return;
        }
        const dragItems = (0, get_file_data_transfer_items_1.default)(event.dataTransfer.items);
        const { length: draggingCount } = dragItems;
        const { length: currentCount } = values !== null && values !== void 0 ? values : [];
        if (maxFiles == null || maxFiles < 0) {
            setState(UploaderState.Dragging);
            return;
        }
        if (draggingCount > maxFiles || draggingCount + currentCount > maxFiles) {
            setValidationMessage(dragMaxFilesMessage(maxFiles));
            setState(UploaderState.Error);
            return;
        }
        setState(UploaderState.Dragging);
    }, [disabled, dragMaxFilesMessage, maxFiles, values]);
    const handleDragLeave = (0, react_1.useCallback)(() => resetState(), [resetState]);
    const handleDrop = (0, react_1.useCallback)(
    /**
     * @param {React.DragEvent<HTMLDivElement>} event
     */
    event => {
        event.preventDefault();
        event.stopPropagation();
        if (disabled) {
            return;
        }
        resetState();
        handleChange(event.dataTransfer.files);
    }, [disabled, handleChange, resetState]);
    const handleInputChange = (0, react_1.useCallback)(
    /**
     * @param {React.ChangeEvent<HTMLInputElement>} event
     */
    event => {
        // Theoretically the input should not be accessible at all when disabled,
        // but this should act as a safeguard
        if (disabled) {
            return;
        }
        handleChange(event.target.files);
    }, [disabled, handleChange]);
    const handleKeyDown = (0, react_1.useCallback)(
    /**
     * @param {React.KeyboardEvent<HTMLDivElement>} event
     */
    event => {
        if (event.key !== constants_1.Key.Enter && event.key !== constants_1.Key.Space) {
            return;
        }
        event.preventDefault();
        handleClick();
    }, [handleClick]);
    return (react_1.default.createElement(ui_box_1.default, { ref: ref },
        react_1.default.createElement(form_field_1.FormField, { label: label, labelFor: labelFor, description: description, hint: hint, isRequired: isRequired, 
            // Always override the validationMessage from prop if we have a message to display from dragging
            validationMessage: !(0, lodash_isempty_1.default)(validationMessage) ? validationMessage : validationMessageProp }, renderDropzone && (react_1.default.createElement(ui_box_1.default, Object.assign({ "aria-disabled": disabled, "aria-invalid": state === UploaderState.Error, "data-state": state, onClick: handleClick, onDragLeave: handleDragLeave, onDragOver: handleDragOver, onDrop: handleDrop, onKeyDown: handleKeyDown, tabIndex: disabled ? undefined : 0 }, themedProps, rest),
            react_1.default.createElement(ui_box_1.default, { accept: (0, array_to_csv_1.default)(acceptedMimeTypes), display: "none", is: "input", tabIndex: -1, key: fileInputKey, multiple: maxFiles !== 1, onChange: handleInputChange, ref: fileInputRef, type: "file" }),
            react_1.default.createElement(ui_box_1.default, { alignItems: "center", backgroundColor: disabled ? colors.gray90 : colors.gray200, borderRadius: "50%", display: "flex", height: (0, scales_1.majorScale)(7), justifyContent: "center", pointerEvents: "none", width: (0, scales_1.majorScale)(7) },
                react_1.default.createElement(icons_1.UploadIcon, { color: disabled ? colors.gray400 : colors.gray500, size: (0, scales_1.majorScale)(3) })),
            react_1.default.createElement(BrowseOrDragText_1.default, { disabled: disabled, maxFiles: maxFiles, browseOrDragText: browseOrDragText })))),
        react_1.default.createElement(ui_box_1.default, { marginTop: (0, scales_1.majorScale)(2) }, values === null || values === void 0 ? void 0 : values.map(
        /**
         * @param {File} file
         * @param {number} index
         */
        (file, index) => (0, is_function_1.default)(renderFile) ? (renderFile(file, index)) : (react_1.default.createElement(FileCard_1.default, { key: `${file.name}-${index}`, name: file.name, onRemove: (0, is_function_1.default)(onRemove) ? () => onRemove(file) : undefined, sizeInBytes: file.size, type: file.type }))))));
}));
FileUploader.propTypes = Object.assign(Object.assign({}, form_field_1.FormField.propTypes), { 
    /**
     * MIME types (not file extensions) to accept
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
     */
    acceptedMimeTypes: prop_types_1.default.array, 
    /**
     * Function to return a string or component for the 'Browse or drag' text
     * @type {(maxFiles: number) => React.ReactNode}
     */
    browseOrDragText: prop_types_1.default.func, 
    /**
     * When true, displays a disabled state where drops don't fire and the native browser picker doesn't open
     */
    disabled: prop_types_1.default.bool, 
    /**
     * Function to return a string when the max file limit has been hit while dragging
     * @default You can upload up to {count} {file|files}.
     * @type {(maxFiles: number) => string}
     */
    dragMaxFilesMessage: prop_types_1.default.func, 
    /**
     * Maximum number of files to accept
     */
    maxFiles: prop_types_1.default.number, 
    /**
     * Maximum size of an **individual** file to accept
     */
    maxSizeInBytes: prop_types_1.default.number, 
    /**
     * Callback for when files are accepted via drop or the native browser picker
     * @type {(files: File[]) => void}
     */
    onAccepted: prop_types_1.default.func, 
    /**
     * Callback for when files are added via drop or the native browser picker, which includes both
     * the accepted and rejected files
     * @type {(files: File[]) => void}
     */
    onChange: prop_types_1.default.func, 
    /**
     * Callback for when files are rejected via drop or the native browser picker
     * @type {(fileRejections: FileRejection[]) => void}
     */
    onRejected: prop_types_1.default.func, 
    /**
     * Callback to fire when a file should be removed
     * @type {(file: File) => void}
     */
    onRemove: prop_types_1.default.func, 
    /**
     * Custom render function for displaying the file underneath the uploader
     * @type {(file: File, index: number) => React.ReactNode}
     */
    renderFile: prop_types_1.default.func, 
    /**
     * File values to render underneath the uploader
     * @type {File}
     */
    values: prop_types_1.default.array });
exports.default = FileUploader;
