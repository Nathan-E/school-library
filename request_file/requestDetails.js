const requestCatalog = require('./request');
//holds the names Users, index[0] - Teachers, index[1] - Senior and index[2] - Teachers
let details = [
    [requestCatalog['Teachers']],
    [requestCatalog['Seniors']],
    [requestCatalog['Juniors']]
];

module.exports = details;