import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGetAllTodo, ITodo, PayloadTodo } from "./todo.interface";
import { HYDRATE } from "next-redux-wrapper";
import { Action, PayloadAction } from "@reduxjs/toolkit";

const generateQueryStr = (baseString: string, query: Object): string => {
	const queryString: string =
		baseString +
		Object.entries(query)
			.map(([key, value]) => `${key}=${value}`)
			.join("&");

	return queryString;
};

type RootState = any;

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
	return action.type === HYDRATE;
}

export const todoApi = createApi({
	reducerPath: "todoApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com",
	}),
	extractRehydrationInfo(action, { reducerPath }): any {
		if (isHydrateAction(action)) {
			return action.payload[reducerPath];
		}
	},
	endpoints: (builder) => ({
		getAllTodo: builder.query<ITodo[], any>({
			query: (queryParams: IGetAllTodo) => {
				const queryStr = generateQueryStr("todos?", queryParams);

				return { url: queryStr };
			},
		}),
		addTodo: builder.mutation<PayloadTodo, Partial<PayloadTodo>>({
			query: (newTodo) => ({
				url: "todos",
				method: "POST",
				body: newTodo,
			}),
		}),
	}),
});

export const {
	useGetAllTodoQuery,
	useAddTodoMutation,
	util: { getRunningQueriesThunk },
} = todoApi;

export const { getAllTodo } = todoApi.endpoints;
