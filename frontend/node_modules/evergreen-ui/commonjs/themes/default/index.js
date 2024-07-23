"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = __importDefault(require("./components"));
const tokens_1 = __importDefault(require("./tokens"));
exports.default = Object.assign(Object.assign({}, tokens_1.default), { 
    // Component-specific theming
    components: components_1.default });
