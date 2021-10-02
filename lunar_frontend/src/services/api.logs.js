import * as User from '../utils/util.user';

// Get all currently active logs
function getActiveLogs() {
    const requestOptions = { method: 'GET', headers: User.getUserAuthHeader() }
    return fetch('https://reqres.in/api/users?page=2', requestOptions)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            return json.data;
        });
}

export {
    getActiveLogs
}