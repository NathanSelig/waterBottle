import React from "react";

export default function Unit({unit , setUnit}) {
	function handleSelect(e) {
		setUnit(e.target.value);
	}
	return (
		<div>
			<h3>Unit</h3>
			<select
				value={unit}
				onChange={handleSelect}>
				<option value='Oz'>Oz</option>
				<option value='ml'>ml</option>
                <option value='l'>l</option>
			</select>
		</div>
	);
}
