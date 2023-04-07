import React, { useEffect, useState } from 'react';
import { v1 as uuid } from 'uuid';

import List from '../components/List/List';
import { fetchTodos, fetchAddTodo, fetchUpdateTodo, fetchDeleteTodo } from '../api';
import { Box, Typography } from '@mui/material';
import Button from '../components/Button/Button';

function Tasks() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);
  const listLength = list.length;

  useEffect(() => {
    fetchTodos()
      .then((res) => setList(res))
      .catch((err) => console.log(err));
  }, []);

  const changeInput = (e) => setInputValue(e.target.value);

  const addItem = () => {
    const id = uuid();

    fetchAddTodo({ id, text: inputValue, completed: false })
      .then(() => {
        setList([...list, { id: id, text: inputValue }]);
        setInputValue('');
      })
      .catch((err) => console.log(err));
  };

  const updateItem = (id) => {
    return fetchUpdateTodo({
      id,
      text: inputValue,
      completed: false,
    });
  };

  const deleteItem = (el) => {
    fetchDeleteTodo(el)
      .then(() => setList(list.filter((item) => item.id !== el)))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Typography>Added {listLength} items</Typography>

      <Box>
        <input onChange={changeInput} value={inputValue} placeholder='Add Item' />
        <Button onClick={addItem} disabled={inputValue.trim() === ''}>
          Add
        </Button>
      </Box>
      <List list={list} handleDelete={deleteItem} handleUpdate={updateItem} />
    </div>
  );
}
export default Tasks;
