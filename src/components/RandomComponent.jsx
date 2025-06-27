import Hero from "./Hero";
import Welcome from "./Welcome";

const RandomComponent = () => {
  const display = false
  return display ? < Welcome /> : < Hero />
}

export default RandomComponent;
