"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Position_1 = __importDefault(require("./Position"));
exports.default = {
    [Position_1.default.TOP_LEFT]: {
        top: 50,
        left: 50
    },
    [Position_1.default.TOP_RIGHT]: {
        top: 50,
        right: 50
    },
    [Position_1.default.BOTTOM_LEFT]: {
        bottom: 50,
        left: 50
    },
    [Position_1.default.BOTTOM_RIGHT]: {
        bottom: 50,
        right: 50
    }
};
