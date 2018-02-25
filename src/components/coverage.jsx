import React from 'react';

export default function Coverage(props) {
	return (
		<div className="form-group">
			<label htmlFor="">{props.branch.toUpperCase()} branch</label>
			<textarea name="" id="" cols="20" rows="8" className="form-control"></textarea>
		</div>
	);
}