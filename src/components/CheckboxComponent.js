import React from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'react-bootstrap';

let CheckboxComponent = ({ label, value, isChecked, onClick, dispatch }) => {
	return (
		<Checkbox
		type='checkbox'
		value={value}
		checked={isChecked}
		onChange={() => dispatch(onClick(value))}
		>
			{label}
		</Checkbox>
	);
};

export default connect()(CheckboxComponent);