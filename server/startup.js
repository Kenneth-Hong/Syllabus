Meteor.startup(function(){
	if (Classes.find({}).count()==0){
		
		Classes.insert({course:"TYP6a", 
						where:"Farber 101", 
						when:"TF 12:30-2:00"});
		Classes.insert({course:"CS65a", 
						where:"Schwartz 114", 
						when:"TF 9:30-11:00"});
		Classes.insert({course:"CS12b", 
						where:"Gzang 123", 
						when:"MWT 11:00-12:00"});
		


		 
	}
	
});
