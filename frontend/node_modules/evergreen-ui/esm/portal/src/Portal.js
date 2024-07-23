import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useIsomorphicLayoutEffect } from '../../hooks'; // Based on https://github.com/mantinedev/mantine/blob/master/src/mantine-core/src/Portal/Portal.tsx

var Portal = function Portal(props) {
  var children = props.children;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      mounted = _useState2[0],
      setMounted = _useState2[1];

  var ref = useRef();
  useIsomorphicLayoutEffect(function () {
    setMounted(true);
    ref.current = document.createElement('div');
    ref.current.setAttribute('evergreen-portal-container', '');
    document.body.appendChild(ref.current);
    return function () {
      document.body.removeChild(ref.current);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return /*#__PURE__*/createPortal(children, ref.current);
};

Portal.propTypes = {
  children: PropTypes.node.isRequired
};
export default Portal;