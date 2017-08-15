import Axios from 'axios';
import { v4 } from 'uuid';

const QUERY = '/query?v=20150910';
const sessionId = v4();

const _apiaiClient = Axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	timeout: process.env.REACT_APP_TIMEOUT,
	headers: {
		Authorization: 'Bearer 50f3c6c2097e46d4979c6efb5190b91d'
	}
});

export default {
	textRequest: async (query, data = {}) => _apiaiClient.post(
		QUERY,
		{
			query: query,
			lang:'en',
			sessionId,
			...data
		}
	),
	eventRequest: async (eventName, data = {}, eventParams = {}) => _apiaiClient.post(
		QUERY,
		{
			event: {
				name: eventName,
				data: eventParams
			},
			lang:'en',
			sessionId,
			...data
		}
	)
};