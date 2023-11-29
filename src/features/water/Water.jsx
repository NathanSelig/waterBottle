import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_LOG, DELETE_LOG, EDIT_LOG } from "./waterSlicer";
import { useState } from "react";
import Unit from "./Unit";
import TotalDrank from "./TotalDrank";

export function Water() {
	const dispatch = useDispatch();
	const logs = useSelector((state) => state.water.logs);
	const [waterAmount, setWaterAmount] = useState(" ");
	const [unit, setUnit] = useState("Oz");

	function handleWaterAdd() {
		setWaterAmount("");
		dispatch(ADD_LOG({ amount: waterAmount, unit: unit }));
		console.log(logs);
	}
	return (
		<div>
			<h2>Add water</h2>
			<input
				type='text'
				value={waterAmount}
				onChange={(e) => setWaterAmount(e.target.value)}
			/>
			<button onClick={handleWaterAdd}>add log</button>
			<Unit
				unit={unit}
				setUnit={setUnit}
			/>
			<TotalDrank
				logs={logs}
				unit={unit}
			/>

			<h2>Water Logs</h2>
			<ul>
				{logs.map((log) => (
					<li key={log.id}>{`${Number(log.waterAmount)} ${log.unit}`}</li>
				))}
			</ul>
		</div>
	);
}
