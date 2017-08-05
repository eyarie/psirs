global.db = require('./libs/db/db.js')();

var express     = require('express'),
 methodOverride = require('method-override'),
   cookieParser = require('cookie-parser'),
     bodyParser = require('body-parser'),
       compress = require('compression'),
         logger = require('morgan');

var app = express();

var router = require('./controllers/router');

app.enable('trust proxy');

// Use all the following middlewares before the calling the home page.
app.use(logger('dev'));
app.use(compress());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser('json'));
app.use(cookieParser());
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

var port = process.env.PORT || 8080;
var ip = process.env.IP || '127.0.0.1';
app.listen(port, ip);

app.get('/', function(req, res){
	res.send('Welcome to my world');
});

// This allows you use the route funtions in the controller by exporting express to the route files using app.
router.route(app);

console.log("Server started at " + ip + " while the port number is " + port);
