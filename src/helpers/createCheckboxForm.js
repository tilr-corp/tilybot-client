import React from 'react';
import CheckboxForm from 'components/CheckboxForm';
import inputHandler from 'actions/inputHandler';
import logMessage from 'actions/logMessage';

/*
**	Creates a checkbox form from the given set of internal values and display values
*/
const createCheckboxForm = (checkboxes) => {
	return (
		<CheckboxForm
			checkboxes={checkboxes}
			onClick={(value) => {
				return {
					type: 'TOGGLE_CHECK',
					value: value
				};
			}}
			onSubmit={(checked) => {
				return (dispatch) => {
					if (checked.length !== 0) {
						let input = checked.join(", ");
						dispatch({ type: "CLEAR_CHECKED" });
						dispatch(logMessage({
							author: 'YOU',
							body: input
						}));
						dispatch(inputHandler(input));
					}
				};
			}}
		/>
	);
}

export default createCheckboxForm;