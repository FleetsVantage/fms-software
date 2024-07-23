import PropTypes from 'prop-types';
import * as CSS from 'csstype';
import { Rule } from '../prefixer';
export type CssProps = Pick<CSS.StandardProperties, 'alignContent' | 'alignItems' | 'alignSelf' | 'animation' | 'animationDelay' | 'animationDirection' | 'animationDuration' | 'animationFillMode' | 'animationIterationCount' | 'animationName' | 'animationPlayState' | 'animationTimingFunction' | 'background' | 'backgroundBlendMode' | 'backgroundClip' | 'backgroundColor' | 'backgroundImage' | 'backgroundOrigin' | 'backgroundPosition' | 'backgroundRepeat' | 'backgroundSize' | 'border' | 'borderBottom' | 'borderBottomColor' | 'borderBottomLeftRadius' | 'borderBottomRightRadius' | 'borderBottomStyle' | 'borderBottomWidth' | 'borderColor' | 'borderLeft' | 'borderLeftColor' | 'borderLeftStyle' | 'borderLeftWidth' | 'borderRadius' | 'borderRight' | 'borderRightColor' | 'borderRightStyle' | 'borderRightWidth' | 'borderStyle' | 'borderTop' | 'borderTopColor' | 'borderTopLeftRadius' | 'borderTopRightRadius' | 'borderTopStyle' | 'borderTopWidth' | 'borderWidth' | 'bottom' | 'boxShadow' | 'boxSizing' | 'clear' | 'color' | 'columnGap' | 'content' | 'cursor' | 'display' | 'flex' | 'flexBasis' | 'flexDirection' | 'flexFlow' | 'flexGrow' | 'flexShrink' | 'flexWrap' | 'float' | 'font' | 'fontFamily' | 'fontSize' | 'fontStyle' | 'fontVariant' | 'fontWeight' | 'gap' | 'grid' | 'gridArea' | 'gridAutoColumns' | 'gridAutoFlow' | 'gridAutoRows' | 'gridColumn' | 'gridColumnEnd' | 'gridColumnStart' | 'gridRow' | 'gridRowEnd' | 'gridRowStart' | 'gridTemplate' | 'gridTemplateAreas' | 'gridTemplateColumns' | 'gridTemplateRows' | 'height' | 'justifyContent' | 'justifyItems' | 'justifySelf' | 'left' | 'letterSpacing' | 'lineHeight' | 'listStyle' | 'listStyleImage' | 'listStylePosition' | 'listStyleType' | 'margin' | 'marginBottom' | 'marginLeft' | 'marginRight' | 'marginTop' | 'maxHeight' | 'maxWidth' | 'minHeight' | 'minWidth' | 'opacity' | 'order' | 'outline' | 'overflow' | 'overflowX' | 'overflowY' | 'padding' | 'paddingBottom' | 'paddingLeft' | 'paddingRight' | 'paddingTop' | 'placeContent' | 'placeItems' | 'placeSelf' | 'pointerEvents' | 'position' | 'resize' | 'right' | 'rowGap' | 'textAlign' | 'textDecoration' | 'textOverflow' | 'textShadow' | 'textTransform' | 'top' | 'transform' | 'transformOrigin' | 'transition' | 'transitionDelay' | 'transitionDuration' | 'transitionProperty' | 'transitionTimingFunction' | 'userSelect' | 'verticalAlign' | 'visibility' | 'whiteSpace' | 'width' | 'wordBreak' | 'wordWrap' | 'zIndex'> & Pick<CSS.ObsoleteProperties, 'gridColumnGap' | 'gridGap' | 'gridRowGap'> & Pick<CSS.SvgProperties, 'fill' | 'stroke' | 'strokeDasharray' | 'strokeDashoffset' | 'strokeLinecap' | 'strokeMiterlimit' | 'strokeWidth'>;
export type BoxCssProps<CP> = {
    [P in keyof CP]: CP[P] | number | false | null | undefined;
};
export type BoxPropValue = string | number | false | null | undefined;
export type EnhancerProps = BoxCssProps<CssProps> & {
    marginX?: BoxPropValue;
    marginY?: BoxPropValue;
    paddingX?: BoxPropValue;
    paddingY?: BoxPropValue;
    clearfix?: boolean;
    selectors?: SelectorMap;
};
export type SelectorMap = {
    [selector: string]: BoxCssProps<CssProps> | SelectorMap;
};
export type PropEnhancerValueType = string | number;
export interface PropTypesMapping {
    [key: string]: PropTypes.Validator<any>;
}
export interface PropAliases {
    [key: string]: string[];
}
export interface PropEnhancers {
    [key: string]: (value: PropEnhancerValueType, selector: string) => EnhancedProp | null;
}
export interface PropValidators {
    [key: string]: (value: any) => string | undefined;
}
export interface EnhancedProp {
    className: string;
    rules: Rule[];
    styles: string;
}
