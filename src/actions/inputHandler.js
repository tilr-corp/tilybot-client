import api from "api";
import nextAction from "actions/nextAction";
import logMessage from "actions/logMessage";
import getTilybotPayload from "helpers/getTilybotPayload";
import createButtonSet from "helpers/createButtonSet";
import createCheckboxForm from "helpers/createCheckboxForm";

/*
**	Dispatch this with the user's input when the user submits input
*/
const inputHandler = (input) => {
	return async (dispatch, getState) => {
		try {
			if (input !== '') {
				let res = await api.textRequest(input, {
					contexts: [
						{
							name: "creds",
							parameters: getState().user,
							lifespan: 1
						}
					]
				});

				let payload = getTilybotPayload(res.data.result.fulfillment);

				dispatch({ type: 'ENABLE_TEXT' });

				if (payload.hasOwnProperty("skills")) {
					payload.skills.forEach((elem) => {
						dispatch({
							type: "ENQUEUE_FRONT",
							value: {
								eventName: "RATE_SKILL",
								params: {
									skill: elem
								}
							}
						});
					});
				}

				if (payload.hasOwnProperty("messages")) {
					payload.messages.forEach((elem) => {
						let body;
						switch(elem.type) {
							case "text":
								body = elem.body;
								break;
							case "buttons-stack":
								body = createButtonSet(elem.options, true);
								dispatch({ type: 'DISABLE_TEXT' });
								break;
							case "buttons-row":
								body = createButtonSet(elem.options, false);
								dispatch({ type: 'DISABLE_TEXT' });
								break;
							case "checkbox":
								body = createCheckboxForm(elem.options);
								dispatch({ type: 'DISABLE_TEXT' });
								break;
							case "error":
								body = elem.body;
								console.log(JSON.stringify(res.data.result.parameters.error));
								break;
							default: break;
						}
						dispatch(logMessage({
							author: "TILYBOT",
							body
						}));
					});
				}

				if (payload.hasOwnProperty("next") && payload.next)
					dispatch(nextAction());
			}
		} catch (err) {
			console.log(err);
		}
	};
};

export default inputHandler;