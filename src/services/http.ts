import axios from 'axios';

const http = axios.create({
	baseURL: 'https://65561b3384b36e3a431f0e2b.mockapi.io/api/v1/'
});

export default {
	get: http.get,
	post: http.post,
	put: http.put,
	delete: http.delete,
	patch: http.patch
};
