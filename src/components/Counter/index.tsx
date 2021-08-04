import React, { useState } from "react";
import { Button } from "antd";

import "./style.css";
import "../../assets/css/style.css";

const Counter = () => {
	const [valueCounter, setValueCounter] = useState(0);
	return (
		<div className="counter-container text-center">
			<h2>Counter</h2>
			<p className="counter-value">{valueCounter}</p>
			<Button danger type="primary" onClick={() => setValueCounter(0)}>
				Reset
			</Button>
			<Button
				type="primary"
				onClick={() => setValueCounter((value: number) => value + 1)}
				className="counter-btn-increment"
			>
				Increase
			</Button>
		</div>
	);
};

export default Counter;
