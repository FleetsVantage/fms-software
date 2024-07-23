"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isProduction = () => process.env.NODE_ENV === 'production';
exports.default = isProduction;
