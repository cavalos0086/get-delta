import React, { Component } from 'react';

export default class DevBranch extends Component {
	render(props) {
		return (
			<div className="row">
				<div className="col-8 mx-auto">
					<div className="form-group">
						<label htmlFor="">Dev Branch</label>
						<textarea name="" id="" cols="30" rows="10" className="form-control" row="3"></textarea>
					</div>
				</div>
			</div>
		);
	}
}