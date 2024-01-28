import { ButtonType } from "./Button.types";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	backgroundColor?: string;
	textColor?: string;
	borderColor?: string;
	buttonType?: ButtonType;
	loading?: boolean;
}
