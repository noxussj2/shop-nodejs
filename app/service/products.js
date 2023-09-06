const Service = require('egg').Service;

class _Service extends Service {
    async list(page = 1, pageSize = 10, options = { orders: [[ 'createTime', 'desc' ]] }) {

        const results = await this.app.mysql.select('tb_products', { orders: options.orders, limit: Number(pageSize), offset: (page - 1) * pageSize });

        results.forEach(item => {
            item.images = item.images.split(';').map(x => `https://noxussj-1259558265.cos.ap-guangzhou.myqcloud.com/products/${x}`);
            item.tags = item.tags.split(';');
            item.color = item.color.split(';');
        });

        return results;
    }

    async count() {
        const count = await this.app.mysql.count('tb_products');
        return count;
    }

    /**
     * 获取商品详情
     * @param productId
     */
    async detail(productId) {
        const item = await this.app.mysql.get('tb_products', { productId });
        item.images = item.images.split(';').map(x => `https://noxussj-1259558265.cos.ap-guangzhou.myqcloud.com/products/${x}`);
        item.tags = item.tags.split(';');
        item.color = item.color.split(';');

        const size = await this.app.mysql.select('tb_size', { where: { sizeId: item.sizeId } });
        item.size = size;
        return item;
    }
}

module.exports = _Service;
