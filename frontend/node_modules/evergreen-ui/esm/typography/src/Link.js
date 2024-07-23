import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "color"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
import Text from './Text';
var internalStyles = {
  textDecoration: 'underline'
};
var pseudoSelectors = {
  _hover: '&:hover',
  _active: '&:active',
  _focus: '&:focus'
};
var Link = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function Link(props, ref) {
  var className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      restProps = _objectWithoutProperties(props, _excluded);

  var themedProps = useStyleConfig('Link', {
    color: color
  }, pseudoSelectors, internalStyles);
  return /*#__PURE__*/React.createElement(Text, _extends({
    is: "a",
    ref: ref,
    className: className
  }, themedProps, restProps));
}));
Link.propTypes = _objectSpread(_objectSpread({}, Text.propTypes), {}, {
  /**
   * This attribute names a relationship of the linked document to the current document.
   * Common use case is: rel="noopener noreferrer".
   */
  rel: PropTypes.string,

  /**
   * Specifies the URL of the linked resource. A URL might be absolute or relative.
   */
  href: PropTypes.string,

  /**
   * Target attribute, common use case is target="_blank."
   */
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),

  /**
   * The color (and styling) of the Link. Can be default, blue, green or neutral.
   */
  color: PropTypes.string,

  /**
   * Class name passed to the link.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
});
export default Link;