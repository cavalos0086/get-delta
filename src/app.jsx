import React from 'react';
import REACTDOM from 'react-dom';
import './index.css';

import Coverage from './components/coverage';
import CoverageSummary from './components/coverage-summary';
import DevBranch from './components/dev-branch';
import LocalBranch from './components/local-branch';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {val: 1};
	}

	render() {
		return (
			<div className="container-fluid mt-5">
				<DevBranch onChange="setDevCoverage()" />
				<LocalBranch />
				<div className="row">
					<div className="col-8 mx-auto">
						<button className="btn btn-primary float-right">get Coverage</button>
					</div>
				</div>
			</div>
		);
	}

	setDevCoverage() {

	}
}

const styles = {
	title: {
		fontSize: 70,
		fontFamily: 'Roboto',
	},
}