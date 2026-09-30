const root = ReactDOM.createRoot(document.getElementById("main"));

const runOptions = [0, 1, 2, 3, 4, 6];
let scoreCard = [];
let score = 0;
let wicket = 0;

// Keeps the final score so we can show it after the game ends
let finalScore = "";

function TopComponent() {
  return <h1>Score keeper app</h1>;
}

const BottomComponent = () => {
  function addRuns(num) {
    // push the ball into the array
    scoreCard.push(num);
    score += num;

    // Render to display the change
    root.render(<App />);
  }

  function addWicket() {
    scoreCard.push("W");
    wicket += 1;

    if (wicket === 11) {
      alert(`Game Over ! \nFinal score : ${score}/${wicket}`);

      resetGame();
      return;
    }

    // Render to display the change
    root.render(<App />);
  }

  function resetGame() {
    scoreCard = [];
    score = 0;
    wicket = 0;

    // Render to display the change
    root.render(<App />);
  }

  function newGame() {
    resetGame();
    finalScore = "";
    root.render(<App />);
  }

  // Split the balls into overs
  function getOvers() {
    var overs = [];

    // take 6 balls at a time
    for (var i = 0; i < scoreCard.length; i = i + 6) {
      overs.push(scoreCard.slice(i, i + 6));
    }

    // newest over on top
    return overs.reverse();
  }

  return (
    <>
      <h2>
        Score is: {score}/{wicket}
      </h2>

      {/* Show the final result after the game ends */}
      {finalScore !== "" && <h3>{finalScore}</h3>}

      <h4>This ball: {scoreCard[scoreCard.length - 1]}</h4>

      <div>
        {/* map turns the array into buttons */}
        {runOptions.map((run) => (
          <button key={run} onClick={() => addRuns(run)}>
            {run}
          </button>
        ))}

        <button onClick={addWicket}>Wicket</button>
        <button onClick={newGame}>New Game</button>
      </div>

      {/* Show this heading only when at least one ball is played */}
      {scoreCard.length > 0 && <h4>Over wise record:</h4>}

      {getOvers().map((over, index) => {
        // add up the runs of this over. "W" adds nothing.
        var overScore = 0;
        for (var j = 0; j < over.length; j++) {
          if (over[j] !== "W") {
            overScore += over[j];
          }
        }

        return (
          <div key={index}>
            <b>Over {getOvers().length - index}:</b>
            {/* print the 6 balls of this over */}
            {over.map((ball, i) => (
              <span key={i}> [{ball}] </span>
            ))}
            <b>= {overScore} runs</b>
          </div>
        );
      })}
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

root.render(<App />);
