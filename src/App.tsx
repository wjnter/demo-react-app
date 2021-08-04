import React from "react";
import "./assets/css/style.css";

import Counter from "./components/Counter";
import EmployeeTable from "./components/EmployeeTable";

const App = () => {
	return (
		<div>
			<h1 className="text-center">Sample React</h1>
			<Counter />
			<EmployeeTable />
		</div>
	);
};

export default App;
