Accounts.onCreateUser(function(options, user){
			user.posts=[];
			user.following=[];
			return user;
		})
