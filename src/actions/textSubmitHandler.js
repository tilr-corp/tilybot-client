import inputHandler from 'actions/inputHandler';
import logMessage from 'actions/logMessage';

/*
**	The onSubmit handler for text input. Dispatch this within the onSubmit function in the text input component.
*/
const textSubmitHandler = (input) => {
	return (dispatch) => {
		dispatch(logMessage({
			author: 'YOU',
			body: input
		}));
		dispatch(inputHandler(input));
	};
};

export default textSubmitHandler;