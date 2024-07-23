import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _typeof from "@babel/runtime/helpers/esm/typeof";
var _excluded = ["selectors"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { useMemo, useRef } from 'react';
import merge from 'lodash.merge';
import isEqual from 'react-fast-compare';
import { splitBoxProps } from 'ui-box';
import { useTheme, get, resolveThemeTokens } from '../theme';
/**
 * @typedef {object} StateStyles
 * @property {import('csstype').Properties} [_hover]
 * @property {import('csstype').Properties} [_active]
 * @property {import('csstype').Properties} [_disabled]
 * @property {import('csstype').Properties} [_focus]
 * @property {import('csstype').Properties} [_invalid]
 */

/**
 * @typedef {{ [placeholder in keyof StateStyles]: string }} PseudoSelectors
 */

/**
 * @typedef {object} StyleModifiers
 * @property {string} [appearance]
 * @property {string} [size]
 */

/** @typedef {import('ui-box').EnhancerProps & StateStyles} Style */

/**
 * @typedef {object} StyleConfig
 * @property {Style} baseStyle
 * @property {{ [appearance: string]: Style }} [appearances]
 * @property {{ [size: string]: Style }} [sizes]
 */

function maybeRun(value) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return typeof value === 'function' ? value.apply(void 0, args) : value;
}

function maybeRunDeep(raw) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  if (raw && _typeof(raw) === 'object') {
    var result = {};

    for (var _i = 0, _Object$keys = Object.keys(raw); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      result[key] = maybeRunDeep.apply(void 0, [raw[key]].concat(args));
    }

    return result;
  }

  return maybeRun.apply(void 0, [raw].concat(args));
}
/**
 * Combines styles from a styleConfig, with the given style modifiers (appearance, size, etc) and internal styles
 * @param {object} theme
 * @param {StyleModifiers} props
 * @param {StyleConfig} styleConfig
 * @param {import('ui-box').BoxCssProps<CssProps>} [internalStyles]
 * @returns {StyleConfig}
 */


function combineStyles(theme, props, styleConfig) {
  var internalStyles = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var config = maybeRun(styleConfig, theme, props);
  var baseStyle = maybeRunDeep(config.baseStyle, theme, props);
  var sizeStyle = maybeRunDeep(get(config, "sizes.".concat(props.size), {}), theme, props);
  var appearanceStyle = maybeRunDeep(get(config, "appearances.".concat(props.appearance), {}), theme, props);
  return merge({}, internalStyles, baseStyle, sizeStyle, appearanceStyle);
}
/**
 * Combines a styleConfig object with internal styles based on the theme + style modifiers (props)
 * and returns a memoized style object
 * @returns {StyleConfig}
 */


function useMergedStyles(theme, props, styleConfig, internalStyles) {
  var styleRef = useRef({});
  return useMemo(function () {
    var combinedStyles = combineStyles(theme, props, styleConfig, internalStyles);

    if (!isEqual(styleRef.current, combinedStyles)) {
      styleRef.current = combinedStyles;
    }

    return styleRef.current;
  }, [theme, props, styleConfig, internalStyles]);
}
/**
 * Split up the style props into box-ready props (selectors + spreadable props)
 */


function useBoxProps(styleProps, placeholderSelectors) {
  return useMemo(function () {
    // Split the resulting style object into ui-box-compatible props and the rest
    var _splitBoxProps = splitBoxProps(styleProps),
        _splitBoxProps$matche = _splitBoxProps.matchedProps,
        _splitBoxProps$matche2 = _splitBoxProps$matche.selectors,
        actualSelectors = _splitBoxProps$matche2 === void 0 ? {} : _splitBoxProps$matche2,
        matchedProps = _objectWithoutProperties(_splitBoxProps$matche, _excluded),
        remainingProps = _splitBoxProps.remainingProps;
    /** @type {import('ui-box').EnhancerProps['selectors']} */


    var selectors = {}; // Swap out pseudo selector placeholders for their actual css selector strings

    for (var _i2 = 0, _Object$keys2 = Object.keys(actualSelectors); _i2 < _Object$keys2.length; _i2++) {
      var k = _Object$keys2[_i2];
      var key = k in placeholderSelectors ? placeholderSelectors[k] : k;
      selectors[key] = actualSelectors[k];
    }

    var result = _objectSpread({}, matchedProps);

    if (!isEqual({}, remainingProps)) {
      result.style = remainingProps;
    }

    if (!isEqual({}, selectors)) {
      result.selectors = selectors;
    }

    return result;
  }, [styleProps, placeholderSelectors]);
}
/**
 * Takes a styleConfig object and outputs `boxProps` that can be spread on a Box component
 * @param {string} componentKey the name of the component in the theme
 * @param {StyleModifiers} props props that modify the resulting visual style (e.g. `size` or `appearance`)
 * @param {PseudoSelectors} placeholderSelectors mapping for the component between states and actual pseudo selectors
 * @param {import('ui-box').BoxCssProps<CssProps>} [internalStyles] additional styles that are specified internally, separate from the visual styles
 * @returns {{ selectors: import('ui-box').EnhancerProps['selectors'], style: import('react').CSSProperties } & import('ui-box').EnhancerProps}
 */


export function useStyleConfig(componentKey, props, placeholderSelectors, internalStyles) {
  var theme = useTheme(); // Get the component style object from the theme

  var componentStyles = get(theme, "components.".concat(componentKey)) || {}; // Merges the theme styles with the modifiers/props (appearance, size, etc)

  var mergedStyles = useMergedStyles(theme, props, componentStyles, internalStyles); // Resolve theme token strings found throughout the style object

  var styles = useMemo(function () {
    return resolveThemeTokens(theme, mergedStyles);
  }, [theme, mergedStyles]); // Finally, split up the styles based which ones Box supports and the rest construct an inline style object

  return useBoxProps(styles, placeholderSelectors);
}