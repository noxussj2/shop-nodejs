'use strict';

const { Controller } = require('egg');

class _Controller extends Controller {
    async index() {
        const ctx = this.ctx;
        ctx.body = ctx.csrf;
    }
}

module.exports = _Controller;
