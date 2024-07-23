"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../constants");
/**
 * Returns the corresponding file extension from the provided MimeType.
 * @param {string} mimeType
 * @returns {string | undefined} Mapped file extension from the MimeType, or `undefined` if not found
 */
const mimeTypeToExtension = mimeType => {
    const keys = Object.keys(constants_1.MimeType);
    const key = keys.find(key => constants_1.MimeType[key] === mimeType);
    if (key == null) {
        return undefined;
    }
    return `.${key}`;
};
exports.default = mimeTypeToExtension;
