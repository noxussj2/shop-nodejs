'use strict';

const { Controller } = require('egg');

class _Controller extends Controller {
    async index() {
        const ctx = this.ctx;
        const results = await ctx.service.products.list(1, 1);
        ctx.body = results[0];
    }
}

module.exports = _Controller;
