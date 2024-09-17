import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api/',
	params: {
		key: '35de82cf2eec4777b19785115e160e24',
	},
});
