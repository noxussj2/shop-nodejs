'use strict';

const { Controller } = require('egg');

class productsController extends Controller {
    async list() {
        const ctx = this.ctx;
        const page = ctx.query.page;
        const pageSize = ctx.query.pageSize;
        const productsList = await ctx.service.products.list(page, pageSize);
        ctx.body = productsList;
    }
}

module.exports = productsController;
