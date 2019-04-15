const proxy = require('http-proxy-middleware');//反向代理  ，中间件

module.exports = function(app) {
  app.use(proxy('/v2',
   { 
       target: 'https://m.wowdsgn.com/',
       changeOrigin:true
 }));
};


//axios("/v2/page?pageId=1&tabId=10006&currentPage=1&pageSize=8&_=1555289979354")