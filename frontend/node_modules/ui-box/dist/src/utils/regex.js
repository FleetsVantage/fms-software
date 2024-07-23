"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unsafeClassNameCharacters = exports.spacesOutsideParentheses = void 0;
exports.spacesOutsideParentheses = / (?=([^()]*\([^()]*\))*[^()]*$)/g;
exports.unsafeClassNameCharacters = /[^_a-zA-Z0-9-]/g;
