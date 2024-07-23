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
const ui_box_1 = __importDefault(require("ui-box"));
const hooks_1 = require("../../hooks");
const emptyObject = {};
const internalStyles = {
    margin: 0,
    marginLeft: '1.1em',
    padding: 0,
    listStyle: 'decimal'
};
const OrderedList = (0, react_1.memo)((0, react_1.forwardRef)(function OrderedList(props, ref) {
    const { children, className, size = 400 } = props, rest = __rest(props, ["children", "className", "size"]);
    const themedProps = (0, hooks_1.useStyleConfig)('List', { size }, emptyObject, internalStyles);
    const finalChildren = react_1.default.Children.map(children, child => {
        if (!react_1.default.isValidElement(child)) {
            return child;
        }
        return react_1.default.cloneElement(child, {
            // Prefer more granularly defined icon if present
            size: child.props.size || size
        });
    });
    return (react_1.default.createElement(ui_box_1.default, Object.assign({ is: "ol", className: className }, themedProps, rest, { ref: ref }), finalChildren));
}));
OrderedList.propTypes = Object.assign(Object.assign({}, ui_box_1.default.propTypes), { 
    /**
     * Size of the text used in a list item.
     * Can be: 300, 400, 500, 600.
     */
    size: prop_types_1.default.oneOf([300, 400, 500, 600]) });
exports.default = OrderedList;
