const Service = require('egg').Service;

class _Service extends Service {
    async list(page = 1, pageSize = 10, options = { orders: [[ 'createTime', 'desc' ]] }) {
        const results = await this.app.mysql.select('tb_products', { orders: options.orders, limit: Number(pageSize), offset: (page - 1) * pageSize });

        results.forEach(item => {
            item.images = item.images.split(';').map(x => `https://noxussj-1259558265.cos.ap-guangzhou.myqcloud.com/products/${x}`);
            item.tags = item.tags.split(';');
            item.size = item.size.split(';');
            item.color = item.color.split(';');
        });

        return results;
    }
}

module.exports = _Service;
