import { forwardRef } from "react";
import { TextFieldProps } from "./TextField.interface";

export const TextField = forwardRef((_props: TextFieldProps, _) => {
	const { rightIcon, leftIcon, ...props } = _props;

	const $style = `${leftIcon ? "pl-[38px]" : "px-4"} ${
		rightIcon && "pr-[38px]"
	} py-2 border border-[#E6EBF2] rounded-[6px] w-full`;
	return (
		<div className="relative">
			{leftIcon && (
				<div className="pl-[2px] absolute bottom-3 left-2">{leftIcon()}</div>
			)}
			<input {...props} className={$style} />
			{rightIcon && (
				<div className="pr-[2px] absolute right-3 top-3">{rightIcon()}</div>
			)}
		</div>
	);
});
