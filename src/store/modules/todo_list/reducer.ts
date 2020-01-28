import {
  TodoState,
  TodoActionsTypes,
  CREATE_TODO_REQUEST,
  UPDATE_TODO_REQUEST,
  DELETE_TODO_REQUEST,
} from './types';

const initialState: TodoState = {
  data: [],
};

export default function todoReducer(
  state = initialState,
  action: TodoActionsTypes
): TodoState {
  switch (action.type) {
    case CREATE_TODO_REQUEST:
      return {
        data: [...state.data, action.payload.todo],
      };
    case UPDATE_TODO_REQUEST: {
      const data = state.data.map(todo =>
        todo.id === action.payload.todo.id ? action.payload.todo : todo
      );

      return { data };
    }
    case DELETE_TODO_REQUEST: {
      const data = state.data.filter(
        todo => todo.id !== action.payload.todo.id
      );

      return { data };
    }
    default:
      return state;
  }
}
