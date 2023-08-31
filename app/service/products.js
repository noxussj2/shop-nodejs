const Service = require('egg').Service;

class productsService extends Service {
    async list(page = 1, pageSize = 10) {
        return {
            list: [
                { id: 1, title: 'this is news 1', url: '/news/1' },
                { id: 2, title: 'this is news 2', url: '/news/2' },
            ],
        };
    }
}

module.exports = productsService;
