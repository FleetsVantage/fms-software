"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const buttons_1 = require("../../buttons");
const icons_1 = require("../../icons");
const layers_1 = require("../../layers");
const popover_1 = require("../../popover");
const scales_1 = require("../../scales");
const theme_1 = require("../../theme");
const EmptyState_1 = __importDefault(require("../src/EmptyState"));
const SmallMinimalExample = props => {
    const { colors } = (0, theme_1.useTheme)();
    return (react_1.default.createElement(layers_1.Pane, { marginBottom: (0, scales_1.majorScale)(50) },
        react_1.default.createElement(popover_1.Popover, Object.assign({}, props.popoverProps, { content: react_1.default.createElement(layers_1.Pane, { width: 300, height: "auto" },
                react_1.default.createElement(EmptyState_1.default, { background: "light", title: "No source selected", orientation: "vertical", icon: react_1.default.createElement(icons_1.HandUpIcon, { color: colors.gray500 }), iconBgColor: colors.gray300 })) }),
            react_1.default.createElement(buttons_1.Button, null, "Trigger Popover"))));
};
SmallMinimalExample.propTypes = {
    popoverProps: prop_types_1.default.any
};
exports.default = SmallMinimalExample;
