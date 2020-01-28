import { combineReducers } from 'redux';
import todoReducer from './todo_list/reducer';

const rootReducer = combineReducers({
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
