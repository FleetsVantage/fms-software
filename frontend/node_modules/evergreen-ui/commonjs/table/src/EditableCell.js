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
const hooks_1 = require("../../hooks");
const safe_invoke_1 = __importDefault(require("../../lib/safe-invoke"));
const portal_1 = require("../../portal");
const stack_1 = require("../../stack");
const EditableCellField_1 = __importDefault(require("./EditableCellField"));
const TableCell_1 = __importDefault(require("./TableCell"));
const TextTableCell_1 = __importDefault(require("./TextTableCell"));
const emptyProps = {};
const EditableCell = (0, react_1.memo)(function EditableCell(props) {
    const { children, size = 300, disabled, placeholder, isSelectable = true, textProps = emptyProps, autoFocus = false, onChange } = props, rest = __rest(props, ["children", "size", "disabled", "placeholder", "isSelectable", "textProps", "autoFocus", "onChange"]);
    let cursor = 'text';
    const mainRef = (0, react_1.useRef)(null);
    const [value, setValue] = (0, react_1.useState)(children);
    const [isEditing, setIsEditing] = (0, react_1.useState)(autoFocus);
    const onChangeRef = (0, hooks_1.useLatest)(onChange);
    (0, react_1.useEffect)(() => {
        setValue(children);
    }, [children]);
    const handleDoubleClick = (0, react_1.useCallback)(() => {
        if (disabled || !isSelectable)
            return;
        setIsEditing(true);
    }, [disabled, isSelectable]);
    const handleKeyDown = (0, react_1.useCallback)(e => {
        if (disabled)
            return;
        const { key } = e;
        /**
         * When the user presses a character on the keyboard, use that character
         * as the value in the text field.
         */
        if (key === 'Enter' || key === 'Shift') {
            setIsEditing(true);
        }
        else if (key.match(/^[a-z]{0,10}$/) && !e.metaKey && !e.ctrlKey && !e.altKey) {
            setIsEditing(true);
            setValue(prev => prev + key);
        }
    }, [disabled]);
    const handleFieldChangeComplete = (0, react_1.useCallback)(value => {
        setIsEditing(false);
        setValue(value);
        (0, safe_invoke_1.default)(onChangeRef.current, value);
        if (mainRef.current && isSelectable) {
            mainRef.current.focus();
        }
    }, 
    // onChangeRef is a ref
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isSelectable]);
    const handleFieldCancel = (0, react_1.useCallback)(() => {
        setIsEditing(false);
    }, []);
    const handleClick = (0, react_1.useCallback)(() => {
        if (mainRef.current) {
            mainRef.current.focus();
        }
    }, []);
    const getTargetRef = (0, react_1.useCallback)(() => mainRef.current, []);
    if (disabled) {
        cursor = 'not-allowed';
    }
    else if (isSelectable) {
        cursor = 'default';
    }
    const lessOpacity = (0, react_1.useMemo)(() => disabled || (!value && placeholder), [disabled, value, placeholder]);
    const mergedTextProps = (0, react_1.useMemo)(() => (Object.assign({ size, opacity: lessOpacity ? 0.5 : 1 }, textProps)), [lessOpacity, size, textProps]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(TextTableCell_1.default, Object.assign({ ref: mainRef, isSelectable: isSelectable, onClick: handleClick, onDoubleClick: handleDoubleClick, onKeyDown: handleKeyDown, cursor: cursor, textProps: mergedTextProps }, rest), value || placeholder),
        isEditing && (react_1.default.createElement(portal_1.Portal, null,
            react_1.default.createElement(stack_1.Stack, null, zIndex => (react_1.default.createElement(EditableCellField_1.default, { zIndex: zIndex, getTargetRef: getTargetRef, value: value, onEscape: handleFieldCancel, onChangeComplete: handleFieldChangeComplete, onCancel: handleFieldCancel, size: size })))))));
});
EditableCell.propTypes = Object.assign(Object.assign({}, TableCell_1.default.propTypes), { 
    /*
     * Makes the TableCell focusable.
     * Will add tabIndex={-1 || this.props.tabIndex}.
     */
    isSelectable: prop_types_1.default.bool, 
    /**
     * When true, the cell can't be edited.
     */
    disabled: prop_types_1.default.bool, 
    /**
     * Optional placeholder when children is falsy.
     */
    placeholder: prop_types_1.default.node, 
    /**
     * The size used for the TextTableCell and Textarea.
     */
    size: prop_types_1.default.oneOf([300, 400]), 
    /**
     * This is the value of the cell.
     */
    children: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]), 
    /**
     * Function called when value changes. (value: string) => void.
     */
    onChange: prop_types_1.default.func, 
    /**
     * When true, the cell will initialize in the editing state.
     */
    autoFocus: prop_types_1.default.bool });
exports.default = EditableCell;
