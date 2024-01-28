export interface IPaginationProps {
	currentPage?: number;
	prevPagination?: () => void;
	nextPagination?: () => void;
}
