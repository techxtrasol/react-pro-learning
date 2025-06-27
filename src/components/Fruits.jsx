import Fruit from "./Fruit";
import RandomComponent from "./RandomComponent";

const Fruits = () => {
  // const fruits = ["Apple", "Mango", "Orange"]
  const fruits = [
    {name:"Apple", price:10, emoji:"🍎"},
    {name:"Banana", price:12, emoji:"🍌"},
    {name:"Quavas", price:12, emoji:"🍐"},
  ]
  return (
    <>
    <RandomComponent />
      <ul>
        <div>{fruits.map(fruit => (
          // <li key={fruit.name}> {fruit.emoji} {fruit.name} ${fruit.price}</li>

          <Fruit key={fruit.name} fruit={fruit}/>
        ))}</div>
      </ul>
    </>
  );
}

export default Fruits;
