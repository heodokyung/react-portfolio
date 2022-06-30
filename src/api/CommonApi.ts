import axios from 'axios';

export const CommonApi = axios.create({
	baseURL: 'https://heodokyung.github.io/portfolio-data-json',
});

export default CommonApi;
