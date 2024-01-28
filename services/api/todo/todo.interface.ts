export interface IGetAllTodo {
	_start: number | string;
	_limit: number | string;
}

export interface ITodo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export interface PayloadTodo {
	title: string;
	completed: boolean;
}
