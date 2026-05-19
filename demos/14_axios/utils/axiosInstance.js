const axios = require("axios");

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    }
})

module.exports = api;