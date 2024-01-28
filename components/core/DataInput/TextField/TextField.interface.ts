import React, { InputHTMLAttributes } from "react";
export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	rightIcon?: () => React.ReactNode;
	leftIcon?: () => React.ReactNode;
}
