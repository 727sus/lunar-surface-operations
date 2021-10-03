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

// Create a new log
function postNewLog(form) {

    const formData = new FormData();

    Object.keys(form).forEach(
        key => formData.append(key, form[key])
    );

    const requestOptions = { 
        method: 'POST', 
        headers: User.getUserAuthHeader() ,
        body: formData
    }

    return fetch('https://reqres.in/api/users?page=2', requestOptions)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            return json.data;
        });
}

export {
    getActiveLogs,
    postNewLog
}