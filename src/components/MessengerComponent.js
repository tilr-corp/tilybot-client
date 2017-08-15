import React from 'react';
import { connect } from 'react-redux';
import nextAction from 'actions/nextAction';
import InputComponent from 'components/InputComponent';
import LogComponent from 'components/LogComponent';

class MessengerComponent extends React.Component {
	componentDidMount() {
		this.props.dispatch(nextAction());
	}

	render() {
		return (
			<div id='message-interface' style={{ height:'80vh' }}>
				<LogComponent />
				<InputComponent onSubmit={this.props.onSubmit} />
			</div>
		);
	}
}

export default connect()(MessengerComponent);