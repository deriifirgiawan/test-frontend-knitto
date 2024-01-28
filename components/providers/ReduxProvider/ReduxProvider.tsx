"use client";

import React from "react";
import { store } from "@/services";
import { Provider } from "react-redux";

interface ReduxProviderProps {
	children: React.ReactNode;
}
export const ReduxProvider = (_props: ReduxProviderProps) => {
	const { children } = _props;

	return <Provider store={store()}>{children}</Provider>;
};
