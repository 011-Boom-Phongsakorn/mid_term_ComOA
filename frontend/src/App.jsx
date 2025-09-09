import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState();

  useEffect(() => {
    // call api: GetAllRestaurants
    fetch("http://localhost:5000/api/hello")
      .then((res) => {
        // convert to json format
        return res.json();
      })
      .then((resp) => {
        console.log(resp.message);
        setText(resp.message);
      });
  }, []);

  return (
    <>
      <h1>{text}</h1>
    </>
  );
}

export default App;
