const Service = require('egg').Service;
const { v4: uuidv4 } = require('uuid');

class _Service extends Service {
    async add(query) {

        /**
         * 初始化事务
         */
        const conn = await this.app.mysql.beginTransaction();

        try {

            /**
             * 主表插入-新订单
             */
            const orderId = uuidv4();
            await conn.insert('tb_orders', {
                orderId,
                firstName: query.firstName,
                lastName: query.lastName,
                address: query.address,
                code: query.code,
                phone: query.phone,
                email: query.email,
                remark: query.remark,
                totalPrice: query.totalPrice,
            });

            /**
             * 子表插入-订单关联商品
             */
            const items = JSON.parse(query.items);

            for (let index = 0; index < items.length; index++) {
                const item = items[index];

                await conn.insert('tb_orders_items', {
                    orderId,
                    productId: item.productId,
                    number: item.number,
                });

            }

            await conn.commit(); // 提交事务

        } catch (error) {
            await conn.rollback();
            throw error;
        }

        return query;
    }
}

module.exports = _Service;
