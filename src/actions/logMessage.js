/*
**	Dispatch this to add a message to the log
*/
const logMessage = (message) => {
	return (dispatch) => {
		if ((typeof message.body === 'string' && message.body !== '') || typeof message.body !== 'string') {
			console.log(message.author + ' sent a message.');
			dispatch({
				type: 'LOG_MESSAGE',
				value: message
			});
		}
	};
};

export default logMessage;