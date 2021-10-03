
export function handleResponse(response) {

    return response.text().then(text => {
        const responseData = text && JSON.parse(text);

        if (!response.ok) {
            
            if ([401].indexOf(response.status) !== -1) {
                // 401 Unauthorized: invalid / expired credentials
            }
            else if ([403].indexOf(response.status) !== -1) {
                // 403 Forbidden: user either has not enough permission / has been banned
            }
            else if ([404].indexOf(response.status) !== -1) {
                // 404 Not Found: the page does not exist
            }
    
            return Promise.reject(responseData);
        }

        return responseData;
    })
}



