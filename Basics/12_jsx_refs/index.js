const root = ReactDOM.createRoot(document.getElementById("main"));

const App = () => {
  const buttonRef = React.useRef(null);

  function handleClick() {
    console.log(buttonRef.current);
    buttonRef.current.innerText = "This button have been clicked!";
    buttonRef.current.style.backgroundColor = "red";
  }

  return (
    <button ref={buttonRef} onClick={handleClick}>
      Click the Button
    </button>
  );
};

root.render(<App />);
