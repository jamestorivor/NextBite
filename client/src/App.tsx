import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch("http://localhost:8080/");
      const data = await res.json();
      setArray(data.fruits);
    }
    fetchAPI();
  }, []);

  return (
    <>
      <ul className="">
        {array.map((item) => (
          <li className="text-red-500" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
