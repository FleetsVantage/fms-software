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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const buttons_1 = require("../../buttons");
const layers_1 = require("../../layers");
const scales_1 = require("../../scales");
const theme_1 = require("../../theme");
const typography_1 = require("../../typography");
/* eslint-disable react/prop-types */
const HorizontalOrientation = (0, react_1.memo)(function HorizontalOrientation({ anchorCta, background, description, icon, iconBgColor, primaryCta, title }) {
    const hasFooter = primaryCta || anchorCta;
    const { colors } = (0, theme_1.useTheme)();
    const backgroundColor = background === 'light' ? 'white' : colors.gray75;
    return (react_1.default.createElement(layers_1.Pane, { width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: (0, scales_1.majorScale)(6), backgroundColor: backgroundColor, justifyContent: "center" },
        react_1.default.createElement(layers_1.Pane, { display: "flex", alignItems: "flex-start", flex: 1, height: "100%" },
            react_1.default.createElement(layers_1.Pane, { paddingRight: (0, scales_1.majorScale)(6) },
                react_1.default.createElement(layers_1.Pane, { display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", backgroundColor: iconBgColor, width: (0, scales_1.majorScale)(9), height: (0, scales_1.majorScale)(9) }, react_1.default.cloneElement(icon, { size: (0, scales_1.majorScale)(4) }))),
            react_1.default.createElement(layers_1.Pane, { display: "flex", flexDirection: "column", paddingRight: (0, scales_1.majorScale)(6) },
                react_1.default.createElement(typography_1.Heading, { size: 500, color: colors.gray700 }, title),
                description && (react_1.default.createElement(typography_1.Paragraph, { color: "muted", marginTop: (0, scales_1.majorScale)(2) }, description)),
                hasFooter && (react_1.default.createElement(layers_1.Pane, { marginTop: (0, scales_1.majorScale)(5), display: "flex" },
                    primaryCta,
                    primaryCta && anchorCta && react_1.default.cloneElement(anchorCta, { marginLeft: (0, scales_1.majorScale)(4) }),
                    !primaryCta && anchorCta))))));
});
/* eslint-enable react/prop-types */
/* eslint-disable react/prop-types */
const VerticalOrientation = (0, react_1.memo)(function VerticalOrientation({ background, description, icon, iconBgColor, primaryCta, title }) {
    const { colors } = (0, theme_1.useTheme)();
    const backgroundColor = background === 'light' ? 'white' : colors.gray75;
    return (react_1.default.createElement(layers_1.Pane, { display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", flex: 1, backgroundColor: backgroundColor, paddingX: (0, scales_1.majorScale)(5), paddingY: (0, scales_1.majorScale)(5), height: "100%", width: "100%" },
        react_1.default.createElement(layers_1.Pane, { display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", backgroundColor: iconBgColor, width: (0, scales_1.majorScale)(7), height: (0, scales_1.majorScale)(7) }, react_1.default.cloneElement(icon, { size: (0, scales_1.majorScale)(3) })),
        react_1.default.createElement(typography_1.Heading, { marginTop: (0, scales_1.majorScale)(2), textAlign: "center", color: colors.gray700 }, title),
        react_1.default.createElement(typography_1.Paragraph, { marginTop: (0, scales_1.majorScale)(2), textAlign: "center", color: colors.gray700 }, description),
        primaryCta && react_1.default.cloneElement(primaryCta, { marginTop: (0, scales_1.minorScale)(5) })));
});
/* eslint-enable react/prop-types */
const PrimaryButton = props => {
    return react_1.default.createElement(buttons_1.Button, Object.assign({ appearance: "primary" }, props));
};
const LinkButton = props => {
    return react_1.default.createElement(typography_1.Link, Object.assign({}, props, { size: 300, lineHeight: "34px" }));
};
const EmptyState = (0, react_1.memo)(function EmptyState({ anchorCta, background = 'light', description, icon, iconBgColor, orientation = 'horizontal', primaryCta, title }) {
    if (orientation === 'vertical') {
        return (react_1.default.createElement(VerticalOrientation, { title: title, icon: icon, iconBgColor: iconBgColor, background: background, description: description, primaryCta: primaryCta }));
    }
    else {
        return (react_1.default.createElement(HorizontalOrientation, { title: title, icon: icon, iconBgColor: iconBgColor, background: background, description: description, primaryCta: primaryCta, anchorCta: anchorCta }));
    }
});
EmptyState.PrimaryButton = PrimaryButton;
EmptyState.LinkButton = LinkButton;
EmptyState.propTypes = {
    /** The title of the empty state */
    title: prop_types_1.default.string.isRequired,
    /** The icon used in the empty state */
    icon: prop_types_1.default.element.isRequired,
    /** The background color used for the icon circle */
    iconBgColor: prop_types_1.default.string.isRequired,
    /** The direction in which to align the empty state elements */
    orientation: prop_types_1.default.oneOf(['vertical', 'horizontal']),
    /** The description of the empty state */
    description: prop_types_1.default.node,
    /** The background used for the entire empty state container */
    background: prop_types_1.default.oneOf(['light', 'dark']),
    /** The primary CTA of the empty state */
    primaryCta: prop_types_1.default.element,
    /** The link CTA of the empty state */
    anchorCta: prop_types_1.default.element
};
exports.default = EmptyState;
