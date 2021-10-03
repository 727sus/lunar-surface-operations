import * as Url from '../utils/util.url';
import * as User from '../utils/util.user';
import { handleResponse } from './api.handler';

// Submit login request
function postLogin(username, password) {

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    const requestOptions = { method: 'POST', body: formData }

    const userData = fetch(`${Url.API_ROOT}/dj-rest-auth/login/`, requestOptions).then(handleResponse);
    User.updateUserData(userData);

    return userData;
}

// Submit registration request
function postRegistration(username, email, password, confirmPassword) {

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password1", password);
    formData.append("password2", confirmPassword);
    
    const requestOptions = { method: 'POST', body: formData }
    
    const userData = fetch(`${Url.API_ROOT}/dj-rest-auth/registration/`, requestOptions).then(handleResponse);
    User.updateUserData(userData);

    return userData;
}

// Submit logout request
function postLogout() {
    const requestOptions = { method: 'POST' }
    return fetch(`${Url.API_ROOT}/logout`, requestOptions)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            return json.data;
        });
}

export {
    postLogin,
    postLogout,
    postRegistration
}