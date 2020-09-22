module.exports = rawRequest => {
    if (rawRequest.includes('POST')) {
        return {
            body: rawRequest.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split(/\n\n/g)[1],
            method: rawRequest.split(' ')[0],
            path: rawRequest.split(' ')[1]
        }
    } else {
        return { 
            body: rawRequest.split('\n')[4],
            method: rawRequest.split(' ')[0],
            path: rawRequest.split(' ')[1]        }
    }
};
