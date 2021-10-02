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
    return true;
}

// Assign each username/id a color
function getUserColor(str) {
    var hash = djb2(str);
    var r = (hash & 0xFF0000) >> 16;
    var g = (hash & 0x00FF00) >> 8;
    var b = hash & 0x0000FF;
    return "#" + ("0" + r.toString(16)).substr(-2) + ("0" + g.toString(16)).substr(-2) + ("0" + b.toString(16)).substr(-2);
}

// Returns current logged in username
function getUsername() {
    return "Xiwen Teoh";
}

export {
    isAuthenticated,
    getUsername,
    getUserColor
}