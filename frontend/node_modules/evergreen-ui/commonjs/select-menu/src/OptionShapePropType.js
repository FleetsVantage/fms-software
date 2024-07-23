"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const OptionShapePropType = prop_types_1.default.shape({
    label: prop_types_1.default.string,
    value: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]).isRequired,
    disabled: prop_types_1.default.bool,
    icon: prop_types_1.default.string // Optional
});
exports.default = OptionShapePropType;
