/**
 * React hook that returns bind props for a clickable component.
 * When the component has focus, Enter and space activate it
 */
export function useClickable({ disabled, onKeyDown: onKeyDownHandler, tabIndex }?: {
    disabled?: boolean | undefined;
    onKeyDown: any;
    tabIndex?: number | undefined;
}): {
    tabIndex: number;
    onKeyDown: (event: any) => void;
};
