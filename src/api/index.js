import axios from 'axios';

// URL for deploy to heroku
// const url = 'https://surpasslabs.herokuapp.com/posts';

// const url = 'https://jsonplaceholder.typicode.com/posts'
// URL for dev env
const url = 'http://localhost:5001/api/investment';

// export const fetchPosts = () => axios.get('http://localhost:5001');

export const fetchInvestment = () => axios.get(url);


export const createPost = (newPost) => axios.post(url, newPost);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);