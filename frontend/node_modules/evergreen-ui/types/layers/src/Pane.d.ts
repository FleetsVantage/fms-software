import React from 'react';
import { PolymorphicBoxProps } from 'ui-box';
export interface PaneOwnProps {
    /**
     * Background property.
     * `tint1`, `tint2` etc. from `theme.colors` are available.
     */
    background?: string;
    /**
     * Can be an explicit border value or a boolean.
     */
    border?: boolean | string;
    /**
     * Can be an explicit border value or a boolean.
     */
    borderTop?: boolean | string;
    /**
     * Can be an explicit border value or a boolean.
     */
    borderRight?: boolean | string;
    /**
     * Can be an explicit border value or a boolean.
     */
    borderBottom?: boolean | string;
    /**
     * Can be an explicit border value or a boolean.
     */
    borderLeft?: boolean | string;
    /**
     * Elevation of the Pane.
     */
    elevation?: Elevation;
    /**
     * Elevation of the Pane on hover. Might get deprecated.
     */
    hoverElevation?: Elevation;
    /**
     * Elevation of the Pane on click. Might get deprecated.
     */
    activeElevation?: Elevation;
}
export type PaneProps<T extends React.ElementType = 'div'> = PolymorphicBoxProps<T, PaneOwnProps>;
type Elevation = 0 | 1 | 2 | 3 | 4;
declare const Pane: <T extends React.ElementType<any> = "div">(props: PaneProps<T>) => JSX.Element;
export default Pane;
