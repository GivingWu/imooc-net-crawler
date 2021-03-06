const express = require('express');
const router = express.Router();

const imoocCrawler = require('../utils/imooc-crawler_Promise');           // use promise to done async works      // ok!
// const imoocCrawler = require('../utils/imooc-crawler_Async');       // use async lib to done async works  // ok!

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The first net crawler app within imooc.com' });
});

/* POST request */
router.post('/crawler/imooc', function(req, res, next){
  imoocCrawler.startCrawler(req.body.uuid, function(data){
  	res.writeHead(200, {'content-type': 'application/json;charset=utf-8'});

  	if(data.length){
 			res.write(JSON.stringify({data: data}));
  	}else{
  		res.write(JSON.stringify({msg: 'sorry, there is no data available.'}));
  	}
  	res.end();
  })
});

module.exports = router;
