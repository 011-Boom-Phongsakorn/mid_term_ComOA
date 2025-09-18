import { useEffect, useState } from "react";

function Home() {
  const [text, setText] = useState();

  useEffect(() => {
    // call api
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
      <div className="container mx-auto w-max">
        <h1>{text}</h1>
      </div>
    </>
  );
}

export default Home;
