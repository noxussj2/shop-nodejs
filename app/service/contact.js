const Service = require('egg').Service;

class _Service extends Service {
    async index() {
        const results = {
            address: '236 5th SE Avenue, New York NY10000, United States',
            mobile: '+(84) 546-6789',
            phone: '+(84) 546-6789',
            workingTime: 'Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00',
        };
        return results;
    }

    async add(query) {
        await this.app.mysql.insert('tb_contact', query);
        return query;
    }
}

module.exports = _Service;
