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
const ui_box_1 = require("ui-box");
const buttons_1 = require("../../buttons");
const hooks_1 = require("../../hooks");
const icons_1 = require("../../icons");
const layers_1 = require("../../layers");
const typography_1 = require("../../typography");
const getIconForIntent_1 = require("./getIconForIntent");
const pseudoSelectors = {};
const internalStyles = {
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    // 15 instead of 16 in order to maintain height with 1px border
    padding: '15px'
};
const Alert = (0, react_1.memo)((0, react_1.forwardRef)(function Alert(props, ref) {
    const { appearance = 'default', children, className, hasIcon = true, intent = 'info', isRemoveable = false, onRemove, title } = props, restProps = __rest(props, ["appearance", "children", "className", "hasIcon", "intent", "isRemoveable", "onRemove", "title"]);
    const intentToken = intent === 'none' ? 'info' : intent;
    const themedProps = (0, hooks_1.useStyleConfig)('Alert', { appearance, intent: intentToken }, pseudoSelectors, internalStyles);
    return (react_1.default.createElement(layers_1.Pane, Object.assign({ ref: ref, className: className, role: "alert" }, themedProps, restProps),
        hasIcon && (react_1.default.createElement(layers_1.Pane, { marginRight: 16, marginLeft: 2, marginTop: -1, display: "flex", alignItems: "flex-start" }, (0, getIconForIntent_1.getIconForIntent)(intentToken, { size: 16 }))),
        react_1.default.createElement(layers_1.Pane, { flex: 1 },
            title && (react_1.default.createElement(typography_1.Heading, { is: "h4", size: 400, marginTop: 0, marginBottom: 0, fontWeight: 500, lineHeight: 1, 
                // Get this from the theme / props on the Alert
                color: "inherit" }, title)),
            typeof children === 'string' ? (react_1.default.createElement(typography_1.Paragraph, { size: 400, color: "muted", marginTop: title ? 8 : 0, lineHeight: 1 }, children)) : (react_1.default.createElement(layers_1.Pane, null, children))),
        isRemoveable && (react_1.default.createElement(layers_1.Pane, { marginLeft: 24, flexShrink: 0, marginBottom: -4, marginTop: -5, marginRight: -4 },
            react_1.default.createElement(buttons_1.IconButton, { icon: icons_1.CrossIcon, appearance: "minimal", height: 24, onClick: onRemove, intent: intentToken })))));
}));
Alert.propTypes = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ui_box_1.spacing.propTypes), ui_box_1.position.propTypes), ui_box_1.layout.propTypes), ui_box_1.dimensions.propTypes), { 
    /**
     * The content of the alert. When a string is passed it is wrapped in a `<Text size={400} />` component.
     */
    children: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.node]), 
    /**
     * The intent of the alert.
     */
    intent: prop_types_1.default.string, 
    /**
     * The title of the alert.
     */
    title: prop_types_1.default.node, 
    /**
     * When true, show a icon on the left matching the type,
     */
    hasIcon: prop_types_1.default.bool, 
    /**
     * When true, show a remove icon button.
     */
    isRemoveable: prop_types_1.default.bool, 
    /**
     * Function called when the remove button is clicked.
     */
    onRemove: prop_types_1.default.func, 
    /**
     * The appearance of the alert.
     */
    appearance: prop_types_1.default.oneOf(['default', 'card']) });
exports.default = Alert;
