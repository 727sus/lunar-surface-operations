// This file contains:
// 1. All frontend and backend paths stored as constants
// 2. URL builders for paths with path variables

// [BACKEND] API root

const API_ROOT = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? process.env.REACT_APP_DEV_API : process.env.REACT_APP_PROD_API;

// [FRONTEND] view paths

const ROOT = "/";

const LOGIN = "/login";
const REGISTER = "/register";

const MY_LOG = "/log";
const LOG = "/log/:id";

const MY_USER = "/user";
const USER = "/user/:id"

function buildLogPath(logId) {
    return `${LOG}/${logId}`;
}

function buildUserPath(userId) {
    return `${USER}/${userId}`
}

export {
    API_ROOT,
    ROOT,
    LOGIN,
    REGISTER,
    MY_LOG,
    LOG,
    MY_USER,
    USER,
    buildLogPath,
    buildUserPath
}