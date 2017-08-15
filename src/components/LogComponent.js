import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

const formatLog = (log) => {
	let len = log.length;
	return log.map((elem, index) => {
		let offset = typeof elem.body === 'string' && elem.author === 'YOU' ? 1 : 0;
		let size = typeof elem.body === 'string' ? 11 : 12;
		let style = typeof elem.body === 'string' && elem.author === 'YOU' ? { textAlign:'right' } : { textAlign:'left'};
		let message = (
			<div
			style={{
				border: typeof elem.body === 'string' ? '1px solid #2797b7' : 'none',
				borderRadius:'5px',
				backgroundColor: elem.author === 'TILYBOT' ? 'white' : '#2797b7',
				color: elem.author === 'TILYBOT' ? 'black' : 'white',
				padding:'5px',
				marginTop:'2px',
				wordWrap:'break-word',
				whiteSpace:'pre-wrap'
			}}
			>
				{elem.body}
			</div>
		);
		if (typeof elem.body === 'string') {
			message = (
				<div style={{ display:'inline-block', maxWidth:'100%' }} >
					<img src={elem.author === 'TILYBOT' ? 'submarine.png' : 'blank_profile.png'} alt={'No img found :('} style={{ height:'20px', width:'auto' }} />
					<br />
					{message}
				</div>
			);
		}

		return (
			<Row key={len - index}>
				<Col xsOffset={offset} smOffset={offset} mdOffset={offset} xs={size} sm={size} md={size} style={{ padding:'5px 25px' }}>
					<div style={style}>{message}</div>
				</Col>
			</Row>
		);
	});
}

class LogComponent extends React.Component {
	componentDidUpdate() {
		this.refs.log.scrollTop = this.refs.log.scrollHeight;
	}

	render() {
		return (
			<div ref='log' style={{ overflowY:'scroll', overflowX:'hidden', height:'90%' }}>{formatLog(this.props.log)}</div>
		);
	}
}

export default connect(
	(state) => { return { log: state.log }; },
	(dispatch) => { return { dispatch }; }
)(LogComponent);