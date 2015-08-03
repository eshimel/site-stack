var express = require('express');
var request = require('request');
var wikipedia = require('wikipedia-js');
var router = express.Router();


var query = "Napoleon Bonaparte";
var options = {query: query, format: "html", summaryOnly: true};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Stinky' });
});


/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});


router.get('/searching', function(req, res){
  // input value from search
 	var val = req.query.search;
  console.log(val);
 	var url = "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json";
 	request(url, function(err, resp, body) {
   	//body = bodyParser.json(body);
		//console.log(body);
    output = body;
		// logic used to compare search results with the input from user
   		//if (!body.query['results'] == null) {
    	//	craig = "No results found. Try again.";
   		//} else {
    	//	craig = "Something";
   		//}

 	res.send(output)
 });

  wikipedia.searchArticle(options, function(err, htmlWikiText){
      console.log("Query successful[query=%s, html-formatted-wiki-text=%s]", query, htmlWikiText);
  });  

  // testing the route
  // res.send("WHEEE");

});





module.exports = router;
