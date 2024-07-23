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
const arrify_1 = __importDefault(require("arrify"));
const prop_types_1 = __importDefault(require("prop-types"));
const constants_1 = require("../../constants");
const icons_1 = require("../../icons");
const popover_1 = require("../../popover");
const OptionShapePropType_1 = __importDefault(require("./OptionShapePropType"));
const SelectedPropType_1 = __importDefault(require("./SelectedPropType"));
const SelectMenuContent_1 = __importDefault(require("./SelectMenuContent"));
const noop = () => { };
const SelectMenu = (0, react_1.memo)(function SelectMenu(props) {
    const { title, width = 240, height = 248, options, onSelect = noop, onDeselect = noop, onFilterChange, selected, position = constants_1.Position.BOTTOM_LEFT, hasTitle, hasFilter, filterPlaceholder = 'Filter...', filterIcon = icons_1.SearchIcon, detailView, emptyView, titleView, isMultiSelect = false, closeOnSelect = false, itemRenderer, itemHeight, shouldAutoFocus } = props, rest = __rest(props, ["title", "width", "height", "options", "onSelect", "onDeselect", "onFilterChange", "selected", "position", "hasTitle", "hasFilter", "filterPlaceholder", "filterIcon", "detailView", "emptyView", "titleView", "isMultiSelect", "closeOnSelect", "itemRenderer", "itemHeight", "shouldAutoFocus"]);
    const selectedArray = (0, react_1.useMemo)(() => (0, arrify_1.default)(selected), [selected]);
    return (react_1.default.createElement(popover_1.Popover, Object.assign({ minWidth: width, position: position, minHeight: height, content: ({ close }) => (react_1.default.createElement(SelectMenuContent_1.default, { width: width, height: height, options: options, title: title, hasFilter: hasFilter, filterPlaceholder: filterPlaceholder, filterIcon: filterIcon, hasTitle: hasTitle, isMultiSelect: isMultiSelect, titleView: titleView, listProps: {
                onSelect,
                onDeselect,
                onFilterChange,
                selected: selectedArray,
                renderItem: itemRenderer,
                optionSize: itemHeight,
                shouldAutoFocus: shouldAutoFocus
            }, close: close, detailView: typeof detailView === 'function' ? detailView({ close }) : detailView, emptyView: typeof emptyView === 'function' ? emptyView({ close }) : emptyView, closeOnSelect: closeOnSelect })) }, rest)));
});
SelectMenu.propTypes = {
    /**
     * The title of the Select Menu.
     */
    title: prop_types_1.default.string,
    /**
     * The width of the Select Menu.
     */
    width: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    /**
     * The height of the Select Menu.
     */
    height: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    /**
     * The options to show in the menu.
     * [{ label: String, value: String | Number }]
     */
    options: prop_types_1.default.arrayOf(OptionShapePropType_1.default),
    /**
     * Function that is called when an option is selected.
     */
    onSelect: prop_types_1.default.func,
    /**
     * Function that is called when an option is deselected.
     */
    onDeselect: prop_types_1.default.func,
    /**
     * The selected value/values.
     */
    selected: SelectedPropType_1.default,
    /**
     * When true, multi select is accounted for.
     */
    isMultiSelect: prop_types_1.default.bool,
    /**
     * When true, show the title.
     */
    hasTitle: prop_types_1.default.bool,
    /**
     * When true, show the filter.
     */
    hasFilter: prop_types_1.default.bool,
    /**
     * The placeholder of the search filter.
     */
    filterPlaceholder: prop_types_1.default.string,
    /**
     * The icon of the search filter.
     */
    filterIcon: prop_types_1.default.oneOfType([prop_types_1.default.elementType, prop_types_1.default.element]),
    /**
     * Function that is called as the onChange() event for the filter.
     */
    onFilterChange: prop_types_1.default.func,
    /**
     * The position of the Select Menu.
     */
    position: prop_types_1.default.oneOf([
        constants_1.Position.TOP,
        constants_1.Position.TOP_LEFT,
        constants_1.Position.TOP_RIGHT,
        constants_1.Position.BOTTOM,
        constants_1.Position.BOTTOM_LEFT,
        constants_1.Position.BOTTOM_RIGHT
    ]),
    /**
     * Can be a function that returns a node, or a node itself, that is
     * rendered on the right side of the Select Menu to give additional
     * information when an option is selected.
     */
    detailView: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.node]),
    /**
     * Can be a function that returns a node, or a node itself, that is
     * rendered in the header section of the Select Menu to customize
     * the header.
     */
    titleView: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.node]),
    /**
     * Can be a function that returns a node, or a node itself, that is
     * rendered instead of the options list when there are no options.
     */
    emptyView: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.node]),
    /*
     * When true, menu closes on option selection.
     */
    closeOnSelect: prop_types_1.default.bool,
    /**
     * Can pass a method that can be used to render custom items in the
     * select menu
     */
    itemRenderer: prop_types_1.default.func,
    /**
     * The height of the items in the select menu list
     */
    itemHeight: prop_types_1.default.number,
    /**
     * When true, menu auto focuses on the search/filter bar.
     */
    shouldAutoFocus: prop_types_1.default.bool
};
exports.default = SelectMenu;
