Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});

Router.route('/professor', {name: 'professor'});

Router.route('/account',{name: 'account'});

//Router.route('/show',{name: 'show', 
                      //data: {school:'Harvard', where:'commons', when:"5/1/15 9:00pm"}});
					  
Router.route('/classmate',{name: 'classmates'});

Router.route('/about',{name: 'about'});