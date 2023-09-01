'use strict';

const { Controller } = require('egg');

class _Controller extends Controller {
    async index() {
        const ctx = this.ctx;
        const results = await ctx.service.contact.index(ctx.query);
        ctx.body = results;
    }

    async add() {
        const ctx = this.ctx;
        const results = await ctx.service.contact.add(ctx.query);
        ctx.body = results;
    }
}

module.exports = _Controller;
