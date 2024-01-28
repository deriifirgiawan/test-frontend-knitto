import { forwardRef } from "react";
import { IFloatingButtonProps } from "./FloatingButton.interface";

export const FloatingButton = forwardRef((_props: IFloatingButtonProps, _) => {
	const { onClick } = _props;
	return (
		<button
			className="flex justify-center items-center w-[48px] h-[48px] text-center fixed bottom-4 right-4 md:right-[17rem] lg:right-[33rem] bg-blue-500 text-white rounded-full shadow-md"
			onClick={onClick}
		>
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
					d="M12 4.5v15m7.5-7.5h-15"
				/>
			</svg>
		</button>
	);
});
