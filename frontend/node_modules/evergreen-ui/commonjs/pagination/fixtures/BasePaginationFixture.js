"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const __1 = require("../");
const BasePaginationFixture = () => {
    const { onNextPage, onPageChange, onPreviousPage, page } = (0, __1.usePaginationBehavior)({ page: 1 });
    return (react_1.default.createElement(__1.Pagination, { page: page, totalPages: 10, onNextPage: onNextPage, onPreviousPage: onPreviousPage, onPageChange: onPageChange }));
};
exports.default = BasePaginationFixture;
