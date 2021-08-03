import React, { useState } from "react";
import { Table, Tag, Space } from "antd";
import "./App.css";

import Counter from "./components/Counter";
import EmployeeTable from "./components/EmployeeTable";

const App = () => {

	return (
		<div className="App">
			<Counter />
      <EmployeeTable />
		</div>
	);
};

export default App;
