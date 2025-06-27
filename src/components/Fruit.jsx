const Fruit = ({fruit}) => {
  return (
    <>
    <li key={fruit.name}>{fruit.emoji} {fruit.name} ${fruit.price}</li>
    </>
   );
}

export default Fruit;
