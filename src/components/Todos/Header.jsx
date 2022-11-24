import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todoSlice";

const Header = () => {
  const [text, setText] = useState("");
  const [blur, setBlur] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleChangeInput = (e) => {
    setText(e.target.value);
    setBlur(false);
    setDisabled(false);
  };

  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addTodo(text));
    }
    setText("");
    setDisabled(true);
  };

  const handleBlur = () => {
    if (!text) setBlur(true);
  };

  return (
    <div className="header">
      <h1>Список задач</h1>
      <form className="header-form" onSubmit={handleAdd}>
        <input
          type="text"
          value={text}
          onChange={handleChangeInput}
          onBlur={handleBlur}
          placeholder="Введите текст"
          className={`inpute ${blur && !text ? "input-empty" : ""}`}
        />
        <button
          className={`header-button ${disabled ? "button-disabled" : ""}`}
          type="submit"
          disabled={disabled}
        >
          Добавить
        </button>
      </form>
      {blur && <p>Поле пустое</p>}
    </div>
  );
};

export default Header;