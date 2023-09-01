'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/api/v1/csrf', controller.csrf.index); // 获取 csrf token
    router.get('/api/v1/banners', controller.banners.index); // 获取 banner
    router.get('/api/v1/products', controller.products.index); // 获取商品列表
    router.get('/api/v1/newProduct', controller.newProduct.index); // 获取最新商品
    router.get('/api/v1/contact', controller.contact.index); // 获取联系我们信息
    router.post('/api/v1/contact', controller.contact.add); // 创建联系我们信息
};
