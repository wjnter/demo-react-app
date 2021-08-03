import React, { useState } from "react";
import { Button } from "antd";

const Counter = () => {
	const [valueCounter, setValueCounter] = useState(0);
	return (
		<div>
			<Button
				type="primary"
				onClick={() => setValueCounter((value: number) => value + 1)}
			>
				Increase
			</Button>
			<Button type="primary" onClick={() => setValueCounter(0)}>
				Reset
			</Button>
			<div>Counter: {valueCounter}</div>
		</div>
	);
};

export default Counter;
