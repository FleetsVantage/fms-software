"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaxFilesMessage = exports.getFileSizeMessage = exports.getAcceptedTypesMessage = void 0;
const humanize_plus_1 = __importDefault(require("humanize-plus"));
const mime_types_to_extensions_1 = __importDefault(require("./mime-types-to-extensions"));
/**
 * Returns a standard message informing the user what file extensions are accepted based
 * on the provided array of MimeTypes
 * @param {string[]} acceptedMimeTypes
 * @returns {string}
 */
const getAcceptedTypesMessage = acceptedMimeTypes => {
    const fileExtensions = humanize_plus_1.default.oxford((0, mime_types_to_extensions_1.default)(acceptedMimeTypes));
    return `You can upload ${fileExtensions} formats.`;
};
exports.getAcceptedTypesMessage = getAcceptedTypesMessage;
/**
 * Returns a standard message informing the user of the maximum individual file size
 * @param {number} maxSizeInBytes
 * @returns {string}
 */
const getFileSizeMessage = maxSizeInBytes => `You can upload files up to ${humanize_plus_1.default.fileSize(maxSizeInBytes, 0)}.`;
exports.getFileSizeMessage = getFileSizeMessage;
/**
 * Returns a standard message informing the user of the maximum number of files that can be uploaded
 * @param {number} maxFiles
 * @returns {string}
 */
const getMaxFilesMessage = maxFiles => `You can upload up to ${maxFiles} ${maxFiles === 1 ? 'file' : 'files'}.`;
exports.getMaxFilesMessage = getMaxFilesMessage;
