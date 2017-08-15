import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

const ButtonComponent = ({ label, value, onClick, spacing = false, dispatch }) => {
	return (
		<Button
		bsSize='sm'
		onClick={(event) => {
			event.preventDefault();
			dispatch(onClick(label, value));
		}}
		block={spacing}
		style={{ whiteSpace:'pre-wrap' }}
		>
			{label}
		</Button>
	);
};

export default connect()(ButtonComponent);