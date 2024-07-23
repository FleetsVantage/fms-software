"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoHydrate = exports.extractStyles = void 0;
function extractStyles() {
    console.warn('extractStyles returns null in the UMD bundle. Please use cjs or esm when you develop an SSR app.');
    return null;
}
exports.extractStyles = extractStyles;
function autoHydrate() {
    console.warn('autoHydrate is an empty function in the UMD bundle. Please use cjs or esm when you develop an SSR app.');
}
exports.autoHydrate = autoHydrate;
