"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const has_value_1 = __importDefault(require("../../../lib/has-value"));
const mime_type_to_extension_1 = __importDefault(require("./mime-type-to-extension"));
/**
 * Returns the corresponding file extensions from the provided MimeTypes.
 *
 * Unlike `mimeTypeToExtension`, this will never return `undefined` values. MimeTypes
 * that aren't found are discarded.
 *
 * @param {string[]} mimeTypes
 * @returns {string[]} Mapped file extensions each MimeType
 */
const mimeTypesToExtensions = mimeTypes => {
    const extensions = mimeTypes.map(mime_type_to_extension_1.default);
    return extensions.filter(has_value_1.default);
};
exports.default = mimeTypesToExtensions;
