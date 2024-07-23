"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hydrate = void 0;
const ui_box_1 = require("ui-box");
const canUseDom_1 = __importDefault(require("../../lib/canUseDom"));
/**
 * You shouldn't have to manually run this.
 * This is mainly an export for testing purposes.
 */
function hydrate(hydration) {
    if (hydration.uiBoxCache) {
        (0, ui_box_1.hydrate)(hydration.uiBoxCache);
    }
}
exports.hydrate = hydrate;
function autoHydrate() {
    if (canUseDom_1.default) {
        const hydration = document.querySelector('#evergreen-hydrate');
        if (hydration) {
            try {
                const hydrationObject = JSON.parse(hydration.innerHTML);
                hydrate(hydrationObject);
            }
            catch (error) {
                console.error('Evergreen automatic hydration object is invalid JSON', error);
            }
        }
    }
}
exports.default = autoHydrate;
