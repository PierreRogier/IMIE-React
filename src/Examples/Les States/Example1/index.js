import React, { useState } from "react";

const StateExample1 = () => {
	const [timer, setTimer] = useState(0);

	const decrement = () => {
		if (timer > 0) {
			setTimer(timer - 1);
		}
	};

	return (
		<div>
			<p>{timer}</p>
			<button disabled={timer === 0 ? true : false} onClick={decrement}>
				decrement
			</button>
			<button style={{}} onClick={() => setTimer(timer + 1)}>
				increment
			</button>
		</div>
	);
};

export default StateExample1;
