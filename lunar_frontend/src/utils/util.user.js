
import { BehaviorSubject } from "rxjs";

const currentUserSubject = new BehaviorSubject();

// Used by api.auth.js to store returned user data
function updateUserData(userData) {
    currentUserSubject.next(userData);
}

// Hash function
function djb2(str){
    var hash = 5381;
    for (var i = 0; i < str.length; i++) {
      hash = ((hash << 5) + hash) + str.charCodeAt(i); /* hash * 33 + c */
    }
    return hash;
}

// Check if user is logged in
function isAuthenticated() {
    return (currentUserSubject.value == undefined)? false : true;
}

// Assign each username/id a color
function getUserColor() {
    var hash = djb2('author');
    var r = (hash & 0xFF0000) >> 16;
    var g = (hash & 0x00FF00) >> 8;
    var b = hash & 0x0000FF;
    return "#" + ("0" + r.toString(16)).substr(-2) + ("0" + g.toString(16)).substr(-2) + ("0" + b.toString(16)).substr(-2);
}

// Return all of user's profile data
function getUserData() {
    return currentUserSubject.value;
}

// Returns current logged in username
function getUsername() {
    return currentUserSubject.value.username;
}

function getFirstName() {
    return currentUserSubject.value.last_name;
}

function getLastName() {
    return currentUserSubject.value.first_name;
}

// Return current logged in user's authorization header
function getUserAuthHeader() {
    if(isAuthenticated()) {
        return { Authorization: currentUserSubject.value.access_token };
    } else {
        return {};
    }
}

export {
    isAuthenticated,
    getUsername,
    getFirstName,
    getLastName,
    getUserColor,
    getUserAuthHeader,
    getUserData,
    updateUserData
}