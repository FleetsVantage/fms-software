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
exports.pseudoSelectors = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const hooks_1 = require("../../hooks");
const layers_1 = require("../../layers");
const safe_invoke_1 = __importDefault(require("../../lib/safe-invoke"));
const manageTableRowFocusInteraction_1 = __importDefault(require("./manageTableRowFocusInteraction"));
const noop = () => { };
exports.pseudoSelectors = {
    _hover: '&[data-isselectable="true"]:not([aria-current="true"]):not([aria-checked="true"]):not(:focus):not(:active):hover',
    _focus: '&[data-isselectable="true"]:not([aria-checked="true"]):not([aria-current="true"]):focus,&[aria-selected="true"]',
    _active: '&[aria-current="true"],&[data-isselectable="true"]:active',
    _current: '&[aria-current="true"],&[aria-checked="true"]',
    _lastOfType: '&:last-of-type',
    _isSelectable: '&[data-isselectable="true"]'
};
const internalStyles = {
    display: 'flex'
};
const TableRow = (0, react_1.memo)((0, react_1.forwardRef)(function TableRow(props, forwardedRef) {
    const { className, children, intent = 'none', appearance = 'default', tabIndex = -1, onClick, onKeyDown = noop, onSelect = noop, onDeselect = noop, isHighlighted, isSelectable, isSelected } = props, rest = __rest(props, ["className", "children", "intent", "appearance", "tabIndex", "onClick", "onKeyDown", "onSelect", "onDeselect", "isHighlighted", "isSelectable", "isSelected"]);
    const mainRef = (0, react_1.useRef)();
    const onRef = (0, hooks_1.useMergedRef)(mainRef, forwardedRef);
    const onClickRef = (0, hooks_1.useLatest)(onClick);
    const onKeyDownRef = (0, hooks_1.useLatest)(onKeyDown);
    const onDeselectRef = (0, hooks_1.useLatest)(onDeselect);
    const onSelectRef = (0, hooks_1.useLatest)(onSelect);
    const handleClick = (0, react_1.useCallback)(event => {
        (0, safe_invoke_1.default)(onClickRef.current, event);
        if (isSelectable) {
            if (isSelected) {
                (0, safe_invoke_1.default)(onDeselectRef.current);
            }
            else {
                (0, safe_invoke_1.default)(onSelectRef.current);
            }
        }
    }, 
    // These "missing" deps are all refs
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isSelected, isSelectable]);
    const handleKeyDown = (0, react_1.useCallback)(event => {
        (0, safe_invoke_1.default)(onKeyDownRef.current, event);
        if (isSelectable) {
            if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                try {
                    (0, manageTableRowFocusInteraction_1.default)(event.key, mainRef.current);
                }
                catch (_) { }
            }
            else if (event.key === 'Escape') {
                if (mainRef.current && mainRef.current instanceof Node)
                    mainRef.current.blur();
            }
        }
    }, 
    // These "missing" deps are all refs
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isSelectable]);
    const clickable = (0, hooks_1.useClickable)({ onKeyDown: handleKeyDown, tabIndex });
    const _a = (0, hooks_1.useStyleConfig)('TableRow', { appearance, intent }, exports.pseudoSelectors, internalStyles), { height: themeHeight } = _a, themedProps = __rest(_a, ["height"]);
    const height = rest.height || themeHeight;
    return (react_1.default.createElement(layers_1.Pane, Object.assign({ ref: onRef, className: className, "aria-selected": isHighlighted, "aria-current": isSelected, "data-isselectable": isSelectable, tabIndex: isSelectable ? clickable.tabIndex : undefined, onClick: handleClick, onKeyDown: clickable.onKeyDown, borderBottom: "muted", height: height }, themedProps, rest), children));
}));
TableRow.propTypes = Object.assign(Object.assign({}, layers_1.Pane.propTypes), { 
    /**
     * The height of the row. Remember to add paddings when using "auto".
     */
    height: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]), 
    /**
     * Function that is called on click and enter/space keypress.
     */
    onSelect: prop_types_1.default.func, 
    /**
     * Function that is called on click and enter/space keypress.
     */
    onDeselect: prop_types_1.default.func, 
    /**
     * Makes the TableRow selectable.
     */
    isSelectable: prop_types_1.default.bool, 
    /**
     * Makes the TableRow selected.
     */
    isSelected: prop_types_1.default.bool, 
    /**
     * Manually set the TableRow to be highlighted.
     */
    isHighlighted: prop_types_1.default.bool, 
    /**
     * The intent of the alert.
     */
    intent: prop_types_1.default.string, 
    /**
     * The appearance of the table row. Default theme only support default.
     */
    appearance: prop_types_1.default.string, 
    /**
     * Class name passed to the table row.
     * Only use if you know what you are doing.
     */
    className: prop_types_1.default.string });
exports.default = TableRow;
