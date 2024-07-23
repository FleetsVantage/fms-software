/// <reference types="react" />
import { Without } from './types/box-types';
import { EnhancerProps } from './types/enhancers';
type PreservedProps = Without<React.ComponentProps<any>, keyof EnhancerProps>;
interface EnhancePropsResult {
    className: string;
    enhancedProps: PreservedProps;
}
export default function enhanceProps(props: EnhancerProps & React.ComponentPropsWithoutRef<any>, selectorHead?: string, parentProperty?: string): EnhancePropsResult;
export {};
