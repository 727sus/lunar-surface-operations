import * as User from '../utils/util.user';

// Get all archived logs of current user
function getMyLogs() {
    const requestOptions = { method: 'GET', headers: User.getUserAuthHeader() }
    return fetch('https://reqres.in/api/users?page=1', requestOptions)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            return json.data;
        });
}

export {
    getMyLogs
}