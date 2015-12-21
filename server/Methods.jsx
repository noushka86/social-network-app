Meteor.methods({

	addPost:function(post){

		Meteor.users.update(Meteor.userId(),{$addToSet:{posts:post}})
	}

})