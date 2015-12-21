Meteor.publish("userData", function () {
	  if (this.userId) {
	    return Meteor.users.find({_id: this.userId},
	                             {fields: {'posts': 1,'following':1}});
	  } else {
	    this.ready();
	  }
});