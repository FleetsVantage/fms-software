"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const warning_1 = __importDefault(require("./warning"));
exports.default = (propType, explanation) => {
    return (props, propName, componentName, ...rest) => {
        if (process.env.NODE_ENV !== 'production') {
            (0, warning_1.default)(propName in props, `"${propName}" property of "${componentName}" has been deprecated.\n${explanation}`);
        }
        return propType(props, propName, componentName, ...rest);
    };
};
