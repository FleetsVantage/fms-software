/**
 * A hook for scheduling a layout effect with a fallback to a regular effect for non-browser environments (ssr)
 */
export const useIsomorphicLayoutEffect: typeof useLayoutEffect;
import { useLayoutEffect } from "react";
