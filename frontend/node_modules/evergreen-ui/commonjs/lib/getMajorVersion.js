"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param {string} version
 * @returns {number} The major version
 */
function getMajorVersion(version) {
    const majorVersion = parseInt(version, 10);
    return majorVersion;
}
exports.default = getMajorVersion;
