'use strict';

const { Controller } = require('egg');

class _Controller extends Controller {
    async index() {
        const ctx = this.ctx;
        const results = await ctx.service.contact.index(ctx.query);
        ctx.body = results;
    }

    async add() {
        this.ctx.validate({
            name: { type: 'string' },
            email: { type: 'string' },
            subject: { type: 'string' },
            message: { type: 'string' },
        }, this.ctx.request.body);

        const ctx = this.ctx;
        const results = await ctx.service.contact.add(ctx.request.body);
        ctx.body = results;
    }
}

module.exports = _Controller;
