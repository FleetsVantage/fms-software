"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const split_files_1 = __importDefault(require("./split-files"));
/**
 * @typedef {object} RebaseFilesOptions
 * @property {string[] | undefined} acceptedMimeTypes
 * @property {number | undefined} maxFiles
 * @property {number | undefined} maxSizeInBytes
 */
/**
 * @typedef {object} RebaseFilesResult
 * @property {File[]} accepted
 * @property {import('./get-file-rejections').FileRejection[]} rejected
 */
/**
 * Returns separate arrays for accepted and rejected files based on the provided options, similar to
 * `splitFiles`. This function should be used for rebasing files on removal (i.e. for removing files
 * from the `rejected` array when they are no longer over maximum limit, if there is one)
 * @param {File[]} files
 * @param {RebaseFilesOptions | undefined} options
 * @returns {RebaseFilesResult}
 */
const rebaseFiles = (files, options) => (0, split_files_1.default)(files, (0, lodash_merge_1.default)({}, options !== null && options !== void 0 ? options : {}, { currentFileCount: null }));
exports.default = rebaseFiles;
