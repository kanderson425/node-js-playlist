var expres = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//set up template enging
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//Fire controllers
todoController(app);


//Listen to port
app.listen(3000);
console.log('You are listening to port 3000');