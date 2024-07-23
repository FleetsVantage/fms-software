import React from 'react';
import { EnhancerProps } from './enhancers';
export type Without<T, K> = Pick<T, Exclude<keyof T, K>>;
export type PropsOf<E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>;
export type BoxOwnProps<E extends React.ElementType = React.ElementType, P = {}> = Without<EnhancerProps, keyof P> & {
    is?: E;
    allowUnsafeHref?: boolean;
};
export type BoxProps<E extends React.ElementType> = BoxOwnProps<E> & Without<PropsOf<E>, keyof BoxOwnProps>;
export type PolymorphicBoxProps<E extends React.ElementType, P = {}> = BoxOwnProps<E, P> & Without<PropsOf<E>, keyof (BoxOwnProps & P)> & P;
export type BoxComponent<P = {}, D extends React.ElementType = React.ElementType> = <E extends React.ElementType = D>(props: PolymorphicBoxProps<E, P>) => JSX.Element;
