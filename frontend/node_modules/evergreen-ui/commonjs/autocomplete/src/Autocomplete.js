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
const react_tiny_virtual_list_1 = __importDefault(require("@segment/react-tiny-virtual-list"));
const downshift_1 = __importDefault(require("downshift"));
const fuzzaldrin_plus_1 = __importDefault(require("fuzzaldrin-plus"));
const prop_types_1 = __importDefault(require("prop-types"));
const constants_1 = require("../../constants");
const layers_1 = require("../../layers");
const popover_1 = require("../../popover");
const typography_1 = require("../../typography");
const AutocompleteItem_1 = __importDefault(require("./AutocompleteItem"));
const fuzzyFilter = itemToString => {
    if (itemToString) {
        return (items, input) => {
            const wrappedItems = items.map(item => ({
                key: itemToString(item),
                item
            }));
            return fuzzaldrin_plus_1.default.filter(wrappedItems, input, { key: 'key' }).map(({ item }) => item);
        };
    }
    return (items, input) => fuzzaldrin_plus_1.default.filter(items, input);
};
const noop = () => { };
const autocompleteItemRenderer = props => react_1.default.createElement(AutocompleteItem_1.default, Object.assign({}, props));
/* eslint-disable react/prop-types */
const AutocompleteItems = ({ getItemProps, getMenuProps, highlightedIndex, inputValue, isFilterDisabled, itemSize, itemToString, itemsFilter, originalItems, popoverMaxHeight, renderItem, selectedItem, title, width }) => {
    itemsFilter = itemsFilter || fuzzyFilter(itemToString);
    const items = isFilterDisabled || inputValue.trim() === '' ? originalItems : itemsFilter(originalItems, inputValue);
    if (items.length <= 0)
        return null;
    // Pass the actual DOM ref to downshift, this fixes touch support
    const menuProps = getMenuProps();
    return (react_1.default.createElement(layers_1.Pane, Object.assign({ width: width }, menuProps),
        title && (react_1.default.createElement(layers_1.Pane, { padding: 8, borderBottom: "muted" },
            react_1.default.createElement(typography_1.Text, { size: 300, textTransform: "uppercase" }, title))),
        react_1.default.createElement(react_tiny_virtual_list_1.default, { width: "100%", height: Math.min(items.length * itemSize, popoverMaxHeight), itemSize: itemSize, itemCount: items.length, scrollToIndex: highlightedIndex || 0, overscanCount: 3, scrollToAlignment: "auto", renderItem: ({ index, style }) => {
                const item = items[index];
                const itemString = itemToString(item);
                return renderItem(getItemProps({
                    item,
                    key: itemString,
                    index,
                    style,
                    children: itemString,
                    isSelected: itemToString(selectedItem) === itemString,
                    isHighlighted: highlightedIndex === index
                }));
            } })));
};
/* eslint-enable react/prop-types */
const containerStyle = { width: '100%' };
const Autocomplete = (0, react_1.memo)((0, react_1.forwardRef)(function Autocomplete(props, ref) {
    const { children, itemSize = 32, position, renderItem = autocompleteItemRenderer, isFilterDisabled = false, itemsFilter, itemToString = i => (i ? String(i) : ''), popoverMaxHeight = 240, popoverMinWidth = 240, allowOtherValues } = props, restProps = __rest(props, ["children", "itemSize", "position", "renderItem", "isFilterDisabled", "itemsFilter", "itemToString", "popoverMaxHeight", "popoverMinWidth", "allowOtherValues"]);
    const [targetWidth, setTargetWidth] = (0, react_1.useState)(0);
    const [targetRef, setTargetRef] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        const boundingWidth = targetRef === null || targetRef === void 0 ? void 0 : targetRef.getBoundingClientRect().width;
        setTargetWidth(boundingWidth);
    }, [targetRef, setTargetWidth, props.items.length, props.id]);
    const stateReducer = (0, react_1.useCallback)((state, changes) => {
        if (Object.prototype.hasOwnProperty.call(changes, 'isOpen') && changes.isOpen) {
            return Object.assign(Object.assign({}, changes), { highlightedIndex: props.items.indexOf(state.selectedItem) });
        }
        if (props.allowOtherValues && state.isOpen && !changes.isOpen) {
            return Object.assign(Object.assign({}, changes), { selectedItem: changes.selectedItem || state.inputValue, inputValue: changes.selectedItem || state.inputValue });
        }
        return changes;
    }, [props.items, props.allowOtherValues]);
    return (react_1.default.createElement(downshift_1.default, Object.assign({ stateReducer: stateReducer, scrollIntoView: noop, itemToString: itemToString, ref: ref }, restProps), (_a) => {
        var { getItemProps, getMenuProps, getRootProps, highlightedIndex, inputValue, isOpen: isShown, selectedItem } = _a, restDownshiftProps = __rest(_a, ["getItemProps", "getMenuProps", "getRootProps", "highlightedIndex", "inputValue", "isOpen", "selectedItem"]);
        return (react_1.default.createElement("div", { style: containerStyle },
            react_1.default.createElement(popover_1.Popover, { bringFocusInside: false, isShown: isShown, minWidth: popoverMinWidth, position: position || (targetWidth < popoverMinWidth ? constants_1.Position.BOTTOM_LEFT : constants_1.Position.BOTTOM), content: react_1.default.createElement(AutocompleteItems, { getItemProps: getItemProps, getMenuProps: getMenuProps, highlightedIndex: highlightedIndex, inputValue: inputValue, isFilterDisabled: isFilterDisabled, itemsFilter: itemsFilter, itemSize: itemSize, itemToString: itemToString, originalItems: props.items, popoverMaxHeight: popoverMaxHeight, renderItem: renderItem, selectedItem: selectedItem, title: props.title, width: Math.max(targetWidth, popoverMinWidth) }), minHeight: 0, animationDuration: 0 }, ({ getRef, isShown: isShownPopover, toggle }) => children(Object.assign({ isShown: isShownPopover, toggle, getRef: ref => {
                    // Use the ref internally to determine the width
                    setTargetRef(ref);
                    getRef(ref);
                }, inputValue,
                selectedItem,
                highlightedIndex }, restDownshiftProps)))));
    }));
}));
Autocomplete.propTypes = Object.assign({ 
    /**
     * This prop can be either a string or a Node.
     * It will provide a title for the items
     */
    title: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.node]), 
    /**
     * An array of items to be used as options for the select
     */
    items: prop_types_1.default.array.isRequired, 
    /**
     * The selected Item to be shown on the autocomplete
     */
    selectedItem: prop_types_1.default.any, 
    /**
     * In case the array of items is not an array of strings,
     * this function is used on each item to return the string that will be shown on the filter
     */
    itemToString: prop_types_1.default.func, 
    /**
     * Function that will render the 'filter' component.
     */
    children: prop_types_1.default.func.isRequired, 
    /**
     * The height of each item in the list
     * Because the list is virtualized this is required beforehand.
     */
    itemSize: prop_types_1.default.number, 
    /**
     * Function that returns a component to render the item
     */
    renderItem: prop_types_1.default.func, 
    /**
     * The position of the Popover the Autocomplete is rendered in.
     */
    position: prop_types_1.default.oneOf([
        constants_1.Position.TOP,
        constants_1.Position.TOP_LEFT,
        constants_1.Position.TOP_RIGHT,
        constants_1.Position.BOTTOM,
        constants_1.Position.BOTTOM_LEFT,
        constants_1.Position.BOTTOM_RIGHT,
        constants_1.Position.LEFT,
        constants_1.Position.RIGHT
    ]), 
    /**
     * A function that is used to filter the items.
     * It should return a subset of the initial items.
     * By default the "fuzzaldrin-plus" package is used.
     */
    itemsFilter: prop_types_1.default.func, 
    /**
     * Prop that enables and disables filtering
     * True: Enables Filtering
     * False: Disables Filtering
     */
    isFilterDisabled: prop_types_1.default.bool, 
    /**
     * Defines the minimum height the results container will be
     */
    popoverMinWidth: prop_types_1.default.number, 
    /**
     * Defines the maximum height the results container will be
     */
    popoverMaxHeight: prop_types_1.default.number, 
    /**
     * Whether or not the input accepts arbitrary user input beyond the provided items
     */
    allowOtherValues: prop_types_1.default.bool }, downshift_1.default.propTypes);
exports.default = Autocomplete;
