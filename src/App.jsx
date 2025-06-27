import Hello from "./components/Hello"
function App() {
  const person = {
    name: "Norman",
    message: "Hi",
    emoji: "👋",
    seatNumbers: [1, 2, 3, 7]
  }
  return (
    <>
      <Hello person={person} />
    </>
  )
}

export default App
