Home=React.createClass({

mixins:[ReactMeteorData],

getMeteorData(){
	return{
		name:this.getName(),
		currentUser: Meteor.user(),
		posts: this.getPosts()
	}
	console.log(this.data.posts);
},

getName(){
	let data=[]
	if(Meteor.user()&& Meteor.user().emails){
		data=Meteor.user().emails[0].address.match(/.+?(?=@)/)
	}
	return data;
},

getPosts(){
	let data=[];

	if(Meteor.user()&& Meteor.user().posts){
		data=Meteor.user().posts
	}
	return data;
},

handleSubmit(e){
	e.preventDefault();
	console.log("yay!");	

	let post=React.findDOMNode(this.refs.textInput).value.trim()

	console.log(post)

	if( post!=""){
	Meteor.call("addPost",
			{
				text:post,
				_id:Meteor.uuid(),
				createdAt:new Date()
			}
		)
	}

	React.findDOMNode(this.refs.textInput).value = "";
},


renderPosts(){
	console.log(this.data.posts)
	return this.data.posts.map((post,i)=>{
		return <Post key={i} post={post}/>
	})
},

render(){
	return(
		
		<div>
			<div className="jumbotron">
				<div className="container">
					<h1 className="text-center">My Social Network App</h1>
					<p className="text-center">welcome</p>
				</div>
			</div>
		
		<div className="container">
		{this.data.currentUser ?

		<form className="new-post" onSubmit={this.handleSubmit}>
			<p>Hello, {this.data.name}</p>
			<textarea className="post-input"
			ref="textInput"
			placeholder="What's on your mind?" ></textarea>
			<button id="post-button">Post</button>
		</form> : ''
		}

		<ul className="posts-box">
			{this.renderPosts()}
		</ul>

		</div>
	</div>

	)
}
})

