const root = ReactDOM.createRoot(document.getElementById('main'));

// Normal function
function TopComponent() {
    return (
        <React.Fragment>
            <h1>Hello, React!</h1>
            <h2>I am heading 2</h2>
        </React.Fragment>
    );
}

// Arrow function
// const BottomComponent = function() => {
const BottomComponent = () => {
    return (
        <>
            <div>This is a new body content element created using React</div>
            <button onClick={() => alert('Button clicked!')}>Click ME</button>
        </>
    );
};

const App = () => {
    return (
        <>
            <TopComponent />
            <BottomComponent />
        </>
    );
};

root.render(React.createElement(React.Fragment, null, <App />));
