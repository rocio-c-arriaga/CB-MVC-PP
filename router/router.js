'use strict'

const Pag1 = require ("../controllers/Pag1");
const Search = require ("../controllers/search");


const router= (req, response) => {
	console.log(req.url);
	if (req.url==='/pag1'){
		var result= Pag1 (req);
		response.end(result);
	}  else if (req.url === "/search") {
      var search = Search(req);
      response.end(search);
    }

}

	module.exports = router;