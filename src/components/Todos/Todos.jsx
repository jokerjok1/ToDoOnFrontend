import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../features/todoSlice";
import Todo from "./Todo";
import Preloader from "../../Preloader/Preloader";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) {
    return <Preloader/>
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="items">
    <ul>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo._id}
            id={todo._id}
            title={todo.title}
            completed={todo.completed}
            loading={todo.loading}
          />
        );
      })}
    </ul>
    </div>
  );
};

export default Todos;
