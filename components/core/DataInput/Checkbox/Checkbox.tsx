import { useState } from "react";
import { ICheckboxProps } from "./Checkbox.interface";

export const Checkbox = (_props: ICheckboxProps) => {
	const { value, id, htmlFor, checked } = _props;
	const [isChecked, setIsChecked] = useState(checked);
	return (
		<div className="flex items-center">
			<input
				id={id}
				type="checkbox"
				checked={isChecked}
				onChange={(event) => setIsChecked(!isChecked)}
				className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
			/>
			<label
				htmlFor={htmlFor}
				className="ms-2 text-lg font-medium text-gray-900"
			>
				{value}
			</label>
		</div>
	);
};
