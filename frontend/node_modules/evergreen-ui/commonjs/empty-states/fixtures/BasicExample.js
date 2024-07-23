"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const icons_1 = require("../../icons");
const layers_1 = require("../../layers");
const theme_1 = require("../../theme");
const EmptyState_1 = __importDefault(require("../src/EmptyState"));
const BasicExample = () => {
    const { colors } = (0, theme_1.useTheme)();
    return (react_1.default.createElement(layers_1.Pane, { maxWidth: 1152 },
        react_1.default.createElement(EmptyState_1.default, { background: "dark", title: "You need permission to access these sources", orientation: "horizontal", icon: react_1.default.createElement(icons_1.LockIcon, { color: colors.orange500 }), iconBgColor: colors.orange100, description: "If you believe you should have accesss to this page, please check with your Workspace Owner or request access below.", primaryCta: react_1.default.createElement(EmptyState_1.default.PrimaryButton, null, "Request Access") })));
};
exports.default = BasicExample;
