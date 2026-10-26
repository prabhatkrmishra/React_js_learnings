'use client';

import { memo, useCallback, useState } from "react";

const Child = memo(({ onClick }: { onClick: () => void }) => {
    console.log("Child rendered");

    return <button onClick={onClick}>Click me</button>;
});

const SecondComponent = () => {
    console.log("Rendering SecondComponent");

    const [character, setCharacter] = useState("-");
    const [currentNum, setCurrentNum] = useState(1);

    const handleOnClick = () => {
        setCharacter(String.fromCharCode(currentNum + 64));
        setCurrentNum(prev => prev + 1);
    };

    const handleClick = useCallback(() => {
        console.log("Button clicked");
    }, []);

    /*const handleClick = () => {
        console.log("Button clicked");
    };*/
    /*
        A new function is created on every parent render.
        memo(Child) sees the changed onClick prop and re-renders Child.
        Because handleClick is redefined on every render, memo(Child) sees a new
        function reference and re-renders every time.
    */


    return (
        <>
            <p>Current character: {character}</p>

            <button onClick={handleOnClick}>Increment</button>

            <Child onClick={handleClick} /> {/* Just because child prop not changing so its not re rendering */}
        </>
    );
};

export default SecondComponent;