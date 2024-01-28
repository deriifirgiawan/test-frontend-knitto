"use client";

import { useState } from "react";

export const useTodo = () => {
	const [open, setIsOpen] = useState<boolean>(false);
	const [page, setPage] = useState<number>(1);
	const [todo, setTodo] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const onToggleModal = () => setIsOpen(!open);

	const onChangePage = (type: "PREV" | "NEXT") =>
		type === "NEXT" ? setPage(page + 1) : setPage(page - 1);

	return {
		page,
		open,
		todo,
		loading,
		setLoading,
		setTodo,
		onToggleModal,
		onChangePage,
	};
};
