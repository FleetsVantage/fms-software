import React, { memo } from 'react';
import PropTypes from 'prop-types';
import isFunction from '../../lib/is-function';
import { majorScale } from '../../scales';
import { useTheme } from '../../theme';
import { Text, Paragraph } from '../../typography';
var internalStyles = {
  marginTop: majorScale(3),
  pointerEvents: 'none'
};

var BrowseOrDragText = function BrowseOrDragText(props) {
  var getBrowseOrDragText = props.browseOrDragText,
      disabled = props.disabled,
      maxFiles = props.maxFiles;
  var defaultOrDragCopy = "or drag ".concat(maxFiles === 1 ? 'a file' : 'files', " here");

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var ctaTextColor = disabled ? colors.gray500 : colors.blue400;

  if (!isFunction(getBrowseOrDragText)) {
    return /*#__PURE__*/React.createElement(Paragraph, internalStyles, /*#__PURE__*/React.createElement(Text, {
      color: ctaTextColor
    }, "Browse "), /*#__PURE__*/React.createElement(Text, {
      color: disabled ? colors.gray500 : colors.gray700
    }, defaultOrDragCopy));
  }

  var browseOrDragText = getBrowseOrDragText(maxFiles);

  if (typeof browseOrDragText === 'string') {
    return /*#__PURE__*/React.createElement(Paragraph, internalStyles, /*#__PURE__*/React.createElement(Text, {
      color: ctaTextColor
    }, browseOrDragText));
  }

  return browseOrDragText;
};

BrowseOrDragText.propTypes = {
  /**
   * Function to return a string or component for the 'Browse or drag' text
   * @type {(maxFiles: number) => React.ReactNode}
   */
  browseOrDragText: PropTypes.func,

  /**
   * Renders the text in a muted color
   */
  disabled: PropTypes.bool,

  /**
   * Maximum number of files to accept
   */
  maxFiles: PropTypes.number
};
export default /*#__PURE__*/memo(BrowseOrDragText);