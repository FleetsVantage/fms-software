"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const icons_1 = require("../../icons");
const layers_1 = require("../../layers");
const scales_1 = require("../../scales");
const table_1 = require("../../table");
const theme_1 = require("../../theme");
const EmptyState_1 = __importDefault(require("../src/EmptyState"));
const TableWithLinkExample = () => {
    const { colors } = (0, theme_1.useTheme)();
    return (react_1.default.createElement(layers_1.Pane, { marginBottom: (0, scales_1.majorScale)(8) },
        react_1.default.createElement(table_1.Table, { maxWidth: 1152, width: "100%" },
            react_1.default.createElement(table_1.Table.Head, null,
                react_1.default.createElement(table_1.Table.TextHeaderCell, null, "Name"),
                react_1.default.createElement(table_1.Table.TextHeaderCell, null, "Status"),
                react_1.default.createElement(table_1.Table.TextHeaderCell, null, "Created At ")),
            react_1.default.createElement(table_1.Table.Body, { height: "auto" },
                react_1.default.createElement(EmptyState_1.default, { background: "light", title: "No audiences found", orientation: "horizontal", icon: react_1.default.createElement(icons_1.SearchIcon, { color: colors.gray500 }), iconBgColor: colors.gray200, description: "Click the button below to create a new Audience. Once done, you will see it come up in this list.", anchorCta: react_1.default.createElement(EmptyState_1.default.LinkButton, { href: "https://segment.com/docs/", target: "_blank" }, "Learn more about compute time.") })))));
};
exports.default = TableWithLinkExample;
