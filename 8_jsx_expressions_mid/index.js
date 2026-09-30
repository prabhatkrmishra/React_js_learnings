const root = ReactDOM.createRoot(document.getElementById('main'));

function PrivateInfoComponent() {
    var firstName = 'Kag';
    var lastName = 'Bhusundi'
    var dob = '14/14/1000'
    var age = 1026;

    // arrays
    var cards = ['Pan Card', ' | ', 'Adhaar Card', ' | ', 'Voter ID Card'];

    const header = <h2>Private infos:</h2>;
    return (
        <React.Fragment>
            {header}
            <p>Person name: {firstName + ' ' + lastName}</p>
            <p>Person dob: {dob}</p>
            <p>Person age: {age}</p>
            <p>Person cards: {cards}</p>
        </React.Fragment>
    );
}

const PublicInfoComponent = () => {
    var occupation = 'Unknown';
    var isAlive = false;

    // objects
    // Directly whole object cannot be rendered
    var carDetails = {
        companyName: 'SKIA',
        carName: 'skia Alto 800'
    };

    var landStates = ['New Delhi', 'Assam', 'Tamil Nadu', 'Bihar', 'UP'];

    const header = <h2>Public infos:</h2>;
    return (
        <>
            {header}
            <p>Person occupation: {occupation}</p>
            <p>Person is alive? {isAlive.toString()}</p>
            <p>Person car name: {carDetails.carName}</p> 
            <p>Person car company: {carDetails.companyName}</p>
            <p>Person owning property states: </p>
            {
                // Keys are necessary so index is used as keys
                <ul>
                    {
                        landStates.map((state, index) => (
                            <li key={index}>{state}</li>
                        ))
                    }
                </ul>
            }
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
