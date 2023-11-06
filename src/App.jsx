import { useState } from "react";
import Values from "values.js";
import "./App.css";
import DisplayColors from "./components/DisplayColor";
import FormColor from "./components/FormColor";

function App() {
  const [list, setList] = useState(new Values("red").all(10));
  console.log(list);
  return (
    <>
      <h2>
        <FormColor setList={setList} />
        <DisplayColors list={list} />
      </h2>
    </>
  );
}

export default App;
