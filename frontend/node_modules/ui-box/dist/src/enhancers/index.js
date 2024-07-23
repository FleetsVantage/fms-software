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
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propNames = exports.propTypes = exports.transition = exports.transform = exports.text = exports.svg = exports.spacing = exports.selectors = exports.resize = exports.position = exports.overflow = exports.outline = exports.opacity = exports.list = exports.layout = exports.interaction = exports.grid = exports.flex = exports.dimensions = exports.boxShadow = exports.borders = exports.borderRadius = exports.background = exports.animation = void 0;
const animation = __importStar(require("./animation"));
exports.animation = animation;
const background = __importStar(require("./background"));
exports.background = background;
const borderRadius = __importStar(require("./border-radius"));
exports.borderRadius = borderRadius;
const borders = __importStar(require("./borders"));
exports.borders = borders;
const boxShadow = __importStar(require("./box-shadow"));
exports.boxShadow = boxShadow;
const dimensions = __importStar(require("./dimensions"));
exports.dimensions = dimensions;
const flex = __importStar(require("./flex"));
exports.flex = flex;
const grid = __importStar(require("./grid"));
exports.grid = grid;
const interaction = __importStar(require("./interaction"));
exports.interaction = interaction;
const layout = __importStar(require("./layout"));
exports.layout = layout;
const list = __importStar(require("./list"));
exports.list = list;
const opacity = __importStar(require("./opacity"));
exports.opacity = opacity;
const outline = __importStar(require("./outline"));
exports.outline = outline;
const overflow = __importStar(require("./overflow"));
exports.overflow = overflow;
const position = __importStar(require("./position"));
exports.position = position;
const resize = __importStar(require("./resize"));
exports.resize = resize;
const selectors = __importStar(require("./selectors"));
exports.selectors = selectors;
const spacing = __importStar(require("./spacing"));
exports.spacing = spacing;
const svg = __importStar(require("./svg"));
exports.svg = svg;
const text = __importStar(require("./text"));
exports.text = text;
const transform = __importStar(require("./transform"));
exports.transform = transform;
const transition = __importStar(require("./transition"));
exports.transition = transition;
exports.propTypes = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, animation.propTypes), background.propTypes), borderRadius.propTypes), borders.propTypes), boxShadow.propTypes), dimensions.propTypes), flex.propTypes), grid.propTypes), interaction.propTypes), layout.propTypes), list.propTypes), opacity.propTypes), outline.propTypes), overflow.propTypes), position.propTypes), resize.propTypes), selectors.propTypes), spacing.propTypes), svg.propTypes), text.propTypes), transform.propTypes), transition.propTypes);
exports.propNames = Object.keys(exports.propTypes);
exports.propAliases = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, animation.propAliases), background.propAliases), borderRadius.propAliases), borders.propAliases), boxShadow.propAliases), dimensions.propAliases), flex.propAliases), grid.propAliases), interaction.propAliases), layout.propAliases), list.propAliases), opacity.propAliases), outline.propAliases), overflow.propAliases), position.propAliases), resize.propAliases), selectors.propAliases), spacing.propAliases), svg.propAliases), text.propAliases), transform.propAliases), transition.propAliases);
exports.propValidators = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, animation.propValidators), background.propValidators), borderRadius.propValidators), borders.propValidators), boxShadow.propValidators), dimensions.propValidators), flex.propValidators), grid.propValidators), interaction.propValidators), layout.propValidators), list.propValidators), opacity.propValidators), outline.propValidators), overflow.propValidators), position.propValidators), resize.propValidators), selectors.propValidators), spacing.propValidators), svg.propValidators), text.propValidators), transform.propValidators), transition.propValidators);
exports.propEnhancers = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, animation.propEnhancers), background.propEnhancers), borderRadius.propEnhancers), borders.propEnhancers), boxShadow.propEnhancers), dimensions.propEnhancers), flex.propEnhancers), grid.propEnhancers), interaction.propEnhancers), layout.propEnhancers), list.propEnhancers), opacity.propEnhancers), outline.propEnhancers), overflow.propEnhancers), position.propEnhancers), resize.propEnhancers), selectors.propEnhancers), spacing.propEnhancers), svg.propEnhancers), text.propEnhancers), transform.propEnhancers), transition.propEnhancers);
