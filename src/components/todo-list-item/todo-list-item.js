import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ done, label, onToggleDone, onDelete }) => {

  let classNames = 'todo-list-item';

  if (done) {
    classNames += ' done';
  }


  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={onToggleDone}>{label}</span>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDelete}>
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
  );
};

export default TodoListItem;
