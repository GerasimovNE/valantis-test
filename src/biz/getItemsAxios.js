import axios from './axios';

let count = 0;

export const getItemsAxios = async (action, params) => {
    const result = await axios
        .post('', { action: action, params: { ...params } })
        .then((response) => {
            return response.data.result;
        })
        .catch((error) => {
            if (error.response.data) {
                console.log(error.response.data);
            }
            if (error.response.data === 'Bad Request') {
                return 'bad request';
            }
        });
    result ? (count = 0) : count++;
    return result || count > 10 ? result : getItemsAxios(action, params);
};
