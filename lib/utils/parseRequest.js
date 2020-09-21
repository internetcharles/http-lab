module.exports = rawRequest => {
    return {
        body: rawRequest.split('\n')[4],
        method: rawRequest.split(' ')[0],
        path: rawRequest.split(' ')[1]
    }
};
