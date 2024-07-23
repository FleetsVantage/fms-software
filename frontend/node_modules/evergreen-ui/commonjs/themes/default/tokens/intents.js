"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("./colors"));
const intents = {
    info: {
        background: colors_1.default.blue25,
        border: colors_1.default.blue500,
        text: colors_1.default.blue600,
        icon: colors_1.default.blue500
    },
    success: {
        background: colors_1.default.green25,
        border: colors_1.default.green500,
        text: colors_1.default.green700,
        icon: colors_1.default.green500
    },
    warning: {
        background: colors_1.default.orange25,
        border: colors_1.default.orange500,
        text: colors_1.default.orange700,
        icon: colors_1.default.orange500
    },
    danger: {
        background: colors_1.default.red25,
        border: colors_1.default.red500,
        text: colors_1.default.red600,
        icon: colors_1.default.red500
    }
};
exports.default = intents;
