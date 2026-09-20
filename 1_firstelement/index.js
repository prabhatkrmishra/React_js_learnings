const root = ReactDOM.createRoot(document.getElementById('main'));

const reactHeading = React.createElement('h1', null, 'Hello, React!');
const newContent = React.createElement('div', null, 'This is a new body content element created using React.createElement.');
const newButton = React.createElement('button', { onClick: () => alert('Button clicked!')}, 'Click ME');

root.render(
    React.createElement(React.Fragment, null, reactHeading, newContent, newButton)
);