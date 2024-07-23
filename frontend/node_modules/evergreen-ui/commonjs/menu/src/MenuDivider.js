"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const layers_1 = require("../../layers");
const MenuDivider = () => {
    return react_1.default.createElement(layers_1.Pane, { borderBottom: true });
};
exports.default = MenuDivider;
