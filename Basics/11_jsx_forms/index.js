const root = ReactDOM.createRoot(document.getElementById("main"));

let name = "";
let email = "";
let age = "";
let city = "Delhi";
let dob = "";
let agree = false;

const cities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"];

const App = () => {
  // A ref is a box. useRef(null) gives an empty box.
  // React puts the input element inside it.
  // .current opens the box.
  const nameRef = React.useRef(null);

  function handleChange(e) {
    const field = e.target.name;
    const value = e.target.value;

    if (field === "name") {
      name = value;
    } else if (field === "email") {
      email = value;
    } else if (field === "age") {
      age = value;
    } else if (field === "city") {
      city = value;
    } else if (field === "dob") {
      dob = value;
    }

    // Render so the state below stays correct
    root.render(<App />);
  }

  // Checkbox uses "checked" instead of "value"
  function handleAgree(e) {
    agree = e.target.checked;
    root.render(<App />);
  }

  // Called when the form is submitted
  function handleSubmit(e) {
    // stop the page from reloading
    e.preventDefault();

    // Read the input directly, no onChange needed
    console.log("From ref:", nameRef.current.value);

    alert("Form submitted!");
    console.log(e);
  }

  // Put the focus inside the name box
  function focusName() {
    // .current is the <input> element, .focus() is a browser method
    nameRef.current.focus();
  }

  return (
    <>
      <h1>Registration form</h1>

      {/* onSubmit goes on the form, not the button */}
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Name: {/* value + onChange makes it a controlled input */}
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              // ref puts this input inside nameRef
              ref={nameRef}
              placeholder="Enter your name"
            />
          </label>
        </p>

        <p>
          <label>
            Email:{" "}
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </label>
        </p>

        <p>
          <label>
            Age:{" "}
            <input
              type="number"
              name="age"
              value={age}
              onChange={handleChange}
              placeholder="Enter your age"
            />
          </label>
        </p>

        <p>
          <label>
            Dob:{" "}
            <input
              type="text"
              name="dob"
              value={dob}
              onChange={handleChange}
              placeholder="Enter your DOB"
            />
          </label>
        </p>

        <p>
          <label>
            City: {/* a dropdown made from the cities array */}
            <select name="city" value={city} onChange={handleChange}>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </p>

        <p>
          <label>
            {/* checkbox has no value, it has checked */}
            <input
              type="checkbox"
              name="agree"
              checked={agree}
              onChange={handleAgree}
            />{" "}
            I agree to the terms
          </label>
        </p>

        <button type="button" onClick={focusName}>
          Focus name box
        </button>

        <button type="submit">Submit</button>
      </form>

      <h3>Live preview</h3>
      <p>Name: {name === "" ? "not given" : name}</p>
      <p>Email: {email === "" ? "not given" : email}</p>
      <p>Age: {age === "" ? "not given" : age}</p>
      <p>City: {city}</p>
      <p>Agreed: {agree.toString()}</p>
    </>
  );
};

root.render(<App />);
