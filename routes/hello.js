const hello = {
	method: 'GET',
    path: '/hello/{name}',
    handler: (request, h) => {
        return `Hello, ${encodeURIComponent(request.params.name)}!`;
    }
}

const index = {
	method: 'GET',
    path: '/',
    handler: (request, h) => {
        return {
        	data: 'hello world'
        }
    }
}

module.exports = [index, hello];