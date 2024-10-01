import React from "react";
import style from "./style.module.css"

export const Form = ({ setData }) => {
  const [inputValue, setInputValue] = React.useState("");
  const submit = (e) => {
    e.preventDefault();

    setData((pState) => {
      return [...pState, { userName: inputValue, id: Date.now() }];
    });



    setInputValue("");
  };

  return (
    <form className={style.form} onSubmit={submit}>
      <input className={style.input}
        onChange={(e) => setInputValue(e.target.value)}
        name="userName"
        type="text"
        value={inputValue}
        placeholder="Type something..."
      /> <br />
      <button className={style.button} type="submit">Send</button>
    </form>
  );
};
