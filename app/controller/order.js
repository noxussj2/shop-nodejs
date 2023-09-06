'use strict';

const { Controller } = require('egg');

class _Controller extends Controller {

    /**
     * 创建商品订单
     */
    async add() {
        this.ctx.validate({
            firstName: { type: 'string' },
            lastName: { type: 'string' },
            address: { type: 'string' },
            code: { type: 'string' },
            phone: { type: 'string' },
            email: { type: 'string' },
            remark: { type: 'string' },
            totalPrice: { type: 'string' },
            items: { type: 'string' },
        }, this.ctx.request.body);

        const ctx = this.ctx;
        const results = await ctx.service.order.add(this.ctx.request.body);
        ctx.body = results;
    }

}

module.exports = _Controller;
