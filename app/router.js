'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;

    /**
     * 鉴权
     */
    router.get('/api/v1/csrf', controller.csrf.index); // 获取 csrf token

    /**
     * 商品模块
     */
    router.get('/api/v1/products', controller.products.index); // 获取商品列表
    router.get('/api/v1/products/:productId', controller.products.detail); // 获取商品详情
    router.get('/api/v1/newProduct', controller.newProduct.index); // 获取最新商品

    /**
     * 联系我们模块
     */
    router.get('/api/v1/contact', controller.contact.index); // 获取联系我们信息
    router.post('/api/v1/contact', controller.contact.add); // 创建联系我们信息

    /**
     * 封面图模块
     */
    router.get('/api/v1/banners', controller.banners.index); // 获取 banner

    /**
     * 订单模块
     */
    router.post('/api/v1/order', controller.order.add); // 创建订单
};
