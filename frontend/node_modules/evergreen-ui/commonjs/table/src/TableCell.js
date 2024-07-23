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
const layers_1 = require("../../layers");
const safe_invoke_1 = __importDefault(require("../../lib/safe-invoke"));
const toaster_1 = require("../../toaster");
const manageTableCellFocusInteraction_1 = __importDefault(require("./manageTableCellFocusInteraction"));
function executeArrowKeyOverride(override) {
    if (!override) {
        return;
    }
    if (typeof override === 'function') {
        override();
        return;
    }
    if (typeof override === 'string') {
        document.querySelector(override).focus();
        return;
    }
    // This needs to be the node, not a React ref.
    override.focus();
}
const pseudoSelectors = {
    _focus: '&[data-isselectable="true"]:focus,&[aria-expanded="true"][aria-haspopup="true"]'
};
const internalStyles = {
    boxSizing: 'border-box',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    overflow: 'hidden'
};
const TableCell = (0, react_1.memo)((0, react_1.forwardRef)(function TableCell(props, forwardedRef) {
    const { children, appearance = 'default', onClick, onKeyPress, onKeyDown, isSelectable, tabIndex = -1, className, rightView, arrowKeysOverrides } = props, rest = __rest(props, ["children", "appearance", "onClick", "onKeyPress", "onKeyDown", "isSelectable", "tabIndex", "className", "rightView", "arrowKeysOverrides"]);
    const cellRef = (0, react_1.useRef)(null);
    const handleRef = (0, hooks_1.useMergedRef)(cellRef, forwardedRef);
    const onKeyDownRef = (0, hooks_1.useLatest)(onKeyDown);
    const handleKeyDown = (0, react_1.useCallback)(e => {
        const arrowKeysOverrides = props.arrowKeysOverrides || {};
        if (isSelectable) {
            const { key } = e;
            if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
                e.preventDefault();
                try {
                    // Support arrow key overrides.
                    const override = arrowKeysOverrides[key.slice('Arrow'.length).toLowerCase()];
                    if (override === false)
                        return;
                    if (override)
                        return executeArrowKeyOverride(override);
                    (0, manageTableCellFocusInteraction_1.default)(key, cellRef.current);
                }
                catch (error) {
                    toaster_1.toaster.danger('Keyboard interaction not possible');
                    console.error('Keyboard interaction not possible', error);
                }
            }
            else if (key === 'Escape') {
                if (cellRef.current instanceof Node)
                    cellRef.current.blur();
            }
        }
        (0, safe_invoke_1.default)(onKeyDownRef.current, e);
    }, 
    // onKeyDownRef.current is a ref
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isSelectable, props.arrowKeysOverrides]);
    const themedProps = (0, hooks_1.useStyleConfig)('TableCell', { appearance }, pseudoSelectors, internalStyles);
    return (react_1.default.createElement(layers_1.Pane, Object.assign({ ref: handleRef, className: className, tabIndex: isSelectable ? tabIndex : undefined, "data-isselectable": isSelectable, onClick: onClick, onKeyDown: handleKeyDown }, themedProps, rest),
        children,
        rightView || null));
}));
TableCell.propTypes = Object.assign(Object.assign({}, layers_1.Pane.propTypes), { 
    /*
     * Makes the TableCell focusable. Used by EditableCell.
     * Will add tabIndex={-1 || this.props.tabIndex}.
     */
    isSelectable: prop_types_1.default.bool, 
    /**
     * The appearance of the table row. Default theme only support default.
     */
    appearance: prop_types_1.default.string, 
    /**
     * Optional node to be placed on the right side of the table cell.
     * Useful for icons and icon buttons.
     */
    rightView: prop_types_1.default.node, 
    /**
     * Advanced arrow keys overrides for selectable cells.
     * A string will be used as a selector.
     */
    arrowKeysOverrides: prop_types_1.default.shape({
        up: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func, prop_types_1.default.element, prop_types_1.default.oneOf([false])]),
        down: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func, prop_types_1.default.element, prop_types_1.default.oneOf([false])]),
        left: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func, prop_types_1.default.element, prop_types_1.default.oneOf([false])]),
        right: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func, prop_types_1.default.element, prop_types_1.default.oneOf([false])])
    }), 
    /**
     * Class name passed to the table cell.
     * Only use if you know what you are doing.
     */
    className: prop_types_1.default.string });
exports.default = TableCell;
