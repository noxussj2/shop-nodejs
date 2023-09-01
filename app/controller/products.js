'use strict';

const { Controller } = require('egg');

class _Controller extends Controller {
    async index() {
        const ctx = this.ctx;
        const page = ctx.query.page;
        const pageSize = ctx.query.pageSize;
        const results = await ctx.service.products.list(page, pageSize);
        ctx.body = results;
    }
}

module.exports = _Controller;
