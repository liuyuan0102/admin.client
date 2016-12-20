'use strict';
let AppConfigs = {
	ENV: '${ENV}',
	API_BASE_URL: 'http://localhost:8080/admin.server-master/api/',
	SOCKET_URL: '${API.BASE}',
	USER_TOKEN_KEY: 'x-access-token',
	UPLOAD_DOMAIN: '${UPLOAD_DOMAIN}'
};

module.exports = {
     name: 'AppConfigs',
     fn: AppConfigs
};
