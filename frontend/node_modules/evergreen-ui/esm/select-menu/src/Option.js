import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "disabled", "height", "isHighlighted", "isSelectable", "isSelected", "item", "onDeselect", "onSelect", "style"],
    _excluded2 = ["style"];
import React, { memo, forwardRef } from 'react';
import merge from 'lodash.merge';
import PropTypes from 'prop-types';
import { useStyleConfig } from '../../hooks';
import { Pane } from '../../layers';
import TableRow from '../../table/src/TableRow';
import TextTableCell from '../../table/src/TextTableCell';
export var pseudoSelectors = {
  _active: '&[aria-current="true"]:active,&[data-isselectable="true"]:active',
  _before: '&:before',
  _disabled: '&[disabled]',
  _focus: ':focus',
  _hover: ':hover',
  _isSelectable: '&[data-isselectable="true"]',
  _selected: '&[aria-current="true"]'
};
var internalStyles = {
  alignItems: 'center',
  display: 'flex'
};
var emptyObject = {};
var Option = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function Option(props, ref) {
  var children = props.children,
      disabled = props.disabled,
      height = props.height,
      isHighlighted = props.isHighlighted,
      isSelectable = props.isSelectable,
      isSelected = props.isSelected,
      item = props.item,
      onDeselect = props.onDeselect,
      onSelect = props.onSelect,
      styleProp = props.style,
      rest = _objectWithoutProperties(props, _excluded);

  var _useStyleConfig = useStyleConfig('Option', emptyObject, pseudoSelectors, internalStyles),
      themedStyle = _useStyleConfig.style,
      themedProps = _objectWithoutProperties(_useStyleConfig, _excluded2);

  var style = merge({}, styleProp, themedStyle);
  return /*#__PURE__*/React.createElement(TableRow, _extends({
    isSelectable: isSelectable && !disabled,
    isHighlighted: isHighlighted,
    onSelect: onSelect,
    onDeselect: onDeselect,
    isSelected: isSelected,
    style: style
  }, themedProps, rest, {
    ref: ref
  }), /*#__PURE__*/React.createElement(TextTableCell, {
    borderRight: null,
    flex: 1,
    alignSelf: "stretch",
    height: height,
    cursor: disabled ? 'default' : 'pointer'
  }, /*#__PURE__*/React.createElement(Pane, {
    alignItems: "center",
    display: "flex"
  }, children)));
}));
Option.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  height: PropTypes.number,
  isHighlighted: PropTypes.bool,
  isSelectable: PropTypes.bool,
  isSelected: PropTypes.bool,
  item: PropTypes.any,
  onDeselect: PropTypes.func,
  onSelect: PropTypes.func,
  style: PropTypes.any
};
export default Option;