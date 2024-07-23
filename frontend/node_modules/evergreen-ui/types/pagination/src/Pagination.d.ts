export function usePaginationBehavior({ page: inputPage }?: {
    page?: number | undefined;
}): {
    page: number;
    onNextPage: () => void;
    onPageChange: (index: any) => void;
    onPreviousPage: () => void;
};
export default Pagination;
declare const Pagination: React.MemoExoticComponent<React.ForwardRefExoticComponent<React.RefAttributes<any>>>;
import React from "react";
