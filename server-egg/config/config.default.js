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
  const config = exports = {};
  const witchlist = require('./witchlist')
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1580467996271_4545';

  // add your middleware config here
  config.middleware = ['usertoken'];
  config.usertoken = witchlist
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    security : {
      csrf: false
    },
    mysql : {
      // 单数据库信息配置
      client: {
        // host
        host: 'localhost',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: '12344321',
        // 数据库名
        database: 'db_567',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
