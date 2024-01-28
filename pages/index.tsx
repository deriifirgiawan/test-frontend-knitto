import {
	Button,
	FloatingButton,
	HomePage,
	Modal,
	TextField,
} from "@/components";
import { useTodo } from "@/hooks";
import {
	ITodo,
	getAllTodo,
	getRunningQueriesThunk,
	useAddTodoMutation,
	useGetAllTodoQuery,
	wrapper,
} from "@/services";
import { useCallback, useEffect, useState } from "react";

interface Props {
	initialData: ITodo[];
}
export default function Home(_props: Props) {
	const { initialData } = _props;
	const [resultData, setResultData] = useState(initialData);
	const {
		page,
		open,
		todo,
		loading,
		setLoading,
		onChangePage,
		onToggleModal,
		setTodo,
	} = useTodo();

	const { refetch, data, isLoading, error } = useGetAllTodoQuery({
		_start: page,
		_limit: 10,
	});
	const [addTodo] = useAddTodoMutation();

	const onSave = async () => {
		await addTodo({ title: todo, completed: false })
			.then(() => {
				setLoading(!loading);
				setTodo("");
			})
			.catch(() => alert("There was an error"));
		onToggleModal();
		setLoading(false);
		refetch();
	};

	const setData = useCallback(() => {
		if (data) {
			setResultData(data as ITodo[]);
		}
	}, [data]);

	useEffect(() => {
		if (page !== 1) {
			refetch();
			setData();
		}
	}, [page, setData]);

	if (error) {
		return (
			<div className="h-screen flex flex-col justify-center items-center px-6">
				<div className="text-center mb-4">
					<h4 className="text-md font-bold text-red-500">
						Sorry There's Problem In The Server
					</h4>
					<p className="text-sm font-bold text-red-500">Please Try Again</p>
				</div>

				<Button text="Retry" onClick={refetch} />
			</div>
		);
	}

	return (
		<section>
			{isLoading && <HomePage.LoadingPage />}
			<HomePage.Header />
			<HomePage.ListTodo data={resultData} />
			<HomePage.Pagination
				currentPage={page}
				prevPagination={() => onChangePage("PREV")}
				nextPagination={() => onChangePage("NEXT")}
			/>
			<FloatingButton onClick={onToggleModal} />
			<Modal
				open={open}
				onClose={onToggleModal}
				title="Add Todo"
				onSave={onSave}
				loading={loading}
			>
				<TextField
					value={todo}
					onChange={(event) => setTodo(event.target.value)}
				/>
			</Modal>
		</section>
	);
}

export const getServerSideProps = wrapper.getServerSideProps(
	(store) => async () => {
		const result = (
			await store.dispatch(getAllTodo.initiate({ _start: 1, _limit: 10 }))
		).data;
		await Promise.all(store.dispatch(getRunningQueriesThunk()));
		console.log("RENDERED SERVER");
		return {
			props: {
				initialData: result,
				revalidate: 60,
			},
		};
	}
);
