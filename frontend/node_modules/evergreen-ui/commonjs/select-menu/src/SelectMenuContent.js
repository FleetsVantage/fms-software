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
const buttons_1 = require("../../buttons");
const icons_1 = require("../../icons");
const layers_1 = require("../../layers");
const typography_1 = require("../../typography");
const OptionShapePropType_1 = __importDefault(require("./OptionShapePropType"));
const OptionsList_1 = __importDefault(require("./OptionsList"));
const DefaultTitleView = ({ close, headerHeight, title }) => (react_1.default.createElement(layers_1.Pane, { display: "flex", alignItems: "center", borderBottom: "default", padding: 8, height: headerHeight, boxSizing: "border-box" },
    react_1.default.createElement(layers_1.Pane, { flex: "1", display: "flex", alignItems: "center" },
        react_1.default.createElement(typography_1.Text, { size: 300, textTransform: "uppercase" }, title)),
    react_1.default.createElement(buttons_1.IconButton, { icon: icons_1.CrossIcon, appearance: "minimal", height: 24, onClick: close, border: "none" })));
DefaultTitleView.propTypes = {
    close: prop_types_1.default.func,
    title: prop_types_1.default.string,
    headerHeight: prop_types_1.default.number
};
const emptyArray = [];
const SelectMenuContent = (0, react_1.memo)(function SelectMenuContent(props) {
    const { title, width, height, options = emptyArray, hasTitle = true, hasFilter = true, filterPlaceholder, filterIcon, close, listProps, titleView = DefaultTitleView, detailView, emptyView, isMultiSelect, closeOnSelect } = props;
    const headerHeight = 40;
    const optionsListHeight = hasTitle ? height - headerHeight : height;
    const hasDetailView = Boolean(detailView);
    const hasEmptyView = Boolean(emptyView);
    return (react_1.default.createElement(layers_1.Pane, { display: "flex", height: height },
        react_1.default.createElement(layers_1.Pane, { width: width, height: height, display: "flex", flexDirection: "column", borderRight: hasDetailView ? 'muted' : null },
            hasTitle && titleView({ close, title, headerHeight }),
            options.length === 0 && hasEmptyView ? (react_1.default.createElement(layers_1.Pane, { height: optionsListHeight }, emptyView)) : (react_1.default.createElement(OptionsList_1.default, Object.assign({ height: optionsListHeight, hasFilter: hasFilter, filterPlaceholder: filterPlaceholder, filterIcon: filterIcon, options: options, isMultiSelect: isMultiSelect, close: close, closeOnSelect: closeOnSelect }, listProps)))),
        hasDetailView && detailView));
});
SelectMenuContent.propTypes = {
    close: prop_types_1.default.func,
    title: prop_types_1.default.string,
    width: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    height: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    headerHeight: prop_types_1.default.number,
    options: prop_types_1.default.arrayOf(OptionShapePropType_1.default),
    hasTitle: prop_types_1.default.bool,
    hasFilter: prop_types_1.default.bool,
    filterPlaceholder: prop_types_1.default.string,
    filterIcon: prop_types_1.default.oneOfType([prop_types_1.default.elementType, prop_types_1.default.element]),
    listProps: prop_types_1.default.shape(OptionsList_1.default.propTypes),
    /**
     * When true, multi select is accounted for.
     */
    isMultiSelect: prop_types_1.default.bool,
    /*
     * When true, menu closes on option selection.
     */
    closeOnSelect: prop_types_1.default.bool,
    /**
     * Node that is placed in the header section, above the options.
     */
    titleView: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.node]),
    /**
     * Node that is placed right next to the options.
     */
    detailView: prop_types_1.default.node,
    /**
     * Node that is displayed instead of options list when there are no options.
     */
    emptyView: prop_types_1.default.node
};
exports.default = SelectMenuContent;
