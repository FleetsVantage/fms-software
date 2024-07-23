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
const layers_1 = require("../../layers");
const MenuDivider_1 = __importDefault(require("./MenuDivider"));
const MenuGroup_1 = __importDefault(require("./MenuGroup"));
const MenuItem_1 = __importDefault(require("./MenuItem"));
const MenuOption_1 = __importDefault(require("./MenuOption"));
const MenuOptionsGroup_1 = __importDefault(require("./MenuOptionsGroup"));
const Menu = (0, react_1.memo)(function Menu(props) {
    const menuRef = (0, react_1.useRef)(null);
    const firstItem = (0, react_1.useRef)();
    const lastItem = (0, react_1.useRef)();
    const menuItems = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        const currentMenuRef = menuRef.current;
        menuItems.current = [
            ...currentMenuRef.querySelectorAll('[role="menuitemradio"]:not([disabled]), [role="menuitem"]:not([disabled])')
        ];
        firstItem.current = menuItems.current[0];
        lastItem.current = menuItems.current[menuItems.current.length - 1];
        // Go to next/previous item if it exists
        // or loop around
        const focusNext = (currentItem, startItem) => {
            // Determine which item is the startItem (first or last)
            const goingDown = startItem === firstItem.current;
            // Helper function for getting next legitimate element
            const move = elem => {
                const indexOfItem = menuItems.current.indexOf(elem);
                if (goingDown) {
                    if (indexOfItem < menuItems.current.length - 1) {
                        return menuItems.current[indexOfItem + 1];
                    }
                    return startItem;
                }
                if (indexOfItem - 1 > -1) {
                    return menuItems.current[indexOfItem - 1];
                }
                return startItem;
            };
            // Make first move
            const nextItem = move(currentItem);
            // Focus the first one that's not disabled
            nextItem.focus();
        };
        function onKeyPressListener(e) {
            const { target } = e;
            const menuItem = menuItems.current && menuItems.current.find(item => item === target);
            if (!menuItem)
                return;
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                focusNext(menuItem, firstItem.current);
            }
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                focusNext(menuItem, lastItem.current);
            }
            if (e.key === 'Home') {
                e.preventDefault();
                firstItem.current.focus();
            }
            if (e.key === 'End') {
                e.preventDefault();
                lastItem.current.focus();
            }
        }
        currentMenuRef.addEventListener('keydown', onKeyPressListener);
        return () => {
            currentMenuRef.removeEventListener('keydown', onKeyPressListener);
        };
    }, [menuRef]);
    const { children } = props;
    const renderEmptyChildren = () => {
        return (react_1.default.createElement(MenuGroup_1.default, null,
            react_1.default.createElement(MenuItem_1.default, { disabled: true }, "No items...")));
    };
    return (react_1.default.createElement(layers_1.Pane, { is: "nav", ref: menuRef, role: "menu", outline: "none" }, children || renderEmptyChildren()));
});
Menu.Item = MenuItem_1.default;
Menu.Divider = MenuDivider_1.default;
Menu.Group = MenuGroup_1.default;
Menu.Divider = MenuDivider_1.default;
Menu.Group = MenuGroup_1.default;
Menu.Option = MenuOption_1.default;
Menu.OptionsGroup = MenuOptionsGroup_1.default;
Menu.propTypes = {
    /**
     * The children of the component.
     */
    children: prop_types_1.default.node
};
exports.default = Menu;
