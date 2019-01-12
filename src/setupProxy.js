const proxy = require('http-proxy-middleware');
// const axios = require('axios');
module.exports = function (app) {
  app.use((req, res, next) => {

    // 右上方，趋势board
    if (req.originalUrl.includes('/api/banner-img')) {
      // 更改referer 绕过验证
      req.headers.referer = 'https://www.jianshu.com/';
      //
    }
    // 搜索栏，热门搜索列表
    else if (req.originalUrl.includes('/api/trending_search')) {
      // 更改referer 绕过验证
      req.headers.referer = 'https://www.jianshu.com/';
      // 更改accept，否则返回406
      req.headers.accept = 'application/json';
      console.log(req.headers);
    }
    // 推荐读者
    else if (req.originalUrl.includes('/api/writer')) {
      // 更改referer 绕过验证
      req.headers.referer = 'https://www.jianshu.com/';
      req.headers.accept = 'application/json';
    }
    next();
  });
  app.use(proxy('/api/trending_search', {
    target: 'https://www.jianshu.com/',
    pathRewrite: { '^/api/trending_search': '/trending_search' },
    changeOrigin: true,
  }));

  app.use(proxy('/api/banner-img/**/*.png', {
    target: 'https://cdn2.jianshu.io',
    pathRewrite: { '^/api/banner-img': '/assets/web' },
    changeOrigin: true,
  }));
  app.use(proxy('/api/writer', {
    target: 'https://www.jianshu.com',
    pathRewrite: { '^/api/writer': '/users/recommended' },
    changeOrigin: true,
  }));
};
