import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import tick from '../../assets/tick.png';

import { RootState } from '../../store/modules/combineReducers';

import {
  createTodo,
  deleteTodo,
  updateTodo,
} from '../../store/modules/todo_list/actions';

import { Todo } from '../../store/modules/todo_list/types';
import { Check, Container, Header, Item, List } from './styles';

export default function Home(): ReactElement {
  const data = useSelector((state: RootState) => state.todo.data);

  const dispatch = useDispatch();

  const [description, setDescription] = useState('');

  function lastId(): number {
    return data[data.length - 1] ? data[data.length - 1].id + 1 : 1;
  }

  function addTodo(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
    e.preventDefault();

    dispatch(
      createTodo({
        id: lastId(),
        description,
        checked: false,
      })
    );
  }

  function handleUpdate(
    todo: Todo,
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void {
    dispatch(updateTodo({ ...todo, checked: !todo.checked }));
  }

  function handleDelete(
    todo: Todo,
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ): void {
    e.stopPropagation();

    dispatch(deleteTodo(todo));
  }

  return (
    <Container>
      <Header>
        <h2>To Do List</h2>
        <div>
          <input
            value={description}
            onChange={(e): void => setDescription(e.target.value)}
            type="text"
            id="myInput"
            placeholder="Title..."
          />
          <a href="/" onClick={(e): void => addTodo(e)}>
            Add
          </a>
        </div>
      </Header>
      <List>
        {data.map((todo: Todo) => (
          <Item
            checked={todo.checked}
            key={todo.id}
            onClick={(e): void => handleUpdate(todo, e)}
          >
            <div>
              {todo.checked && <Check src={tick} alt="" />}
              <span>{todo.description}</span>
            </div>
            <button
              type="button"
              className="close"
              onClick={(e): void => handleDelete(todo, e)}
            >
              X
            </button>
          </Item>
        ))}
      </List>
    </Container>
  );
}
