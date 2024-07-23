"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shownWarnings = [];
exports.default = (condition, warning) => {
    if (condition && !shownWarnings.includes(warning)) {
        console.error(`Warning: ${warning}`);
        shownWarnings.push(warning);
    }
};
