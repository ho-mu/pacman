module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index')
	})
	app.post('/pacman', function(req, res){
		// console.log('hi')
		res.render('pacman', {user_name: req.body.name})
		
	})
}