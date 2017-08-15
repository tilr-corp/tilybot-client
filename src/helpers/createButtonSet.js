import React from 'react';
import ButtonSet from 'components/ButtonSet';
import inputHandler from 'actions/inputHandler';
import logMessage from 'actions/logMessage';

/*
**	Creates a connected set of buttons from the given set of internal values and display values
*/
const createButtonSet = (buttons, spacing = false) => {
	return (
		<ButtonSet
		buttons={buttons}
		spacing={spacing}
		onClick={(label, value) => {
			return (dispatch) => {
				dispatch(logMessage({ author: 'YOU', body: label }));
				dispatch(inputHandler(value));
			};
		}}
		/>
	);
}

export default createButtonSet;