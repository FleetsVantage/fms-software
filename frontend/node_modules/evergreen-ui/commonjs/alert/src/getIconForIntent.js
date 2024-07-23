"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIconForIntent = void 0;
const react_1 = __importDefault(require("react"));
const constants_1 = require("../../constants");
const icons_1 = require("../../icons");
/**
 * Get the properties for an icon based on the intent.
 * @param {Intent} intent
 */
const getIconForIntent = (intent, props = {}) => {
    switch (intent) {
        case constants_1.Intent.SUCCESS:
            return react_1.default.createElement(icons_1.TickCircleIcon, Object.assign({ color: "success" }, props));
        case constants_1.Intent.DANGER:
            return react_1.default.createElement(icons_1.ErrorIcon, Object.assign({ color: "danger" }, props));
        case constants_1.Intent.WARNING:
            return react_1.default.createElement(icons_1.WarningSignIcon, Object.assign({ color: "warning" }, props));
        case constants_1.Intent.NONE:
        default:
            return react_1.default.createElement(icons_1.InfoSignIcon, Object.assign({ color: "info" }, props));
    }
};
exports.getIconForIntent = getIconForIntent;
