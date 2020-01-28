export interface Todo {
  id: number;
  description: string;
  checked: boolean;
}

export interface TodoState {
  data: Todo[];
}

export const CREATE_TODO_REQUEST = '@todo/CREATE_TODO_REQUEST';
export const UPDATE_TODO_REQUEST = '@todo/UPDATE_TODO_REQUEST';
export const DELETE_TODO_REQUEST = '@todo/DELETE_TODO_REQUEST';

interface CreateTodoRequest {
  type: typeof CREATE_TODO_REQUEST;
  payload: { todo: Todo };
}

interface UpdateTodoRequest {
  type: typeof UPDATE_TODO_REQUEST;
  payload: { todo: Todo };
}

interface DeleteTodoRequest {
  type: typeof DELETE_TODO_REQUEST;
  payload: { todo: Todo };
}

export type TodoActionsTypes =
  | CreateTodoRequest
  | UpdateTodoRequest
  | DeleteTodoRequest;
