import React from "react";

export interface IModalProps {
	open: boolean;
	onClose: (value: boolean) => void;
	title: string;
	children: React.ReactNode;
	onSave?: () => void;
	loading?: boolean;
}
