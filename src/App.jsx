import React from "react";
import { Form } from "./components/form";
import { Card } from "./components/card/card";

function App() {
  const [javohir, setJavohir] = React.useState([]);
  console.log(javohir);

  return (
    <div className="box">
       <h1 className="title">To Do List</h1>
      <Form setData={setJavohir} />
     
      {javohir.map((item, index) => {
        return (
          <Card
            key={item.id}
            setData={setJavohir}
            id={item.id}
            name={item.userName}
          />
        );
      })}
    </div>
  );
}

export default App;
