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
const typography_1 = require("../../typography");
const MenuGroup = (0, react_1.memo)(function MenuGroup(props) {
    const { children, title } = props;
    return (react_1.default.createElement(layers_1.Pane, { paddingY: 8 },
        title && (react_1.default.createElement(typography_1.Heading, { size: 100, marginX: 16, marginY: 8 }, title)),
        children));
});
MenuGroup.propTypes = {
    /**
     * Title of the menu group.
     */
    title: prop_types_1.default.node,
    /**
     * The children of the menu group.
     */
    children: prop_types_1.default.node
};
exports.default = MenuGroup;
