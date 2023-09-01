const Service = require('egg').Service;

class _Service extends Service {
    async list(page = 'homeIndex') {

        const results = await this.app.mysql.select('tb_banners', { where: { page } });

        results.forEach(item => {
            item.images = item.images.split(';').map(x => `https://noxussj-1259558265.cos.ap-guangzhou.myqcloud.com/banners/${x}`);
        });

        return results;
    }
}

module.exports = _Service;
