import { useState } from "react";

const Form = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" })
  function handleSubmit(event) {
    event.preventDefault()
    console.log(name)
  }
  return (
    <>
      {name.firstName} - {name.lastName}
      <div>
        <form>
          <input
            type="text"
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
            value={name.firstName}
            placeholder="First Name"
          />
          <input
            type="text"
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
            value={name.lastName}
            placeholder="Last Name"
          />
          <button onClick={(event) => handleSubmit(event)}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Form;
