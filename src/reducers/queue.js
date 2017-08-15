import ONBOARDING_QUEUE from "onboardingQueue";

/*
**	Adds actions to the fallback queue when ENQUEUE_FRONT or ENQUEUE_BACK is dispatched.
**
**	Pops the front of the queue when NEXT_ACTION is dispatched.
**
**	The queue will be used to trigger another intent in Api.Ai when a message indicating such is received from Api.Ai
*/
const queue = (state, action) => {
	if (typeof state === 'undefined')
		// return [{ eventName: 'GENERAL_WELCOME', params: {} }];
		return ONBOARDING_QUEUE;
		// return [{ eventName: 'PSEUDO_TITLE', params: { id: '0fa68737-a65c-4176-b8b5-e829d4eb384f' } }];

	switch(action.type) {
		case "ENQUEUE_FRONT":
			return [action.value, ...state];
		case "ENQUEUE_BACK":
			return [...state, action.value];
		case "NEXT_ACTION":
			return state.slice(1);
		default: break;
	}

	return state;
};

export default queue;