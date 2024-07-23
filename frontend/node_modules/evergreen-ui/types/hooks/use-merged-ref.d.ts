/**
 * React hook that merges up to two React refs into a single memoized function React Ref
 * @param {import('react').Ref<any>} refA
 * @param {import('react').Ref<any>} [refB]
 */
export function useMergedRef(refA: import('react').Ref<any>, refB?: React.Ref<any> | undefined): ((node: any) => void) | null;
import React from "react";
