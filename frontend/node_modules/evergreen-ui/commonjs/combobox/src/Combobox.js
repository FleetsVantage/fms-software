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
const ui_box_1 = require("ui-box");
const autocomplete_1 = require("../../autocomplete");
const buttons_1 = require("../../buttons");
const group_1 = require("../../group");
const icons_1 = require("../../icons");
const text_input_1 = require("../../text-input");
const Combobox = (0, react_1.memo)(function Combobox(props) {
    const { autocompleteProps, buttonProps, height, initialSelectedItem, inputProps, isLoading = false, itemToString, items, onChange, openOnFocus = false, placeholder, selectedItem, size = 'medium', width = 240 } = props, rest = __rest(props, ["autocompleteProps", "buttonProps", "height", "initialSelectedItem", "inputProps", "isLoading", "itemToString", "items", "onChange", "openOnFocus", "placeholder", "selectedItem", "size", "width"]);
    const disabled = props.disabled || isLoading;
    const [isOpenedByButton, setIsOpenedByButton] = (0, react_1.useState)(false);
    const handleStateChange = (0, react_1.useCallback)((changes, stateAndHelpers) => {
        if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
            if (!changes.isOpen) {
                setIsOpenedByButton(false);
            }
        }
        if (autocompleteProps && typeof autocompleteProps.onStateChange === 'function') {
            autocompleteProps.onStateChange(changes, stateAndHelpers);
        }
    }, [autocompleteProps]);
    return (react_1.default.createElement(autocomplete_1.Autocomplete, Object.assign({ items: items, selectedItem: selectedItem, initialSelectedItem: initialSelectedItem, itemToString: itemToString, onChange: onChange, isFilterDisabled: isOpenedByButton }, autocompleteProps, { onStateChange: handleStateChange }), ({ clearSelection, getInputProps, getRef, getToggleButtonProps, inputValue, isShown, openMenu }) => (react_1.default.createElement(group_1.Group, Object.assign({ ref: getRef, size: size, width: width }, rest),
        react_1.default.createElement(text_input_1.TextInput, Object.assign({ width: 0, flex: 1, height: height, value: inputValue, borderTopRightRadius: 0, borderBottomRightRadius: 0, disabled: disabled }, getInputProps(Object.assign(Object.assign({}, inputProps), { placeholder, onFocus: () => {
                if (openOnFocus)
                    openMenu();
            }, onChange: e => {
                if (isOpenedByButton) {
                    setIsOpenedByButton(false);
                }
                if (e.target.value.trim() === '') {
                    // Prevent the selected item from sticking around
                    clearSelection();
                }
            } })))),
        react_1.default.createElement(buttons_1.IconButton, Object.assign({ color: "muted", icon: isLoading ? undefined : icons_1.CaretDownIcon, appearance: "default", height: height, marginTop: 0, marginBottom: 0, marginLeft: -1, paddingLeft: isLoading ? 12 : 0, paddingRight: 0, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, disabled: disabled, isLoading: isLoading }, getToggleButtonProps(Object.assign(Object.assign({}, buttonProps), { onClick: () => {
                if (!isShown) {
                    setIsOpenedByButton(true);
                }
            } }))))))));
});
Combobox.propTypes = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ui_box_1.dimensions.propTypes), ui_box_1.spacing.propTypes), ui_box_1.position.propTypes), ui_box_1.layout.propTypes), { 
    /**
     * The options to show in the menu.
     */
    items: prop_types_1.default.array.isRequired, 
    /**
     * The selected item when controlled.
     */
    selectedItem: prop_types_1.default.any, 
    /**
     * Function called when value changes.
     */
    onChange: prop_types_1.default.func, 
    /**
     * When true, open the autocomplete on focus.
     */
    openOnFocus: prop_types_1.default.bool, 
    /**
     * Default selected item when uncontrolled.
     */
    initialSelectedItem: prop_types_1.default.any, 
    /**
     * The placeholder text when there is no value present.
     */
    placeholder: prop_types_1.default.string, 
    /**
     * In case the array of items is not an array of strings,
     * this function is used on each item to return the string that will be shown on the filter
     */
    itemToString: prop_types_1.default.func, 
    /**
     * Properties forwarded to the input. Use with caution.
     */
    inputProps: prop_types_1.default.object, 
    /**
     * Properties forwarded to the button. Use with caution.
     */
    buttonProps: prop_types_1.default.object, 
    /**
     * Properties forwarded to the autocomplete component. Use with caution.
     */
    autocompleteProps: prop_types_1.default.object, 
    /**
     * Makes the input element disabled.
     */
    disabled: prop_types_1.default.bool, 
    /**
     * When true, show a loading spinner. This also disables the button.
     */
    isLoading: prop_types_1.default.bool, size: prop_types_1.default.oneOf(['small', 'medium', 'large']) });
exports.default = Combobox;
