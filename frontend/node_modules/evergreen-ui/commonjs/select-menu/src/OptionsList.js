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
const fuzzaldrin_plus_1 = __importDefault(require("fuzzaldrin-plus"));
const prop_types_1 = __importDefault(require("prop-types"));
const icons_1 = require("../../icons");
const image_1 = require("../../image");
const layers_1 = require("../../layers");
const SearchTableHeaderCell_1 = __importDefault(require("../../table/src/SearchTableHeaderCell"));
const TableHead_1 = __importDefault(require("../../table/src/TableHead"));
const theme_1 = require("../../theme");
const Option_1 = __importDefault(require("./Option"));
const OptionShapePropType_1 = __importDefault(require("./OptionShapePropType"));
/**
 * Fuzzaldrin-plus is the default filter, but you can use your own
 * as long as they follow the following signature:
 * @param options <Array[String]> - ['label', 'label2', ...]
 * @param input <String>
 */
const fuzzyFilter = (options, input, { key }) => {
    return fuzzaldrin_plus_1.default.filter(options, input, { key });
};
const noop = () => { };
const defaultRenderItem = props => {
    return (react_1.default.createElement(Option_1.default, Object.assign({}, props),
        props.icon && react_1.default.createElement(image_1.Image, { src: props.icon, width: 24, marginRight: 8 }),
        props.label));
};
const OptionsList = (0, react_1.memo)(function OptionsList(props) {
    const { options: originalOptions = [], optionSize = 33, close, closeOnSelect, onSelect = noop, onDeselect = noop, onFilterChange = noop, hasFilter, selected = [], optionsFilter, isMultiSelect, height, width, renderItem = defaultRenderItem, filterPlaceholder = 'Filter...', filterIcon = icons_1.SearchIcon, defaultSearchValue = '', shouldAutoFocus = true } = props, rest = __rest(props, ["options", "optionSize", "close", "closeOnSelect", "onSelect", "onDeselect", "onFilterChange", "hasFilter", "selected", "optionsFilter", "isMultiSelect", "height", "width", "renderItem", "filterPlaceholder", "filterIcon", "defaultSearchValue", "shouldAutoFocus"]);
    const [searchValue, setSearchValue] = (0, react_1.useState)(defaultSearchValue);
    const [searchRef, setSearchRef] = (0, react_1.useState)(null);
    const requestId = (0, react_1.useRef)();
    const { colors } = (0, theme_1.useTheme)();
    const isSelected = (0, react_1.useCallback)(item => {
        return Boolean(selected.find(selectedItem => selectedItem === item.value));
    }, [selected]);
    const optionLabels = (0, react_1.useMemo)(() => {
        return originalOptions.map(item => item.label);
    }, [originalOptions]);
    // Gets filtered options any time the filter fn, value, or options change
    const options = (0, react_1.useMemo)(() => {
        if (searchValue.trim() === '') {
            return originalOptions;
        }
        // Preserve backwards compatibility with allowing custom filters, which accept array of strings
        if (typeof optionsFilter === 'function') {
            return optionsFilter(optionLabels, searchValue).map(name => {
                return originalOptions.find(item => item.label === name);
            });
        }
        return fuzzyFilter(originalOptions, searchValue, { key: 'label' });
    }, [originalOptions, optionLabels, optionsFilter, searchValue]);
    const getCurrentIndex = (0, react_1.useCallback)(() => {
        return options.findIndex(option => option.value === selected[selected.length - 1]);
    }, [selected, options]);
    const handleArrowUp = (0, react_1.useCallback)(() => {
        let nextIndex = getCurrentIndex() - 1;
        if (nextIndex < 0) {
            nextIndex = options.length - 1;
        }
        if (isSelected(options[nextIndex])) {
            return;
        }
        onSelect(options[nextIndex]);
    }, [onSelect, options, getCurrentIndex, isSelected]);
    const handleArrowDown = (0, react_1.useCallback)(() => {
        let nextIndex = getCurrentIndex() + 1;
        if (nextIndex === options.length) {
            nextIndex = 0;
        }
        if (!isSelected(options[nextIndex])) {
            onSelect(options[nextIndex]);
        }
    }, [onSelect, options, getCurrentIndex, isSelected]);
    const handleChange = (0, react_1.useCallback)(searchValue => {
        setSearchValue(searchValue);
        onFilterChange(searchValue);
    }, [onFilterChange]);
    const handleSelect = (0, react_1.useCallback)(item => {
        if (isSelected(item) && isMultiSelect) {
            onDeselect(item);
        }
        else {
            onSelect(item);
        }
        if (!isMultiSelect && closeOnSelect) {
            close();
        }
    }, [onDeselect, isMultiSelect, closeOnSelect, onSelect, isSelected, close]);
    const handleEnter = (0, react_1.useCallback)(() => {
        const isSelected = getCurrentIndex() !== -1;
        if (isSelected) {
            if (!isMultiSelect && closeOnSelect) {
                close();
            }
        }
    }, [isMultiSelect, close, closeOnSelect, getCurrentIndex]);
    const handleDeselect = (0, react_1.useCallback)(item => {
        onDeselect(item);
    }, [onDeselect]);
    const handleKeyDown = (0, react_1.useCallback)(e => {
        if (e.key === 'ArrowUp') {
            handleArrowUp();
        }
        if (e.key === 'ArrowDown') {
            handleArrowDown();
        }
        if (e.key === 'Enter') {
            handleEnter();
        }
        if (e.key === 'Escape') {
            close();
        }
    }, [close, handleArrowUp, handleArrowDown, handleEnter]);
    (0, react_1.useEffect)(() => {
        if (hasFilter) {
            requestId.current = requestAnimationFrame(() => {
                if (searchRef && shouldAutoFocus) {
                    searchRef.focus();
                }
            });
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                cancelAnimationFrame(requestId.current);
                window.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [hasFilter, searchRef, handleKeyDown, shouldAutoFocus]);
    const listHeight = height - (hasFilter ? 32 : 0);
    const currentIndex = getCurrentIndex();
    const scrollToIndex = currentIndex === -1 ? 0 : currentIndex;
    return (react_1.default.createElement(layers_1.Pane, Object.assign({ height: height, width: width, display: "flex", flexDirection: "column" }, rest),
        hasFilter && (react_1.default.createElement(TableHead_1.default, { height: 32, backgroundColor: colors.gray50 },
            react_1.default.createElement(SearchTableHeaderCell_1.default, { onChange: handleChange, ref: setSearchRef, borderRight: null, placeholder: filterPlaceholder, icon: filterIcon }))),
        react_1.default.createElement(layers_1.Pane, { flex: 1 }, options.length > 0 && (react_1.default.createElement(react_tiny_virtual_list_1.default, { height: listHeight, width: "100%", itemSize: optionSize, itemCount: options.length, overscanCount: 20, scrollToAlignment: "auto", scrollToIndex: scrollToIndex || undefined, renderItem: ({ index, style }) => {
                const item = options[index];
                const isItemSelected = isSelected(item);
                const itemProps = {
                    key: item.value,
                    label: item.label,
                    icon: item.icon,
                    item,
                    style,
                    height: optionSize,
                    onSelect: () => handleSelect(item),
                    onDeselect: () => handleDeselect(item),
                    isSelectable: !isItemSelected || isMultiSelect,
                    isSelected: isItemSelected,
                    disabled: item.disabled,
                    tabIndex: 0
                };
                return renderItem(itemProps);
            } })))));
});
OptionsList.propTypes = {
    options: prop_types_1.default.arrayOf(OptionShapePropType_1.default),
    close: prop_types_1.default.func,
    height: prop_types_1.default.number,
    width: prop_types_1.default.number,
    /**
     * When true, multi select is accounted for.
     */
    isMultiSelect: prop_types_1.default.bool,
    /**
     * When true, menu closes on option selection.
     */
    closeOnSelect: prop_types_1.default.bool,
    /**
     * This holds the values of the options
     */
    selected: prop_types_1.default.arrayOf(prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])),
    /**
     * When true, menu auto focuses on the search/filter bar.
     */
    shouldAutoFocus: prop_types_1.default.bool,
    onSelect: prop_types_1.default.func,
    onDeselect: prop_types_1.default.func,
    onFilterChange: prop_types_1.default.func,
    hasFilter: prop_types_1.default.bool,
    optionSize: prop_types_1.default.number,
    renderItem: prop_types_1.default.func,
    filterPlaceholder: prop_types_1.default.string,
    filterIcon: prop_types_1.default.oneOfType([prop_types_1.default.elementType, prop_types_1.default.element]),
    optionsFilter: prop_types_1.default.func,
    defaultSearchValue: prop_types_1.default.string
};
exports.default = OptionsList;
