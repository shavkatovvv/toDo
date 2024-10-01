import React from "react";
import style from "./style.module.css"

export const Card = ({ name, setData, id }) => {
  const deleteItem = () => {
    setData((pState) => pState.filter((item) => item.id !== id));
  };

  const editItem = () => {
    let newName = prompt("new userName");
    setData((pState)=> pState.map((item) => item.id == id ? {...item, userName: newName} : item))
  };

  return (
    <div className={style.main}>
      <div className={style.box}>
      <h1 className={style.title}>{name}</h1>
      <div className={style.btn_box}>
      <button className={style.button_delete} onClick={deleteItem}></button>
      <button className={style.button} onClick={editItem}></button>
      </div>
      
    </div>
    </div>
    
  );
};
