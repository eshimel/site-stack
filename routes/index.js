var express = require('express');
var request = require('request');
var router = express.Router();

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
		console.log(body);

		// logic used to compare search results with the input from user
   		//if (!body.query['results'] == null) {
    	//	craig = "No results found. Try again.";
   		//} else {
    	//	craig = "Something";
   		//}

 	res.send("success")
 });

  // testing the route
  // res.send("WHEEE");

});





module.exports = router;
