export default (fulfillment) => {
	if (fulfillment.hasOwnProperty("data"))
		return fulfillment.data.tilybot;
	let messageObj = fulfillment.messages.find((elem) => elem.type === 4 && elem.payload.hasOwnProperty("tilybot"));
	if (messageObj !== undefined)
		return messageObj.payload.tilybot;
	return {
		messages: [
			{
				type: 'text',
				body: fulfillment.speech
			}
		]
	};
};