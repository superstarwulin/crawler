var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

app.get('/', function (req, res, next) {
  superagent.get('http://feizige1.com/thread-729-1-7.html')
    .end(function (err, sres) {
      if (err) {
        return next(err);
      }
      var $ = cheerio.load(sres.text);
      //var items = [];
      //$('#topic_list .topic_title').each(function (idx, element) {
      //  var $element = $(element);
      //  items.push({
      //    title: $element.attr('title'),
      //    href: $element.attr('href')
      //  });
      //});

        var str = '';

        $('img').each(function(idx,elm){
          var $e = $(elm);
          str += '<img src='+$e.attr('src')+'>'
        })



      res.send(str);
    });
});


app.listen(3000, function () {
  console.log('app is listening at port 3000');
});

