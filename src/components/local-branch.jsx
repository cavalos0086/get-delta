import React, { Component } from 'react';

export default class LocalBranch extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-8 mx-auto">
					<div className="form-group">
						<label htmlFor="">Local Branch</label>
						<textarea name="" id="" cols="30" rows="10" className="form-control" row="3"></textarea>
					</div>
				</div>
			</div>
		);
	}
}