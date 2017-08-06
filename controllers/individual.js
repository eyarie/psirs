function route (app){

    app.get('/individual', function (req, res, next) {
        res.send("Hello World - individual");
    });


 		app.post('/individual/new', function(req, res, next){

 			var a = {
 				title: req.body.prefix,
				firstname: req.body.firstname,
 				lastname : req.body.lastname,
 				gender: req.body.gender,
 				nationality: req.body.nationality,
 				date_of_birth: req.body.dob,
 				state_of_origin: req.body.state,
 				address: req.body.address,
 				lga_address: req.body.lga_address,
 				phone: req.body.phone,
 				email: req.body.email,
 				occupation: req.body.occupation,
 				market_associated: req.body.market_associated,
 				park_associated: req.body.park_associated,
 				company_category: req.body.comp_cat,
 				office_address: req.body.office_address,
 				office_lga: req.body.office_lga,
 				drivers_license : req.body.dlicense,
 				national_id : req.body.national_id,
 				passport_number : req.body.passport_number,
 				disability : req.body.disability,
 				user_id : req.body.user_id
 			};

 			var Indi = require("../models/individual.js").Individual;

		     var c = new Indi();
		     c.create(a, function(data){
			 //console.log(data);
			 res.json(data);
		});
 });



app.get('/individual/all', function (req, res, next){

    	var Indiv = require("../models/individual.js").Individual;

		var c = new Indiv();

		c.findAll(function(data) {
			res.json(data);
		});
	});



app.get('/individual/l/:id', function (req, res, next) {

		var Indivi = require("../models/individual.js").Individual;
		var c = new Indivi();

		if(req.params.id === ""){
				res.json({"status":"-102", "info":"(id) parameter is required"});
				return;
		}

		var id = req.params.id;
		c.findById(id, function(data) {
				res.json(data);
		});
	});

	app.delete('/individual/:id', function (req, res, next) {

			var Indiviv = require("../models/individual.js").Individual;
			var c = new Indiviv();

			if(req.params.id === ""){
					res.json({"status":"-102", "info":"(id) parameter is required"});
					return;
			}

			var id = req.params.id;
			c.deleteById(id,function(data) {
					res.json(data);
			});
		});

}


module.exports.route = route;
