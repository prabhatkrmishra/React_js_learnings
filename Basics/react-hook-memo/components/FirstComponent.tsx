'use client';

import { useState, memo, useMemo } from "react";

const FirstComponent = () => {
    console.log('Rendering FirstComponent');

    const [count, setCount] = useState(0);
    const [num, setNum] = useState(10);

    const heavyLoop = () => {
        console.log("Running heavy loop");
        var i = 0;
        for (i = 1; i < 1000000000; i++) {
            //
        }

        return i;
    }

    const memozied = useMemo(heavyLoop, [count]);

    return (<>
        <p>Count Is: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment1</button>
        <p>Num Is: {num}</p>
        <button onClick={() => setNum(num + 1)}>Increment2</button>
    </>);
}

export default memo(FirstComponent); // -> skip re rendering the components if its props are unchanged
