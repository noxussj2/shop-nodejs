'use strict';

const { Controller } = require('egg');

class _Controller extends Controller {

    /**
     * 获取商品列表
     */
    async index() {
        this.ctx.validate({
            page: { type: 'string' },
            pageSize: { type: 'string' },
        }, this.ctx.query);

        const ctx = this.ctx;
        const page = ctx.query.page;
        const pageSize = ctx.query.pageSize;
        const results = await ctx.service.products.list(page, pageSize);
        const count = await ctx.service.products.count();
        ctx.body = {
            data: results,
            count,
        };
    }

    /**
     * 获取商品详情
     */
    async detail() {
        this.ctx.validate({
            productId: { type: 'string' },
        }, this.ctx.params);

        const ctx = this.ctx;
        const productId = ctx.params.productId;

        const results = await ctx.service.products.detail(productId);
        ctx.body = results;
    }
}

module.exports = _Controller;
