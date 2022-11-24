import React from "react";
import { useDispatch } from "react-redux";
import { completeTodo } from "../../features/todoSlice";
import { deleteTodo } from "../../features/todoSlice";
import Preloader from "../../Preloader/Preloader";

const Todo = ({ id, title, completed, loading }) => {
  const dispatch = useDispatch();
  const handleChecked = () => {
    dispatch(completeTodo({ id, completed }));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };
  if (loading) {
    return <Preloader />;
  }
  return (
    <div className="item">
        <div className="input">
          <input
            type="checkbox"
            checked={completed}
            onChange={handleChecked}
            className={`todoText ${completed ? "disabled" : ""}`}
          />
        </div>
        <div className="itemText"> {title}</div>
        <div className="delButton">
          <button className="delBtn" onClick={handleDeleteTodo}>
            Удалить
          </button>
        </div>
      </div>
  );
};

export default Todo;
