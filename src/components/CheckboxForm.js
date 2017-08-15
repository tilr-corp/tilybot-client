import React from 'react';
import { connect } from 'react-redux';
import CheckboxComponent from 'components/CheckboxComponent';
import { FormGroup, Button } from 'react-bootstrap';

const createCheckboxes = (checkboxes, onClick, checked) => {
	return checkboxes.map((elem) => (
		<CheckboxComponent
		key={elem.value}
		{...elem}
		onClick={onClick}
		isChecked={checked.findIndex((checkedElem) => checkedElem === elem.value) !== -1}
		/>
	));
};

let CheckboxForm = ({ checkboxes, onClick, onSubmit, checked, dispatch }) => {
	return (
		<FormGroup>
			{createCheckboxes(checkboxes, onClick, checked)}
			<Button
			bsStyle='primary'
			onClick={() => dispatch(onSubmit(checked))}
			style={{ backgroundColor:'#2797b7', borderColor:'#1f7a93' }}
			>
				Submit
			</Button>
		</FormGroup>
	);
};

export default connect(
	(state) => { return { checked: state.checked }; },
	(dispatch) => { return { dispatch }; }
)(CheckboxForm);