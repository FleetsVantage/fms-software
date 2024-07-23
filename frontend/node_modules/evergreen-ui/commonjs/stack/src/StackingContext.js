"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const constants_1 = require("../../constants");
/**
 * Context used to manage the layering of z-indexes of components.
 */
const StackingContext = react_1.default.createContext(constants_1.StackingOrder.STACKING_CONTEXT);
exports.default = StackingContext;
