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
exports.clearStyles = exports.extractStyles = exports.hydrate = exports.propEnhancers = exports.propAliases = exports.propNames = exports.propTypes = exports.transform = exports.text = exports.spacing = exports.position = exports.overflow = exports.opacity = exports.list = exports.layout = exports.interaction = exports.flex = exports.dimensions = exports.boxShadow = exports.borders = exports.borderRadius = exports.background = exports.configureSafeHref = exports.setClassNamePrefix = exports.splitBoxProps = exports.splitProps = exports.keyframes = exports.default = void 0;
const cache = __importStar(require("./cache"));
const styles = __importStar(require("./styles"));
var box_1 = require("./box");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(box_1).default; } });
var keyframes_1 = require("./keyframes");
Object.defineProperty(exports, "keyframes", { enumerable: true, get: function () { return __importDefault(keyframes_1).default; } });
var split_props_1 = require("./utils/split-props");
Object.defineProperty(exports, "splitProps", { enumerable: true, get: function () { return __importDefault(split_props_1).default; } });
var split_box_props_1 = require("./utils/split-box-props");
Object.defineProperty(exports, "splitBoxProps", { enumerable: true, get: function () { return __importDefault(split_box_props_1).default; } });
var get_class_name_1 = require("./get-class-name");
Object.defineProperty(exports, "setClassNamePrefix", { enumerable: true, get: function () { return get_class_name_1.setClassNamePrefix; } });
var safeHref_1 = require("./utils/safeHref");
Object.defineProperty(exports, "configureSafeHref", { enumerable: true, get: function () { return safeHref_1.configureSafeHref; } });
var index_1 = require("./enhancers/index");
Object.defineProperty(exports, "background", { enumerable: true, get: function () { return index_1.background; } });
Object.defineProperty(exports, "borderRadius", { enumerable: true, get: function () { return index_1.borderRadius; } });
Object.defineProperty(exports, "borders", { enumerable: true, get: function () { return index_1.borders; } });
Object.defineProperty(exports, "boxShadow", { enumerable: true, get: function () { return index_1.boxShadow; } });
Object.defineProperty(exports, "dimensions", { enumerable: true, get: function () { return index_1.dimensions; } });
Object.defineProperty(exports, "flex", { enumerable: true, get: function () { return index_1.flex; } });
Object.defineProperty(exports, "interaction", { enumerable: true, get: function () { return index_1.interaction; } });
Object.defineProperty(exports, "layout", { enumerable: true, get: function () { return index_1.layout; } });
Object.defineProperty(exports, "list", { enumerable: true, get: function () { return index_1.list; } });
Object.defineProperty(exports, "opacity", { enumerable: true, get: function () { return index_1.opacity; } });
Object.defineProperty(exports, "overflow", { enumerable: true, get: function () { return index_1.overflow; } });
Object.defineProperty(exports, "position", { enumerable: true, get: function () { return index_1.position; } });
Object.defineProperty(exports, "spacing", { enumerable: true, get: function () { return index_1.spacing; } });
Object.defineProperty(exports, "text", { enumerable: true, get: function () { return index_1.text; } });
Object.defineProperty(exports, "transform", { enumerable: true, get: function () { return index_1.transform; } });
Object.defineProperty(exports, "propTypes", { enumerable: true, get: function () { return index_1.propTypes; } });
Object.defineProperty(exports, "propNames", { enumerable: true, get: function () { return index_1.propNames; } });
Object.defineProperty(exports, "propAliases", { enumerable: true, get: function () { return index_1.propAliases; } });
Object.defineProperty(exports, "propEnhancers", { enumerable: true, get: function () { return index_1.propEnhancers; } });
exports.hydrate = cache.hydrate;
function extractStyles() {
    const output = {
        cache: cache.entries(),
        styles: styles.getAll()
    };
    clearStyles();
    return output;
}
exports.extractStyles = extractStyles;
function clearStyles() {
    cache.clear();
    styles.clear();
}
exports.clearStyles = clearStyles;
