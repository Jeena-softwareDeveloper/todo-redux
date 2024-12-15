import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";

import { useState } from "react";
import { addvalue,removevalue } from "./Redux/todoredux";

function App() {
  const tovalue = useSelector((state) => state.todo.value);
  const [input, setinput] = useState("");
  const addpatch = useDispatch();

  const valueon = (e) => setinput(e.target.value);

  console.log(tovalue);
  
  const addbtn = () => addpatch(addvalue({ name: input }));

  return (
    <div>
      <div>
        <input placeholder="type name" onChange={valueon} />
        <button onClick={addbtn}>addme</button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ul>
          {tovalue.map((van, vak) => (
            <div>
              <li>
                <span>{van.name}</span>
                <button onClick={()=>addpatch(removevalue(van.id))}>X</button>

              </li>
            </div>
          ))}{" "}
        </ul>
      </div>
    </div>
  );
}

export default App;
