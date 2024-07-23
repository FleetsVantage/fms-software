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
const icons_1 = require("../../icons");
const layers_1 = require("../../layers");
const TableRow_1 = require("../../table/src/TableRow");
const typography_1 = require("../../typography");
const noop = () => { };
const internalStyles = {
    display: 'flex',
    alignItems: 'center'
};
const MenuOption = (0, react_1.memo)(function MenuOption(props) {
    const { id, children, appearance = 'default', onSelect = noop, secondaryText, isSelected = false } = props;
    const handleClick = (0, react_1.useCallback)(e => onSelect(e), [onSelect]);
    const { onKeyDown, tabIndex } = (0, hooks_1.useClickable)();
    const themedProps = (0, hooks_1.useStyleConfig)('MenuItem', { appearance }, TableRow_1.pseudoSelectors, internalStyles);
    const textProps = isSelected
        ? {
            color: 'selected',
            fontWeight: 500,
            marginLeft: 16
        }
        : { marginLeft: 44 };
    return (react_1.default.createElement(layers_1.Pane, Object.assign({ id: id, role: "menuitemradio", tabIndex: tabIndex, onClick: handleClick, onKeyDown: onKeyDown, "data-isselectable": "true", "aria-checked": isSelected, height: 40 }, themedProps),
        isSelected && (react_1.default.createElement(icons_1.TickIcon, { "aria-hidden": true, color: "selected", marginLeft: 16, marginRight: -4, size: 16, flexShrink: 0 })),
        react_1.default.createElement(typography_1.Text, Object.assign({}, textProps, { marginRight: 16, flex: 1 }), children),
        secondaryText && (react_1.default.createElement(typography_1.Text, { marginRight: 16, color: "muted" }, secondaryText))));
});
MenuOption.propTypes = {
    /**
     * The id attribute of the menu option.
     */
    id: prop_types_1.default.string,
    /**
     * Function that is called on click and enter/space keypress.
     */
    onSelect: prop_types_1.default.func,
    /**
     * The icon before the label.
     */
    isSelected: prop_types_1.default.bool,
    /**
     * The children of the component.
     */
    children: prop_types_1.default.node,
    /**
     * Secondary text shown on the right.
     */
    secondaryText: prop_types_1.default.node,
    /**
     * The default theme only supports one default appearance.
     */
    appearance: prop_types_1.default.string
};
exports.default = MenuOption;
