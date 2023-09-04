'use strict';

const { Controller } = require('egg');

class _Controller extends Controller {
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
}

module.exports = _Controller;
