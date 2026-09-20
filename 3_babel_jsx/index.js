const root = ReactDOM.createRoot(document.getElementById('main'));

const pageBody = (
<div>
    <h1>Hello, React!</h1>
    <h2>I am heading 2</h2>
    <div>This is a new body content element created using React</div>
    <button onClick={() => alert('Button clicked!')}>Click ME</button>
</div>
);

// var pageBody2 = /*#__PURE__*/React.createElement("div", null,
//    /*#__PURE__*/React.createElement("h1", null, "Hello, React!"),
//    /*#__PURE__*/React.createElement("h2", null, "I am heading 2"),
//    /*#__PURE__*/React.createElement("div", null, "This is a new body content element created using React"), /*#__PURE__*/React.createElement("button", {
//  onClick: function onClick() {
//    return alert('Button clicked!');
//  }
//}, "Click ME"));

root.render(
    React.createElement(React.Fragment, null, pageBody)
);