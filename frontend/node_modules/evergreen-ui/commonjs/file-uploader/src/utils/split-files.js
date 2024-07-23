"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_accepted_files_1 = __importDefault(require("./get-accepted-files"));
const get_file_rejections_1 = __importDefault(require("./get-file-rejections"));
/**
 * @typedef {object} SplitFilesOptions
 * @property {string[] | undefined} acceptedMimeTypes
 * @property {number | undefined} currentFileCount Current count of files used for validating whether the dropped files are over the `maxFiles` limit
 * @property {number | undefined} maxFiles
 * @property {number | undefined} maxSizeInBytes
 */
/**
 * @typedef {object} SplitFilesResult
 * @property {File[]} accepted
 * @property {import('./get-file-rejections').FileRejection[]} rejected
 */
/**
 * Returns separate arrays for accepted and rejected files based on the provided options.
 * This should be used for accepting and rejecting files on drop
 * @param {File[]} files
 * @param {SplitFilesOptions | undefined} options
 * @returns {SplitFilesResult}
 */
const splitFiles = (files, options) => {
    const accepted = (0, get_accepted_files_1.default)(files, options);
    const rejected = (0, get_file_rejections_1.default)(files, options);
    return { accepted, rejected };
};
exports.default = splitFiles;
