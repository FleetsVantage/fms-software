"use strict";
/**
 * @overview TagInput accepts multiple values that can be individually removed
 */
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
const lodash_omit_1 = __importDefault(require("lodash.omit"));
const prop_types_1 = __importDefault(require("prop-types"));
const ui_box_1 = __importDefault(require("ui-box"));
const autocomplete_1 = require("../../autocomplete");
const buttons_1 = require("../../buttons");
const hooks_1 = require("../../hooks");
const icons_1 = require("../../icons");
const safe_invoke_1 = __importDefault(require("../../lib/safe-invoke"));
const scales_1 = require("../../scales");
const text_input_1 = require("../../text-input");
const Tag_1 = __importDefault(require("./Tag"));
const GET_KEY_FOR_TAG_DELIMITER = {
    enter: 'Enter',
    space: ' '
};
const emptyProps = {};
const emptyArray = [];
const internalStyles = {
    alignItems: 'center',
    display: 'inline-flex',
    flexWrap: 'wrap',
    position: 'relative'
};
const pseudoSelectors = {
    _focused: '&[aria-activedescendant]',
    _disabled: '&[aria-disabled="true"]',
    _invalid: '&[aria-invalid="true"]:not(:focus)'
};
const TagInput = (0, react_1.memo)((0, react_1.forwardRef)(function TagInput(props, ref) {
    const { addOnBlur = false, disabled = false, height = 32, separator = /[,\n\r]/, values = emptyArray, tagSubmitKey = 'enter', tagProps = emptyProps, onAdd, onChange, onRemove, onBlur, onFocus, onInputChange, className, inputProps = emptyProps, inputRef, isInvalid, autocompleteItems } = props, rest = __rest(props, ["addOnBlur", "disabled", "height", "separator", "values", "tagSubmitKey", "tagProps", "onAdd", "onChange", "onRemove", "onBlur", "onFocus", "onInputChange", "className", "inputProps", "inputRef", "isInvalid", "autocompleteItems"]);
    const [inputValue, setInputValue] = (0, react_1.useState)('');
    const [isFocused, setIsFocused] = (0, react_1.useState)(false);
    const id = (0, hooks_1.useId)('TagInput');
    const autocompleteId = `TagInputAutocomplete-${values.length}`;
    const inputId = inputProps && inputProps.id ? inputProps.id : id;
    const hasAutocomplete = Array.isArray(autocompleteItems) && autocompleteItems.length > 0;
    const getValues = (inputValue = '') => {
        inputValue = inputValue || '';
        return separator
            ? inputValue
                .split(separator)
                .map(v => v.trim())
                .filter(v => v.length > 0)
            : [inputValue];
    };
    const addTags = (value = '') => {
        const newValues = getValues(value);
        let shouldClearInput = (0, safe_invoke_1.default)(onAdd, newValues);
        if (typeof onChange === 'function') {
            shouldClearInput = shouldClearInput || onChange(values.concat(newValues));
        }
        if (shouldClearInput !== false) {
            setInputValue('');
        }
    };
    const removeTagAtIndex = index => {
        (0, safe_invoke_1.default)(onRemove, values[index], index);
        // Remove item at index as a new array
        const newValues = values.filter((_, i) => i !== index);
        (0, safe_invoke_1.default)(onChange, newValues);
    };
    const handleBackspaceToRemove = () => {
        removeTagAtIndex(values.length - 1);
    };
    const handleBlur = event => {
        const container = event.target;
        requestAnimationFrame(() => {
            if (!container.contains(document.activeElement)) {
                if (addOnBlur && inputValue) {
                    addTags(inputValue);
                    setInputValue('');
                }
                setIsFocused(false);
            }
        });
        (0, safe_invoke_1.default)(onBlur, event);
    };
    const handleInputChange = event => {
        setInputValue(event.target.value);
        (0, safe_invoke_1.default)(onInputChange, event);
    };
    const handleInputFocus = event => {
        setIsFocused(true);
        (0, safe_invoke_1.default)(onFocus, event);
    };
    const handleKeyDown = event => {
        const { selectionEnd, value } = event.target;
        const key = GET_KEY_FOR_TAG_DELIMITER[tagSubmitKey];
        if (event.key === key) {
            event.preventDefault();
            addTags(value);
        }
        else if (event.key === 'Backspace' && selectionEnd === 0) {
            handleBackspaceToRemove(event);
        }
    };
    const handleRemoveTag = event => {
        // Using data attribute to simplify callback logic -- one handler for all children
        const index = Number(event.currentTarget.parentElement.getAttribute('data-tag-index'));
        removeTagAtIndex(index);
    };
    const maybeRenderTag = (tag, index) => {
        if (!tag) {
            return null;
        }
        const propsForElement = (0, safe_invoke_1.default)(tagProps, tag, index) || tagProps;
        return (react_1.default.createElement(Tag_1.default, Object.assign({ key: `${tag}:${index}`, "data-tag-index": index, marginX: (0, scales_1.majorScale)(1), marginY: (0, scales_1.minorScale)(1) * 1.5, onRemove: disabled ? null : handleRemoveTag, isRemovable: !disabled }, propsForElement), tag));
    };
    const themedProps = (0, hooks_1.useStyleConfig)('TagInput', { appearance: 'default', height }, pseudoSelectors, internalStyles);
    return (react_1.default.createElement(ui_box_1.default, Object.assign({ "aria-disabled": disabled || undefined, "aria-activedescendant": isFocused ? inputId : undefined, "aria-invalid": isInvalid, className: className, ref: ref, onBlur: handleBlur }, themedProps, rest, { paddingRight: hasAutocomplete ? (0, scales_1.majorScale)(3) : undefined }),
        react_1.default.createElement(ui_box_1.default, { flexGrow: "1", display: "inline-block" },
            react_1.default.createElement(autocomplete_1.Autocomplete, { onChange: changedItem => {
                    addTags(changedItem);
                    setInputValue('');
                }, items: hasAutocomplete ? autocompleteItems : [], id: autocompleteId, selectedItem: "", inputValue: inputValue }, autocompleteProps => {
                const { closeMenu, getInputProps, getRef: autocompleteGetRef, getToggleButtonProps, highlightedIndex } = autocompleteProps;
                const _a = getInputProps(), { onBlur: autocompleteOnBlur, onChange: autocompleteOnChange, onKeyDown: autocompleteKeyDown } = _a, autocompleteRestProps = __rest(_a, ["onBlur", "onChange", "onKeyDown"]);
                const handleAutocompleteKeydown = e => {
                    autocompleteKeyDown(e);
                    if (e.key === 'Backspace' || !(highlightedIndex > -1)) {
                        handleKeyDown(e);
                        if (e.key === GET_KEY_FOR_TAG_DELIMITER[tagSubmitKey]) {
                            closeMenu();
                            setInputValue('');
                        }
                    }
                    if (e.key === 'Backspace' && e.target.selectionEnd === 0) {
                        closeMenu();
                    }
                };
                return (react_1.default.createElement(ui_box_1.default, { display: "flex", ref: boxInputRef => {
                        autocompleteGetRef(boxInputRef);
                    }, flexWrap: "wrap", width: inputProps.width },
                    values.map(maybeRenderTag),
                    react_1.default.createElement(text_input_1.TextInput, Object.assign({ appearance: "none", disabled: disabled, height: height - 4, flexGrow: "1", type: "text" }, (0, lodash_omit_1.default)(inputProps, ['width']), autocompleteRestProps, { value: inputValue, id: inputId, ref: textInputRef => {
                            if (inputRef instanceof Function) {
                                inputRef(textInputRef);
                            }
                            else if (inputRef) {
                                inputRef.current = textInputRef;
                            }
                        }, onBlur: e => {
                            autocompleteOnBlur(e);
                            (0, safe_invoke_1.default)(inputProps.onBlur, e);
                        }, onFocus: e => {
                            handleInputFocus(e);
                            (0, safe_invoke_1.default)(inputProps.onFocus, e);
                        }, onChange: e => {
                            handleInputChange(e);
                            autocompleteOnChange(e);
                        }, onKeyDown: handleAutocompleteKeydown })),
                    hasAutocomplete && (react_1.default.createElement(buttons_1.Button, Object.assign({ appearance: "none", background: "gray100", position: "absolute", top: (0, scales_1.minorScale)(1) * 1.5, right: (0, scales_1.minorScale)(1), height: (0, scales_1.minorScale)(5), padding: 0, width: (0, scales_1.minorScale)(5), minWidth: (0, scales_1.minorScale)(5), display: "flex", alignItems: "center", justifyContent: "center", borderRadius: (0, scales_1.minorScale)(1), cursor: disabled ? undefined : 'pointer', "data-testid": "TagInput-autocomplete-toggle" }, getToggleButtonProps()),
                        react_1.default.createElement(icons_1.CaretDownIcon, { color: "muted" })))));
            }))));
}));
TagInput.propTypes = {
    /** Whether or not the inputValue should be added to the tags when the input blurs. */
    addOnBlur: prop_types_1.default.bool,
    /** Autocomplete options to show when typing in a new value */
    autocompleteItems: prop_types_1.default.array,
    /** The class name to apply to the container component. */
    className: prop_types_1.default.string,
    /** Whether or not the input should be disabled. */
    disabled: prop_types_1.default.bool,
    /** Whether or not the input is invalid. */
    isInvalid: prop_types_1.default.bool,
    /** The vertical size of the input */
    height: prop_types_1.default.number,
    /** Props to pass to the input component. Note that `ref` and `key` are not supported. See `inputRef`. */
    inputProps: prop_types_1.default.object,
    /**
     * Ref handler for the input element.
     * (input: HTMLInputElement | null) => void
     */
    inputRef: prop_types_1.default.func,
    /**
     * Callback invoked when new tags are added.
     * Returning `false` will prevent clearing the input.
     * (values: Array) => void | false
     */
    onAdd: prop_types_1.default.func,
    /**
     * Callback invoked when focus on the input blurs.
     * (event) => void
     */
    onBlur: prop_types_1.default.func,
    /**
     * Callback invoked when the tag values change.
     * Returning `false` will prevent clearing the input.
     * (values: Array) => void | false
     */
    onChange: prop_types_1.default.func,
    /**
     * Callback invoked when the input receives focus.
     * (event) => void
     */
    onFocus: prop_types_1.default.func,
    /**
     * Callback invoked when the value of the input is changed. Shorthand for `inputProps={{ onChange }}`.
     * (event) => void
     */
    onInputChange: prop_types_1.default.func,
    /**
     * Callback invoked when a tag is removed.
     * Receives value and index of removed tag.
     * (value: string | node, index: number) => void
     */
    onRemove: prop_types_1.default.func,
    /** Value or RegExp to split on pasted text or on enter keypress */
    separator: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.instanceOf(RegExp), prop_types_1.default.oneOf([false])]),
    /** Provide props to tag component (actually `Badge`, for now). */
    tagProps: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.func]),
    /** Key to press in order to submit a new tag while typing.  */
    tagSubmitKey: prop_types_1.default.oneOf(['enter', 'space']),
    /** Controlled tag values. Each value is rendered inside a tag. */
    values: prop_types_1.default.arrayOf(prop_types_1.default.node)
};
exports.default = TagInput;
