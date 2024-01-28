import { IPaginationProps } from "./Pagination.interface";

export const Pagination = (_props: IPaginationProps) => {
	const { currentPage = 1, prevPagination, nextPagination } = _props;
	return (
		<div className="flex justify-center mt-6">
			<div className="flex items-center gap-2">
				{currentPage !== 1 && (
					<div className="hover:cursor-pointer" onClick={prevPagination}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 19.5 8.25 12l7.5-7.5"
							/>
						</svg>
					</div>
				)}

				<p className="text-md font-semibold">{currentPage}/199</p>

				<div className="hover:cursor-pointer" onClick={nextPagination}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m8.25 4.5 7.5 7.5-7.5 7.5"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};
