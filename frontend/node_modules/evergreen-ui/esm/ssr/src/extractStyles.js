import React from 'react';
import { extractStyles as boxExtractStyles } from 'ui-box';
export default function extractStyles() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _boxExtractStyles = boxExtractStyles(),
      cache = _boxExtractStyles.cache,
      styles = _boxExtractStyles.styles;

  var evergreenCache = {
    uiBoxCache: cache
  };
  var scriptProps = {
    type: 'application/json',
    id: 'evergreen-hydrate',
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(evergreenCache)
    }
  };

  if (options.nonce) {
    scriptProps.nonce = options.nonce;
  }

  return {
    css: styles,
    cache: evergreenCache,
    hydrationScript: /*#__PURE__*/React.createElement("script", scriptProps)
  };
}