const path = require('path')
const test = {
	method: 'GET',
    path: '/test',
    handler: (request, h) => {
       request.logger.info('In handler %s', request.path);

		return h.file(path.join(__dirname, '../public/test.html'));
    }
}

module.exports = test;