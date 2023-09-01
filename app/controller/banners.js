'use strict';

const { Controller } = require('egg');

class _Controller extends Controller {
    async index() {
        const ctx = this.ctx;
        const page = ctx.query.page;
        const results = await ctx.service.banners.list(page);
        ctx.body = results;
    }
}

module.exports = _Controller;
