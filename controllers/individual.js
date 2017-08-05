function route (app){
	app.get('/individuals/new', function(req,res){
		res.send('Welcome');
	});

}

module.exports.route = route;
