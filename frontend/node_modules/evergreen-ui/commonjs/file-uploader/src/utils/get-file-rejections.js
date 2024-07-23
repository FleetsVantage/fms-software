"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_isempty_1 = __importDefault(require("lodash.isempty"));
const lodash_uniqby_1 = __importDefault(require("lodash.uniqby"));
const FileRejectionReason_1 = __importDefault(require("../../../constants/src/FileRejectionReason"));
const has_value_1 = __importDefault(require("../../../lib/has-value"));
const messages_1 = require("./messages");
/**
 * @typedef {object} FileRejection
 * @property {File} file
 * @property {string} message Informative message to display to the user for why the file was rejected
 * @property {string} reason Error code/enum to denote why the file was rejected
 */
/**
 * Returns a list of objects containing rejected files and why they were rejected based on the provided options
 * @param {File[]} files
 * @param {import('./split-files').SplitFilesOptions | undefined} options
 * @returns {FileRejection[]}
 */
const getFileRejections = (files, options) => {
    if (options == null || (0, lodash_isempty_1.default)(files)) {
        return [];
    }
    const { acceptedMimeTypes, currentFileCount: currentCount, maxFiles, maxSizeInBytes } = options;
    const typeRejections = files.map(file => {
        if ((0, lodash_isempty_1.default)(acceptedMimeTypes) || (acceptedMimeTypes === null || acceptedMimeTypes === void 0 ? void 0 : acceptedMimeTypes.some(type => file.type === type))) {
            return;
        }
        return {
            file,
            reason: FileRejectionReason_1.default.InvalidFileType,
            message: `This file is not an accepted format. ${(0, messages_1.getAcceptedTypesMessage)(acceptedMimeTypes)}`
        };
    });
    const sizeRejections = files.map(file => {
        if (maxSizeInBytes == null || maxSizeInBytes === 0 || file.size <= maxSizeInBytes) {
            return;
        }
        return {
            file,
            reason: FileRejectionReason_1.default.FileTooLarge,
            message: `This file is too big. ${(0, messages_1.getFileSizeMessage)(maxSizeInBytes)}`
        };
    });
    const countRejections = files.map((file, index) => {
        if (maxFiles == null) {
            return;
        }
        const fileNumber = index + 1;
        if ((currentCount !== null && currentCount !== void 0 ? currentCount : 0) + fileNumber <= maxFiles) {
            return;
        }
        return {
            file,
            reason: FileRejectionReason_1.default.OverFileLimit,
            message: (0, messages_1.getMaxFilesMessage)(maxFiles)
        };
    });
    // Type rejections are arguably more important than size rejections, so those will take priority
    const fileRejections = [...typeRejections, ...sizeRejections, ...countRejections].filter(has_value_1.default);
    return (0, lodash_uniqby_1.default)(fileRejections, rejection => rejection.file);
};
exports.default = getFileRejections;
