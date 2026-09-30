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
    // This variable remembers which number we are showing right now
    const [count, setCount] = React.useState(0);

    var oddEven = [1, 2, 3, 4, 5, 6];

    // This runs only once, when the page loads.
    // It waits 1 second, then changes the number, and repeats forever.
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCount(oldCount => (oldCount + 1) % 6);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Get the number using the current count (0 -> 1, 1 -> 2, ...)
    var currentNo = oddEven[count];

    // A simple variable we will use with the || operator below
    var isLoggedIn = false;

    return (
        <>
            <h1>This is a BioData</h1>
            <h2>Number: {currentNo}</h2>

            {
                /*
                 * ? :  TERNARY
                 * Use it when you have TWO options.
                 * "Pick one of these two."
                 */
                currentNo % 2 === 0 ? <PrivateInfoComponent /> : <PublicInfoComponent />
            }

            {
                /*
                 * &&  AND
                 * Use it when you have ONE option (no else).
                 * "Show this only if something is true."
                 */
                currentNo % 2 === 0 && <h3>This number is EVEN</h3>
            }

            {
                /*
                 * Same operator, other condition.
                 * Not even -> this shows. Even -> nothing shows.
                 */
                currentNo % 2 !== 0 && <h3>This number is ODD</h3>
            }

            {
                /*
                 * ||  OR
                 * Use it when something is missing and you need a backup.
                 * "Use this value, or use that one if this is empty."
                 */
                isLoggedIn || <p>Please log in to see more details</p>
            }

            {
                /*
                 * ||  OR - use it to pick a backup value.
                 * Has a name -> shows the name.
                 * No name    -> shows "Guest".
                 */
                <p>Hello, {'' || 'Guest'}</p>
            }
        </>
    );
};

root.render(React.createElement(React.Fragment, null, <App />));
