/**
 * Takes a styleConfig object and outputs `boxProps` that can be spread on a Box component
 * @param {string} componentKey the name of the component in the theme
 * @param {StyleModifiers} props props that modify the resulting visual style (e.g. `size` or `appearance`)
 * @param {PseudoSelectors} placeholderSelectors mapping for the component between states and actual pseudo selectors
 * @param {import('ui-box').BoxCssProps<CssProps>} [internalStyles] additional styles that are specified internally, separate from the visual styles
 * @returns {{ selectors: import('ui-box').EnhancerProps['selectors'], style: import('react').CSSProperties } & import('ui-box').EnhancerProps}
 */
export function useStyleConfig(componentKey: string, props: StyleModifiers, placeholderSelectors: PseudoSelectors, internalStyles?: any): {
    selectors: import('ui-box').EnhancerProps['selectors'];
    style: import('react').CSSProperties;
} & import('ui-box').EnhancerProps;
export type StateStyles = {
    _hover?: import("csstype").Properties<0 | (string & {}), string & {}> | undefined;
    _active?: import("csstype").Properties<0 | (string & {}), string & {}> | undefined;
    _disabled?: import("csstype").Properties<0 | (string & {}), string & {}> | undefined;
    _focus?: import("csstype").Properties<0 | (string & {}), string & {}> | undefined;
    _invalid?: import("csstype").Properties<0 | (string & {}), string & {}> | undefined;
};
export type PseudoSelectors = {
    _hover?: string | undefined;
    _active?: string | undefined;
    _disabled?: string | undefined;
    _focus?: string | undefined;
    _invalid?: string | undefined;
};
export type StyleModifiers = {
    appearance?: string | undefined;
    size?: string | undefined;
};
export type Style = import('ui-box').EnhancerProps & StateStyles;
export type StyleConfig = {
    baseStyle: Style;
    appearances?: {
        [appearance: string]: Style;
    } | undefined;
    sizes?: {
        [size: string]: Style;
    } | undefined;
};
