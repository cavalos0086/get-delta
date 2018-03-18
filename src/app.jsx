import React from 'react';
import REACTDOM from 'react-dom';
import './index.css';

import Coverage from './components/coverage';
import CoverageSummary from './components/coverage-summary';

export default class App extends React.Component {
	render() {
		return (
			<div className="container-fluid px-0">
				<div className="jumbotron text-center">
					<h1 style={styles.title}>Coverage Summary</h1>
				</div>
				<div className="row">
					<div className="col-10 mx-auto">
						<h3 className="text-center">DEV branch</h3>
						<Coverage branch="dev"/>
						<h3 className="text-center">YOUR branch</h3>
						<Coverage branch="your"/>
						<button className="float-right btn btn-info">Generate Delta</button>
					</div>
				</div>

				<div className="row">
					<CoverageSummary />
				</div>
			</div>
		);
	}
}

const styles = {
	title: {
		fontSize: 70,
		fontFamily: 'Roboto',
	},
}