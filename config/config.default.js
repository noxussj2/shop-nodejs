/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {

    /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
    const config = exports = {
        mysql: {

            // 单数据库信息配置
            client: {

                // host
                host: '43.139.119.122',

                // 端口号
                port: '3306',

                // 用户名
                user: 'shop',

                // 密码
                password: 'abc-123-123',

                // 数据库名
                database: 'shop-web',
            },

            // 是否加载到 app 上，默认开启
            app: true,

            // 是否加载到 agent 上，默认关闭
            agent: false,
        },

        security: {
            csrf: {
                enable: true,
                headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
            },
        },
    };

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1693360606594_5826';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {

    // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};
