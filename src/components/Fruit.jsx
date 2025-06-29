const Fruit = ({fruit}) => {
  return (
    <>
    <li key={fruit.name}>{fruit.emoji} {fruit.name} ${fruit.price} {fruit.soldout ? "Soldout" : ""}</li>
    </>
   );
}

export default Fruit;
