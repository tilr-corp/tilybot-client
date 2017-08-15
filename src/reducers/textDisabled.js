/*
**	Enables and disables the text input box with each TOGGLE_TEXT, ENABLE_TEXT, and DISABLE_TEXT action dispatched
*/
const textDisabled = (state, action) => {
	if (typeof state === 'undefined')
		return false;

	switch (action.type) {
		case 'TOGGLE_TEXT' :
			console.log("Text input is now " + (!state ? "disabled" : "enabled"));
			return !state;
		case 'ENABLE_TEXT' :
			console.log("Text input is now enabled");
			return false;
		case 'DISABLE_TEXT' :
			console.log("Text input is now disabled");
			return true;
		default: return state;
	}
}

export default textDisabled;