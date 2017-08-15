/*
**	Keeps track of the current user's ID and related credentials for database access
**
**	Updates the tracked data when LOG_IN_USER is dispatched.
*/
const user = (state, action) => {
	if (typeof state === 'undefined')
		return {
			id: "f9e092f4-ebf5-428e-81fa-1f6041fc7464",
			email: "jchen+4@tilr.com",
			token: "HZkAiQhyw7wHYFGD8h2j"
		};

	if (action.type === 'LOG_IN_USER') {
		console.log("Signed in as " + action.value.email);
		return action.value;
	}

	return state;
};

export default user;