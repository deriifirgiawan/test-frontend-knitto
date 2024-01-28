import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "../api/todo/todo.api";
import { createWrapper } from "next-redux-wrapper";

export const store = () => {
	return configureStore({
		reducer: {
			[todoApi.reducerPath]: todoApi.reducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({}).concat([todoApi.middleware]),
	});
};

const { getState, dispatch } = store();

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<typeof getState>;
export type AppDispatch = typeof dispatch;
export const wrapper = createWrapper<AppStore>(store, { debug: true });
