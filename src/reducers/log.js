/*
**	Updates the stored log whenever LOG_MESSAGE is dispatched
*/
const log = (state, action) => {
	if (typeof state === 'undefined')
		return [];

	switch(action.type) {
		case "LOG_MESSAGE" :
			return [
				...state.filter((elem) => typeof elem.body === 'string'),
				action.value
			];
		default: return state;
	}
};

export default log;