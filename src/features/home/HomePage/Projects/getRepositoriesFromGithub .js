import axios from 'axios';

export const getRepositoriesFromGithub = (userName) => 
    axios.get(`https://api.github.com/users/${userName}/repos`)
        .then(response => response.data)
        .then(response => response)
