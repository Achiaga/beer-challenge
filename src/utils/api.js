import axios from 'axios';

const MAIN_URL = 'https://api.punkapi.com/v2';

const fullPath = (path) => `${MAIN_URL}${path}`;

const fetchApi = (path, data = {}, method = 'get') => {
	return axios({
		method,
		url: fullPath(path),
	})
		.then((response) => {
			return response.data;
		})
		.catch((error) => console.error(error.message));
};

export default fetchApi;
