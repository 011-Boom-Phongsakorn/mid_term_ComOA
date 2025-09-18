const coffeeController = {};

const coffees = [
  {
    id: 1,
    title: "espresso",
    type: "hot",
    price: 120,
    img: "https://www.thespruceeats.com/thmb/HJrjMfXdLGHbgMhnM0fMkDx9XPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-espresso-765702-hero-03_cropped-ffbc0c7cf45a46ff846843040c8f370c.jpg",
  },
  {
    id: 2,
    title: "cappuccino",
    type: "hot",
    price: 150,
    img: "https://media.istockphoto.com/id/947762906/photo/hot-coffee-cappuccino-latte-art-isolated-on-white-background-clipping-path-included.jpg?s=612x612&w=0&k=20&c=JaGusOUZ-7wjQaSAufdMpH0IND3WmYW45sAQRwMwoeY=",
  },
];

coffeeController.getAll = async (req, res) => {
  try {
    console.log("Example Coffee", coffees);
    res.send(coffees);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

module.exports = coffeeController;
