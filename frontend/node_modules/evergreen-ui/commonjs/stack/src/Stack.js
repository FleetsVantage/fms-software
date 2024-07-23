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
const constants_1 = require("../../constants");
const StackingContext_1 = __importDefault(require("./StackingContext"));
const Stack = (0, react_1.memo)(function Stack({ children, value = constants_1.StackingOrder.STACKING_CONTEXT }) {
    const previousValue = (0, react_1.useContext)(StackingContext_1.default);
    const currentValue = Math.max(value, previousValue);
    const nextValue = currentValue + 1;
    return react_1.default.createElement(StackingContext_1.default.Provider, { value: nextValue }, children(currentValue));
});
Stack.propTypes = {
    /**
     * Function that takes the current z-index and returns a React Node.
     * (zIndex) => ReactNode.
     */
    children: prop_types_1.default.func.isRequired,
    /**
     * Set the value of the stack. This will increment for children.
     */
    value: prop_types_1.default.number
};
exports.default = Stack;
