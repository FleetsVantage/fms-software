import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["accept", "browseOrReplaceText", "capture", "className", "disabled", "height", "inputText", "multiple", "name", "onBlur", "onChange", "placeholder", "required"];
import React, { memo, forwardRef, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { Button } from '../../buttons';
import safeInvoke from '../../lib/safe-invoke';
import { TextInput } from '../../text-input';
export var CLASS_PREFIX = 'evergreen-file-picker';
var ROOT_CLASS_NAME = "".concat(CLASS_PREFIX, "-root");

var getBrowseOrReplaceText = function getBrowseOrReplaceText(fileCount) {
  var action = fileCount === 0 ? 'Select' : 'Replace';
  var fileLabel = fileCount > 1 ? 'files' : 'file';
  return "".concat(action, " ").concat(fileLabel);
};

var getInputValue = function getInputValue(files) {
  if (files.length === 1) {
    return files[0].name;
  }

  if (files.length > 1) {
    return "".concat(files.length, " files");
  }

  return '';
};

var FilePicker = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function FilePicker(props, ref) {
  var accept = props.accept,
      _props$browseOrReplac = props.browseOrReplaceText,
      browseOrReplaceText = _props$browseOrReplac === void 0 ? getBrowseOrReplaceText : _props$browseOrReplac,
      capture = props.capture,
      className = props.className,
      disabled = props.disabled,
      _props$height = props.height,
      height = _props$height === void 0 ? 32 : _props$height,
      _props$inputText = props.inputText,
      inputText = _props$inputText === void 0 ? getInputValue : _props$inputText,
      multiple = props.multiple,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? 'Select a file to upload…' : _props$placeholder,
      required = props.required,
      rest = _objectWithoutProperties(props, _excluded);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var fileInputRef = useRef();
  var handleFileChange = useCallback(function (e) {
    // Firefox returns the same array instance each time for some reason
    var filesCopy = _toConsumableArray(e.target.files);

    setFiles(filesCopy);
    safeInvoke(onChange, filesCopy);
  }, [onChange]);
  var handleButtonClick = useCallback(function () {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, []);
  var handleBlur = useCallback(function (e) {
    // Setting e.target.files to an array fails. It must be a FileList
    if (e && e.target) {
      e.target.files = fileInputRef.current && fileInputRef.current.files;
    }

    safeInvoke(onBlur, e);
  }, [onBlur]);
  var rootClassNames = className ? "".concat(ROOT_CLASS_NAME, " ").concat(className) : ROOT_CLASS_NAME;
  return /*#__PURE__*/React.createElement(Box, _extends({
    display: "flex",
    className: rootClassNames,
    ref: ref
  }, rest), /*#__PURE__*/React.createElement(Box, {
    ref: fileInputRef,
    className: "".concat(CLASS_PREFIX, "-file-input"),
    is: "input",
    type: "file",
    name: name,
    accept: accept,
    required: required,
    multiple: multiple,
    disabled: disabled,
    capture: capture,
    onChange: handleFileChange,
    display: "none"
  }), /*#__PURE__*/React.createElement(TextInput, {
    className: "".concat(CLASS_PREFIX, "-text-input"),
    readOnly: true,
    value: inputText(files),
    placeholder: placeholder // There's a weird specifity issue when there's two differently sized inputs on the page
    ,
    borderTopRightRadius: "0 !important",
    borderBottomRightRadius: "0 !important",
    height: height,
    flex: 1,
    textOverflow: "ellipsis",
    onBlur: handleBlur
  }), /*#__PURE__*/React.createElement(Button, {
    className: "".concat(CLASS_PREFIX, "-button"),
    onClick: handleButtonClick,
    disabled: disabled,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    marginLeft: -1,
    height: height,
    flexShrink: 0,
    type: "button",
    onBlur: handleBlur
  }, browseOrReplaceText(files.length)));
}));
FilePicker.propTypes = {
  /**
   * Name attribute of the input.
   */
  name: PropTypes.string,

  /**
   * The accept attribute of the input.
   */
  accept: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

  /**
   * When true, the file picker is required.
   */
  required: PropTypes.bool,

  /**
   * When true, accept multiple files.
   */
  multiple: PropTypes.bool,

  /**
   * When true, the filepicker is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The capture attribute of the input.
   */
  capture: PropTypes.bool,

  /**
   * The height of the file picker.
   */
  height: PropTypes.number,

  /**
   * Function called when onChange is fired.
   * (files: FileList) => void
   */
  onChange: PropTypes.func,

  /**
   * Function called when onBlur is fired.
   * (event: React.FocusEvent) => void
   */
  onBlur: PropTypes.func,

  /**
   * Placeholder of the text input
   */
  placeholder: PropTypes.string,

  /**
   * Class name passed to the FilePicker.
   * Only use this if you know what you are doing.
   */
  className: PropTypes.string,

  /**
   * Function that returns the call-to-action button text for selecting files.
   * @type {(fileCount: number) => string}
   */
  browseOrReplaceText: PropTypes.func,

  /**
   * Function that returns the text in the input field.
   * @type {(files: File[]) => string}
   */
  inputText: PropTypes.func
};
export default FilePicker;