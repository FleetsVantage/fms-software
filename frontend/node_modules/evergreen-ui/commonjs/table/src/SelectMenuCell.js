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
const lodash_debounce_1 = __importDefault(require("lodash.debounce"));
const prop_types_1 = __importDefault(require("prop-types"));
const icons_1 = require("../../icons");
const select_menu_1 = require("../../select-menu");
const TableCell_1 = __importDefault(require("./TableCell"));
const TextTableCell_1 = __importDefault(require("./TextTableCell"));
const MIN_SELECT_MENU_WIDTH = 240;
const emptyProps = {};
const SelectMenuCell = (0, react_1.memo)(function SelectMenuCell(props) {
    const [targetWidth, setTargetWidth] = (0, react_1.useState)(MIN_SELECT_MENU_WIDTH);
    const [shouldClickToggle, setShouldClickToggle] = (0, react_1.useState)(false);
    const [isFocused, setIsFocused] = (0, react_1.useState)(false);
    const [mainRef, setMainRef] = (0, react_1.useState)();
    const { children, size = 300, selectMenuProps, disabled, placeholder, isSelectable = true, textProps = emptyProps } = props, rest = __rest(props, ["children", "size", "selectMenuProps", "disabled", "placeholder", "isSelectable", "textProps"]);
    const updateOnResize = () => {
        if (!mainRef)
            return;
        const mainRefWidth = mainRef.offsetWidth;
        setTargetWidth(Math.max(MIN_SELECT_MENU_WIDTH, mainRefWidth));
    };
    const onResize = (0, lodash_debounce_1.default)(updateOnResize, 200);
    (0, react_1.useEffect)(() => {
        updateOnResize();
        window.addEventListener('resize', onResize, false);
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);
    const onMainRef = (getRef, ref) => {
        setMainRef(ref);
        getRef(ref);
    };
    // TODO consider `useClickable`
    const handleKeyDown = (toggle, isShown, e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            if (!isShown && isSelectable && !disabled) {
                toggle();
            }
        }
    };
    const handleDoubleClick = (toggle, isShown) => {
        if (!isShown && isSelectable && !disabled) {
            toggle();
        }
    };
    const handleClick = (toggle, isShown) => {
        if (!shouldClickToggle && !isShown) {
            setShouldClickToggle(true);
            return;
        }
        if (isSelectable && !disabled) {
            toggle();
            setShouldClickToggle(true);
        }
    };
    const handleFocus = (0, react_1.useCallback)(() => {
        setIsFocused(true);
    }, []);
    const handleBlur = (0, react_1.useCallback)(() => {
        setShouldClickToggle(false);
        setIsFocused(false);
    }, []);
    let cursor = 'default';
    if (disabled) {
        cursor = 'not-allowed';
    }
    else if (isSelectable) {
        if (isFocused) {
            cursor = 'pointer';
        }
        else {
            cursor = 'default';
        }
    }
    else {
        cursor = 'text';
    }
    const lessOpacity = (0, react_1.useMemo)(() => disabled || (!children && placeholder), [disabled, children, placeholder]);
    const mergedTextProps = (0, react_1.useMemo)(() => (Object.assign({ size, opacity: lessOpacity ? 0.5 : 1 }, textProps)), [lessOpacity, size, textProps]);
    return (react_1.default.createElement(select_menu_1.SelectMenu, Object.assign({ width: targetWidth }, selectMenuProps), ({ getRef, isShown, toggle }) => {
        return (react_1.default.createElement(TextTableCell_1.default, Object.assign({ ref: onMainRef.bind(null, getRef), onClick: handleClick.bind(null, toggle, isShown), onFocus: handleFocus, onBlur: handleBlur, isSelectable: isSelectable && !disabled, rightView: isSelectable ? react_1.default.createElement(icons_1.CaretDownIcon, { color: "muted" }) : null, "aria-haspopup": true, "aria-expanded": isShown, cursor: isShown ? 'pointer' : cursor, textProps: mergedTextProps, onKeyDown: handleKeyDown.bind(null, toggle, isShown), onDoubleClick: handleDoubleClick.bind(null, toggle, isShown) }, rest), children || placeholder));
    }));
});
SelectMenuCell.propTypes = Object.assign(Object.assign({}, TableCell_1.default.propTypes), { 
    /*
     * Makes the TableCell focusable.
     * Will add tabIndex={-1 || this.props.tabIndex}.
     */
    isSelectable: prop_types_1.default.bool, 
    /**
     * When true, the cell can't be edited.
     */
    disabled: prop_types_1.default.bool, 
    /**
     * Optional placeholder when children is falsy.
     */
    placeholder: prop_types_1.default.node, 
    /**
     * The size used for the TextTableCell and Textarea.
     */
    size: prop_types_1.default.oneOf([300, 400]), selectMenuProps: prop_types_1.default.object });
exports.default = SelectMenuCell;
