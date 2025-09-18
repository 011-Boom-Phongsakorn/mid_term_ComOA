import { useEffect, useState } from "react";
const Menu = () => {
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    // call api
    fetch("http://localhost:5000/api/v1/coffee")
      .then((res) => {
        // convert to json format
        return res.json();
      })
      .then((resp) => {
        // console.log(resp);
        setCoffee(resp);
      });
  }, []);
  //   console.log(coffee);
  return (
    <div>
      <ul>
        {coffee.map((c, i) => (
          <div key={i} className="m-10 w-[150px] shadow-2xl">
            <li>
              <img className="h-[100px]" src={c.img} alt="coffee" />
            </li>
            <li>{c.title}</li>
            <li>{c.type}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
