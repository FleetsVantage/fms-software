"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePaginationBehavior = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const buttons_1 = require("../../buttons");
const icons_1 = require("../../icons");
const layers_1 = require("../../layers");
const scales_1 = require("../../scales");
const theme_1 = require("../../theme");
const typography_1 = require("../../typography");
const usePaginationBehavior = ({ page: inputPage = 1 } = {}) => {
    const [page, setPage] = (0, react_1.useState)(inputPage);
    const onNextPage = (0, react_1.useCallback)(() => {
        setPage(page => page + 1);
    }, []);
    const onPreviousPage = (0, react_1.useCallback)(() => {
        setPage(page => page - 1);
    }, []);
    const onPageChange = (0, react_1.useCallback)(index => {
        setPage(index);
    }, []);
    return {
        page,
        onNextPage,
        onPageChange,
        onPreviousPage
    };
};
exports.usePaginationBehavior = usePaginationBehavior;
const MAX_HANDLES_TO_SHOW = 7;
/* eslint-disable react/prop-types */
const PaginationButton = (_a) => {
    var { isSelected, onPageChange, page } = _a, rest = __rest(_a, ["isSelected", "onPageChange", "page"]);
    const { colors } = (0, theme_1.useTheme)();
    const isEllipsis = typeof page === 'string' && page === '...';
    const selectedProps = (0, react_1.useMemo)(() => {
        if (isSelected) {
            return {
                backgroundColor: colors.blue50,
                color: colors.blue400
            };
        }
        else {
            return {};
        }
    }, [isSelected, colors]);
    const onClick = (0, react_1.useCallback)(() => {
        onPageChange(page);
    }, [page, onPageChange]);
    if (isEllipsis) {
        return (react_1.default.createElement(typography_1.Text, { paddingX: (0, scales_1.majorScale)(1), paddingY: (0, scales_1.majorScale)(1), minWidth: (0, scales_1.majorScale)(4), textAlign: "center", "aria-label": "Pagination overflow" }, page));
    }
    return (react_1.default.createElement(buttons_1.Button, Object.assign({ "aria-current": isSelected, "aria-label": `Page ${page}`, onClick: onClick, minWidth: (0, scales_1.majorScale)(4), paddingX: (0, scales_1.majorScale)(1) }, rest, selectedProps)));
};
/* eslint-enable react/prop-types */
const range = (start, stop) => {
    const output = [];
    for (let i = start; i <= stop; i++) {
        output.push(i);
    }
    return output;
};
const getPaginationButtonContent = ({ page, totalPages }) => {
    if (totalPages <= MAX_HANDLES_TO_SHOW) {
        return range(1, totalPages);
    }
    if (totalPages > MAX_HANDLES_TO_SHOW && page <= 4) {
        return [...range(1, 5), '...', totalPages];
    }
    if (totalPages - page < 4) {
        return [1, '...', ...range(totalPages - 4, totalPages)];
    }
    return [1, '...', ...range(page - 1, page + 1), '...', totalPages];
};
const noop = () => { };
const Pagination = (0, react_1.memo)((0, react_1.forwardRef)(function Pagination(_a, ref) {
    var { onNextPage = noop, onPageChange = noop, onPreviousPage = noop, page = 1, totalPages } = _a, rest = __rest(_a, ["onNextPage", "onPageChange", "onPreviousPage", "page", "totalPages"]);
    return (react_1.default.createElement(layers_1.Pane, Object.assign({ is: "nav", role: "navigation", "aria-label": "Pagination" }, rest, { ref: ref }),
        react_1.default.createElement(layers_1.Pane, { is: "ul", display: "flex", alignItems: "center", padding: 0 },
            react_1.default.createElement(layers_1.Pane, { is: "li", listStyle: "none" },
                react_1.default.createElement(buttons_1.IconButton, { appearance: "minimal", icon: icons_1.ChevronLeftIcon, disabled: page === 1, onClick: onPreviousPage, "aria-label": "Previous page" })),
            totalPages
                ? getPaginationButtonContent({ totalPages, page }).map((val, i) => {
                    const isSelected = val === page;
                    return (react_1.default.createElement(layers_1.Pane, { is: "li", listStyle: "none", key: `${val}-${i}` },
                        react_1.default.createElement(PaginationButton, { appearance: "minimal", isSelected: isSelected, page: val, onPageChange: onPageChange, marginX: (0, scales_1.minorScale)(1) / 2 }, val)));
                })
                : null,
            react_1.default.createElement(layers_1.Pane, { is: "li", listStyle: "none" },
                react_1.default.createElement(buttons_1.IconButton, { appearance: "minimal", icon: icons_1.ChevronRightIcon, disabled: totalPages ? page === totalPages : undefined, onClick: onNextPage, "aria-label": "Next page" })))));
}));
Pagination.propTypes = {
    /**
     * The current page that a user is on - defaults to 1.
     */
    page: prop_types_1.default.number.isRequired,
    /**
     * The total number of pages to render. If ommitted, the page numbers will not be shown to the end user.
     */
    totalPages: prop_types_1.default.number,
    /**
     * Callback handler when the next page button is clicked.
     */
    onNextPage: prop_types_1.default.func,
    /**
     * Callback handler when the previous page button is clicked.
     */
    onPreviousPage: prop_types_1.default.func,
    /**
     * Callback handler when a specific page # is clicked
     */
    onPageChange: prop_types_1.default.func
};
exports.default = Pagination;
