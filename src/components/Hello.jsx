function Hello(props) {
  console.log(props.person.seatNumbers[0])
  return (
  <>
  <h2> {props.person.message} {props.person.emoji} {props.person.name}  </h2>
  <ol>

  </ol>
  </>
  )
}

export default Hello;
