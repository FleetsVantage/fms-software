"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("./colors"));
/**
 * Used for matching background colors and foreground colors
 */
const fills = {
    neutral: {
        color: colors_1.default.gray800,
        backgroundColor: colors_1.default.gray200
    },
    blue: {
        color: colors_1.default.blue600,
        backgroundColor: colors_1.default.blue100
    },
    red: {
        color: colors_1.default.red700,
        backgroundColor: colors_1.default.red100
    },
    orange: {
        color: colors_1.default.orange700,
        backgroundColor: colors_1.default.orange100
    },
    yellow: {
        color: colors_1.default.yellow800,
        backgroundColor: colors_1.default.yellow100
    },
    green: {
        color: colors_1.default.green700,
        backgroundColor: colors_1.default.green100
    },
    teal: {
        color: colors_1.default.teal800,
        backgroundColor: colors_1.default.teal100
    },
    purple: {
        color: colors_1.default.purple600,
        backgroundColor: colors_1.default.purple100
    }
};
exports.default = fills;
