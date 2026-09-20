const root = ReactDOM.createRoot(document.getElementById('main'));

const pageBody = (
<React.Fragment>
    <h1>Hello, React!</h1>
    <h2>I am heading 2</h2>
</React.Fragment>
);

const pageBody2 = (
<>
    <div>This is a new body content element created using React</div>
    <button onClick={() => alert('Button clicked!')}>Click ME</button>
</>
);

root.render(
    React.createElement(React.Fragment, null, pageBody, pageBody2)
);