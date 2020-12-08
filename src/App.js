import { useState } from "react";
import Card from "./Card";
import Search from "./Search";
// import { parse, format } from "input-format";

const initialCode = localStorage.code || "";
let initialOptions;

try {
  initialOptions = JSON.parse(localStorage.options) || [];
} catch (e) {
  initialOptions = [];
}

const App = () => {
  const [code, setCode] = useState(initialCode);
  const [options, setOptions] = useState(initialOptions);

  return (
    <div className="container">
      <Search setOptions={setOptions} code={code} setCode={setCode} />
      <div>
        {options.map((el, index) => {
          return <Card key={index}>{el}</Card>;
        })}
      </div>
    </div>
  );
};

export default App;
