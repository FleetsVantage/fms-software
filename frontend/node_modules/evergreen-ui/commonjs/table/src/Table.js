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
const react_1 = __importStar(require("react"));
const hooks_1 = require("../../hooks");
const layers_1 = require("../../layers");
const EditableCell_1 = __importDefault(require("./EditableCell"));
const SearchTableHeaderCell_1 = __importDefault(require("./SearchTableHeaderCell"));
const SelectMenuCell_1 = __importDefault(require("./SelectMenuCell"));
const TableBody_1 = __importDefault(require("./TableBody"));
const TableCell_1 = __importDefault(require("./TableCell"));
const TableHead_1 = __importDefault(require("./TableHead"));
const TableHeaderCell_1 = __importDefault(require("./TableHeaderCell"));
const TableRow_1 = __importDefault(require("./TableRow"));
const TableVirtualBody_1 = __importDefault(require("./TableVirtualBody"));
const TextTableCell_1 = __importDefault(require("./TextTableCell"));
const TextTableHeaderCell_1 = __importDefault(require("./TextTableHeaderCell"));
const emptyObject = {};
const Table = (0, react_1.memo)(function Table(props) {
    const { children } = props, rest = __rest(props, ["children"]);
    const themedProps = (0, hooks_1.useStyleConfig)('Table', emptyObject, emptyObject, emptyObject);
    return (react_1.default.createElement(layers_1.Pane, Object.assign({}, themedProps, rest), children));
});
Table.Body = TableBody_1.default;
Table.VirtualBody = TableVirtualBody_1.default;
Table.Head = TableHead_1.default;
Table.HeaderCell = TableHeaderCell_1.default;
Table.TextHeaderCell = TextTableHeaderCell_1.default;
Table.SearchHeaderCell = SearchTableHeaderCell_1.default;
Table.Row = TableRow_1.default;
Table.Cell = TableCell_1.default;
Table.TextCell = TextTableCell_1.default;
Table.EditableCell = EditableCell_1.default;
Table.SelectMenuCell = SelectMenuCell_1.default;
Table.propTypes = Object.assign({}, layers_1.Pane.propTypes);
exports.default = Table;
