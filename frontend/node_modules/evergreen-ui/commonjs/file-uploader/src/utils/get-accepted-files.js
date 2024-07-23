"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_differencewith_1 = __importDefault(require("lodash.differencewith"));
const get_file_rejections_1 = __importDefault(require("./get-file-rejections"));
/**
 * Returns a list of accepted files based on the provided options
 * @param {File[]} files
 * @param {import('./split-files').SplitFilesOptions | undefined} options
 * @returns {File[]}
 */
const getAcceptedFiles = (files, options) => {
    if (options == null) {
        return files;
    }
    const fileRejections = (0, get_file_rejections_1.default)(files, options);
    return (0, lodash_differencewith_1.default)(files, fileRejections, (file, fileRejection) => file === fileRejection.file);
};
exports.default = getAcceptedFiles;
