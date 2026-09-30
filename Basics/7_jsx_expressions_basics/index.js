const root = ReactDOM.createRoot(document.getElementById('main'));

function PrivateInfoComponent() {
    // JSX expressions
    var firstName = 'Kag';
    var lastName = 'Bhusundi'
    var dob = '14/14/1000'
    var age = 1026;
    const header = <h2>Private infos:</h2>;
    return (
        <React.Fragment>
            {header}
            <p>Person name: {firstName + ' ' + lastName}</p>
            <p>Person dob: {dob}</p>
            <p>Person age: {age}</p>
        </React.Fragment>
    );
}

const PublicInfoComponent = () => {
    var occupation = 'Unknown';
    var isAlive = false;
    const header = <h2>Public infos:</h2>;
    return (
        <>
            {header}
            <p>Person occupation: {occupation}</p>
            <p>Person is alive? {isAlive.toString()}</p> // passing function
        </>
    );
};

const App = () => {
    var dataType = 'BioData';
    var header = <h1>This is a {dataType}</h1>;
    return (
        <>
            {header}
            <PrivateInfoComponent />
            <PublicInfoComponent />
        </>
    );
};

root.render(React.createElement(React.Fragment, null, <App />));
