const requestCatalog = require('./request');
//holds the names Users, index[0] - Teachers, index[1] - Senior and index[2] - Teachers
let details = [
    [requestCatalog['Teacher']],
    [requestCatalog['Senior']],
    [requestCatalog['Junior']]
];

module.exports = details;