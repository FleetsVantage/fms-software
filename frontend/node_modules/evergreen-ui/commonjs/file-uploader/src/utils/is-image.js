"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns whether or not the given MimeType is an image
 * @param {string} mimeType MimeType to test
 * @returns {boolean}
 */
const isImage = mimeType => { var _a; return (_a = mimeType === null || mimeType === void 0 ? void 0 : mimeType.includes('image')) !== null && _a !== void 0 ? _a : false; };
exports.default = isImage;
