import Counter from "./Counter";
import Fruit from "./Fruit";
import Message from "./Message";
import RandomComponent from "./RandomComponent";

const Fruits = () => {
  // const fruits = ["Apple", "Mango", "Orange"]
  const fruits = [
    {name:"Apple", price:10, emoji:"🍎", soldout: true},
    {name:"Banana", price:12, emoji:"🍌", soldout: false},
    {name:"Quavas", price:12, emoji:"🍐", soldout: true},
    {name:"Carrot", price:3, emoji:"🍐", soldout: true},
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
      <Message />
      <Counter />
    </>
  );
}

export default Fruits;
