import { Checkbox } from "@/components";
import { IListTodoProps } from "./ListTodo.interface";
import { ITodo } from "@/services";

export const ListTodo = (_props: IListTodoProps) => {
	const { data } = _props;
	return (
		<section className="px-6 mt-4 overflow-y-scroll">
			{data &&
				data.map((value: ITodo, index: number) => (
					<div key={`${index}--${value.id}`} className="mt-4">
						<Checkbox
							checked={value.completed}
							htmlFor={`${value.title}-${index}`}
							id={`${value.title}-${index}`}
							value={value.title}
						/>
					</div>
				))}
		</section>
	);
};
