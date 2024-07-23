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
const hooks_1 = require("../../hooks");
const textarea_1 = require("../../textarea");
function getTableBodyRef(currentRef) {
    let ref = currentRef;
    if (!ref)
        return;
    while (ref) {
        const isTableBody = ref.hasAttribute('data-evergreen-table-body');
        if (isTableBody) {
            return ref;
        }
        if (ref.parentElement) {
            ref = ref.parentElement;
        }
        else {
            return null;
        }
    }
    return ref;
}
const EditableCellField = (0, react_1.memo)(function EditableCellField(props) {
    const { minHeight = 40, minWidth = 80, size, value, zIndex } = props;
    const latestAnimationFrame = (0, react_1.useRef)();
    const textareaRef = (0, react_1.useRef)();
    const tableBodyRef = (0, react_1.useRef)();
    const onCancelRef = (0, hooks_1.useLatest)(props.onCancel);
    const onChangeCompleteRef = (0, hooks_1.useLatest)(props.onChangeComplete);
    const getTargetRef = (0, hooks_1.useLatest)(props.getTargetRef);
    const [height, setHeight] = (0, react_1.useState)(0);
    const [width, setWidth] = (0, react_1.useState)(0);
    const [left, setLeft] = (0, react_1.useState)(0);
    const [top, setTop] = (0, react_1.useState)(0);
    const update = (0, react_1.useCallback)(() => {
        function updater() {
            const targetRef = getTargetRef.current();
            if (!targetRef)
                return;
            tableBodyRef.current = getTableBodyRef(targetRef);
            const { height: targetHeight, left: targetLeft, top: targetTop, width: targetWidth } = targetRef.getBoundingClientRect();
            let calculatedTop;
            if (tableBodyRef.current) {
                const bounds = tableBodyRef.current.getBoundingClientRect();
                calculatedTop = Math.min(Math.max(targetTop, bounds.top), bounds.bottom - targetHeight);
            }
            else {
                calculatedTop = targetTop;
            }
            setHeight(targetHeight);
            setWidth(targetWidth);
            setLeft(targetLeft);
            setTop(calculatedTop);
            // recursively run the updater
            latestAnimationFrame.current = requestAnimationFrame(() => updater());
        }
        // kick off the updater
        updater();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Mirrors functionality of componentDidMount and componentWillUnmount.
    // Focus on mount
    (0, react_1.useLayoutEffect)(() => {
        update();
        const requestId = requestAnimationFrame(() => {
            if (textareaRef.current) {
                textareaRef.current.focus();
            }
        });
        return () => {
            cancelAnimationFrame(requestId);
            if (latestAnimationFrame.current) {
                cancelAnimationFrame(latestAnimationFrame.current);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
            onCancelRef.current();
        };
        // we only want `update` to run once, and `onCancelRef` is a ref
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleFocus = (0, react_1.useCallback)(e => {
        e.target.selectionStart = e.target.value.length;
    }, []);
    const handleBlur = (0, react_1.useCallback)(() => {
        if (textareaRef.current) {
            onChangeCompleteRef.current(textareaRef.current.value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleKeyDown = (0, react_1.useCallback)(e => {
        switch (e.key) {
            case 'Escape':
                onCancelRef.current();
                if (textareaRef.current)
                    textareaRef.current.blur();
                break;
            case 'Enter':
                if (textareaRef.current)
                    textareaRef.current.blur();
                e.preventDefault();
                break;
            case 'Tab':
                if (textareaRef.current)
                    textareaRef.current.blur();
                break;
            default:
                break;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const style = (0, react_1.useMemo)(() => ({
        left,
        top,
        height,
        minHeight: Math.max(height, minHeight),
        width,
        minWidth: Math.max(width, minWidth),
        zIndex
    }), [left, top, height, width, minHeight, minWidth, zIndex]);
    return (react_1.default.createElement(textarea_1.Textarea, { ref: textareaRef, onKeyDown: handleKeyDown, onBlur: handleBlur, onFocus: handleFocus, appearance: "editable-cell", size: size, style: style, height: null, width: null, minHeight: null, position: "fixed", defaultValue: value }));
});
EditableCellField.propTypes = {
    /**
     * Used as the defaultValue of the textarea.
     */
    value: prop_types_1.default.string.isRequired,
    /**
     * The z-index placed on the element.
     */
    zIndex: prop_types_1.default.number.isRequired,
    /**
     * Function to get the target ref of the parent.
     * Used to mirror the position.
     */
    getTargetRef: prop_types_1.default.func.isRequired,
    /**
     * Min width of the textarea.
     * The textarea can never be smaller than the cell.
     */
    minWidth: prop_types_1.default.number,
    /**
     * Min height of the textarea.
     * The textarea can never be smaller than the cell.
     */
    minHeight: prop_types_1.default.number,
    /**
     * Called when the textarea is blurred, pass the value back to the cell.
     */
    onChangeComplete: prop_types_1.default.func.isRequired,
    /**
     * Called when Escape is hit or componentWillUnmount.
     */
    onCancel: prop_types_1.default.func.isRequired,
    /**
     * Text size of the textarea.
     */
    size: prop_types_1.default.number
};
exports.default = EditableCellField;
