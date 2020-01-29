import axios from 'axios';

const baseUrl = 'https://bloggy-api.herokuapp.com';

export default {
	getAllPost() {
		return axios.get(`${baseUrl}/posts`);
	},

	getOnePost(id) {
		return axios.get(`${baseUrl}/posts/${id}?_embed=comments`);
	},

	deletePost(id) {
		return axios.delete(`${baseUrl}/posts/${id}`);
	},

	addPost(body) {
		return axios.post(`${baseUrl}/posts`, body);
	},

	updatePost(id, body) {
		return axios.put(`${baseUrl}/posts/${id}`, body);
	},

	addComment(body) {
		return axios.post(`${baseUrl}/comments`, body);
	},
};
