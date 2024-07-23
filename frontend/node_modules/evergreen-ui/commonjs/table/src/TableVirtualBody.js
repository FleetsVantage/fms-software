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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_tiny_virtual_list_1 = __importDefault(require("@segment/react-tiny-virtual-list"));
const lodash_debounce_1 = __importDefault(require("lodash.debounce"));
const prop_types_1 = __importDefault(require("prop-types"));
const hooks_1 = require("../../hooks");
const layers_1 = require("../../layers");
const TableVirtualBody = (0, react_1.memo)(function TableVirtualBody(props) {
    const { allowAutoHeight = false, children: inputChildren, defaultHeight = 48, estimatedItemSize, height: paneHeight, onScroll, overscanCount = 5, scrollOffset, scrollToAlignment, scrollToIndex, useAverageAutoHeightEstimation = true } = props, rest = __rest(props, ["allowAutoHeight", "children", "defaultHeight", "estimatedItemSize", "height", "onScroll", "overscanCount", "scrollOffset", "scrollToAlignment", "scrollToIndex", "useAverageAutoHeightEstimation"]);
    const forceUpdate = (0, hooks_1.useForceUpdate)();
    let autoHeights = [];
    let autoHeightRefs = [];
    let averageAutoHeight = defaultHeight;
    const [paneRef, setPaneRef] = (0, react_1.useState)();
    const [isIntegerHeight, setIsIntegerHeight] = (0, react_1.useState)(false);
    const [calculatedHeight, setCalculatedHeight] = (0, react_1.useState)(0);
    const requestId = (0, react_1.useRef)(null);
    const updateOnResize = () => {
        autoHeights = [];
        autoHeightRefs = [];
        averageAutoHeight = defaultHeight;
        // Simply return when we now the height of the pane is fixed.
        if (isIntegerHeight)
            return;
        // Return if we are in a weird edge case in which the ref is no longer valid.
        if (paneRef && paneRef instanceof Node) {
            const tempCalculatedHeight = paneRef.offsetHeight;
            if (tempCalculatedHeight > 0) {
                // Save the calculated height which is needed for the VirtualList.
                setCalculatedHeight(tempCalculatedHeight);
                // Prevent updateOnResize being called recursively when there is a valid height.
                return;
            }
        }
        // When height is still 0 (or paneRef is not valid) try recursively until success.
        requestId.current = requestAnimationFrame(() => {
            updateOnResize();
        });
    };
    const onResize = (0, lodash_debounce_1.default)(updateOnResize, 200);
    (0, react_1.useEffect)(() => {
        if (props.height !== calculatedHeight) {
            setIsIntegerHeight(Number.isInteger(props.height));
        }
    }, [props.height]);
    (0, react_1.useEffect)(() => {
        if (paneRef && paneRef instanceof Node) {
            updateOnResize();
        }
    }, [paneRef]);
    // Mirrors functionality of componentDidMount and componentWillUnmount.
    // By passing an empty array, will only run on first render, the function returned
    // will be called on component unmount
    (0, react_1.useEffect)(() => {
        updateOnResize();
        window.addEventListener('resize', onResize, false);
        return () => {
            window.removeEventListener('resize', onResize);
            cancelAnimationFrame(requestId.current);
        };
    }, []);
    /**
     * This function will process all items that have height="auto" set.
     * It will loop through all refs and get calculate the height.
     */
    const processAutoHeights = () => {
        let isUpdated = false;
        // This will determine the averageAutoHeight.
        let total = 0;
        let totalAmount = 0;
        // Loop through all of the refs that have height="auto".
        autoHeightRefs.forEach((ref, index) => {
            // If the height is already calculated, skip it,
            // but calculate the height for the total.
            if (autoHeights[index]) {
                total += autoHeights[index];
                totalAmount += 1;
                return;
            }
            // Make sure the ref has a child
            if (ref && ref.childNodes && ref.childNodes[0] && Number.isInteger(ref.childNodes[0].offsetHeight)) {
                const height = ref.childNodes[0].offsetHeight;
                // Add to the total to calculate the averageAutoHeight.
                total += height;
                totalAmount += 1;
                // Cache the height.
                autoHeights[index] = height;
                // Set the update flag to true.
                isUpdated = true;
            }
        });
        // Save the average height.
        averageAutoHeight = total / totalAmount;
        // There are some new heights detected that had previously not been calculated.
        // Call forceUpdate to make sure the virtual list renders again.
        if (isUpdated)
            forceUpdate();
    };
    const onVirtualHelperRef = (index, ref) => {
        autoHeightRefs[index] = ref;
        requestAnimationFrame(() => {
            processAutoHeights();
        });
    };
    const getItemSize = children => {
        // Prefer to return a array of all heights.
        if (!allowAutoHeight) {
            return children.map(child => {
                if (!react_1.default.isValidElement(child))
                    return defaultHeight;
                const { height } = child.props;
                if (Number.isInteger(height)) {
                    return height;
                }
                return defaultHeight;
            });
        }
        // If allowAutoHeight is true, return a function instead.
        const itemSizeFn = index => {
            if (!react_1.default.isValidElement(children[index]))
                return defaultHeight;
            const { height } = children[index].props;
            // When the height is number simply, simply return it.
            if (Number.isInteger(height)) {
                return height;
            }
            // When allowAutoHeight is set and  the height is set to "auto"...
            if (allowAutoHeight && children[index].props.height === 'auto') {
                // ... and the height is calculated, return the calculated height.
                if (autoHeights[index])
                    return autoHeights[index];
                // ... if the height is not yet calculated, return the averge
                if (useAverageAutoHeightEstimation)
                    return averageAutoHeight;
            }
            // Return the default height.
            return defaultHeight;
        };
        return itemSizeFn;
    };
    // Children always needs to be an array.
    const children = Array.isArray(inputChildren) ? inputChildren : react_1.default.Children.toArray(inputChildren);
    const itemSize = getItemSize(children);
    return (react_1.default.createElement(layers_1.Pane, Object.assign({ "data-evergreen-table-body": true, ref: setPaneRef, height: paneHeight, flex: "1", overflow: "hidden" }, rest),
        react_1.default.createElement(react_tiny_virtual_list_1.default, { height: isIntegerHeight ? paneHeight : calculatedHeight, width: "100%", estimatedItemSize: allowAutoHeight && useAverageAutoHeightEstimation ? averageAutoHeight : estimatedItemSize || null, itemSize: itemSize, overscanCount: overscanCount, itemCount: react_1.default.Children.count(children), scrollToIndex: scrollToIndex, scrollOffset: scrollOffset, scrollToAlignment: scrollToAlignment, onScroll: onScroll, renderItem: ({ index, style }) => {
                const child = children[index];
                const key = child.key || index;
                const props = {
                    key,
                    style
                };
                // If some children are strings by accident, support this gracefully.
                if (!react_1.default.isValidElement(child)) {
                    if (typeof child === 'string') {
                        return react_1.default.createElement("div", Object.assign({}, props), child);
                    }
                    return react_1.default.createElement("div", Object.assign({}, props), "\u00A0");
                }
                // When allowing height="auto" for rows, and a auto height item is
                // rendered for the first time...
                if (allowAutoHeight &&
                    react_1.default.isValidElement(child) &&
                    child.props.height === 'auto' &&
                    // ... and only when the height is not already been calculated.
                    !autoHeights[index]) {
                    // ... render the item in a helper div, the ref is used to calculate
                    // the height of its children.
                    return (react_1.default.createElement("div", Object.assign({ ref: ref => onVirtualHelperRef(index, ref), "data-virtual-index": index }, props, { style: Object.assign({ opacity: 0 }, props.style) }), child));
                }
                // When allowAutoHeight is false, or when the height is known.
                // Simply render the item.
                return react_1.default.cloneElement(child, props);
            } })));
});
TableVirtualBody.propTypes = Object.assign(Object.assign({}, layers_1.Pane.propTypes), { 
    /**
     * Children needs to be an array of a single node.
     */
    children: prop_types_1.default.oneOfType([prop_types_1.default.arrayOf(prop_types_1.default.node), prop_types_1.default.node]), 
    /**
     * Default height of each row.
     * 48 is the default height of a TableRow.
     */
    defaultHeight: prop_types_1.default.number, 
    /**
     * When true, support `height="auto"` on children being rendered.
     * This is somewhat of an expirmental feature.
     */
    allowAutoHeight: prop_types_1.default.bool, 
    /**
     * The overscanCount property passed to react-tiny-virtual-list.
     */
    overscanCount: prop_types_1.default.number, 
    /**
     * When passed, this is used as the `estimatedItemSize` in react-tiny-virtual-list.
     * Only when `allowAutoHeight` and`useAverageAutoHeightEstimation` are false.
     */
    estimatedItemSize: prop_types_1.default.number, 
    /**
     * When allowAutoHeight is true and this prop is true, the estimated height
     * will be computed based on the average height of auto height rows.
     */
    useAverageAutoHeightEstimation: prop_types_1.default.bool, 
    /**
     * The scrollToIndex property passed to react-tiny-virtual-list
     */
    scrollToIndex: prop_types_1.default.number, 
    /**
     * The scrollOffset property passed to react-tiny-virtual-list
     */
    scrollOffset: prop_types_1.default.number, 
    /**
     * The scrollToAlignment property passed to react-tiny-virtual-list
     */
    scrollToAlignment: prop_types_1.default.oneOf(['start', 'center', 'end', 'auto']), 
    /**
     * The onScroll callback passed to react-tiny-virtual-list
     */
    onScroll: prop_types_1.default.func });
exports.default = TableVirtualBody;
