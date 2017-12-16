var React = require('react');
var ReactDOM = require('react-dom');
var DateRange = require('react-date-range');

var App = React.createClass({
	render () {
		return (
			<div>
				<DateRange />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
