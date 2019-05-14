'use strict' 
const fs = require ('fs')
const modelSearch= require('../models/modelSearch');
var path = require('path');
var appDir = path.dirname(require.main.filename);

const htmlRender = (html, data) => {
    let parsedHtml = html.toString('utf8');

	    for(key in data){
	        let exp = "{{"+key+"}}";
	        let reg = new RegExp(exp, 'g');
	        parsedHtml = parsedHtml.replace(reg, data[key]);
	    }

	    return parsedHtml;
	};

const search=(req)=> {

		var result = modelSearch ();
		var term = 'Rocío';


	result = result.filter ((alumno) => {
  		if(alumno.nombre === 'Rocío'){
    		return alumno;
  		}
		});
	let route = path.join("/views","Views.html")
	const view = fs.readFileSync(appDir+route).toString('utf8');
	//const parsedHtml = htmlRender(view, result[0]);
	return view;
};


module.exports =search;





