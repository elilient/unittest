const axios = require('axios');

const token = 'token';

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const functions = {
    fetchUserInfo: () => axios.get('https://jaks.ee:3000/user/me', config)
        .then(res => res.data)
        .catch(err => err)
};

module.exports = functions;
