const root = ReactDOM.createRoot(document.getElementById('main'));

const reactHeading = (<h1>Hello, React!</h1>);
const newContent = (<div>This is a new body content element created using React</div>);
const newButton = (<button onClick={() => alert('Button clicked!')}>Click ME</button>);

root.render(
    React.createElement(React.Fragment, null, reactHeading, newContent, newButton)
);