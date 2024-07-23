"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const icons_1 = require("../../../icons");
const is_image_1 = __importDefault(require("./is-image"));
/**
 * Maps a MimeType to an Icon component
 * @param {string} mimeType MimeType to test
 * @returns {IconComponent}
 */
const getIconFromType = mimeType => {
    if ((0, is_image_1.default)(mimeType)) {
        return icons_1.MediaIcon;
    }
    if (mimeType === null || mimeType === void 0 ? void 0 : mimeType.includes('video')) {
        return icons_1.VideoIcon;
    }
    return icons_1.DocumentIcon;
};
exports.default = getIconFromType;
