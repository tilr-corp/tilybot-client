/*
**	Set containing values corresponding to the checkboxes that are checked
**
**	Checkbox is toggled when TOGGLE_CHECK is dispatched
*/
const checked = (state, action) => {
	if (typeof state === 'undefined')
		return [];

	if (action.type === 'TOGGLE_CHECK') {
		if (state.findIndex((elem) => elem === action.value) === -1)
			return [...state, action.value];
		else
			return state.filter((elem) => elem !== action.value);
	} else if (action.type === 'CLEAR_CHECKED') {
		return [];
	}

	return state;
};

export default checked;