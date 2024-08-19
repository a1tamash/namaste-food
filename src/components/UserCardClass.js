import React from "react";

class UserCardClass extends React.Component {
	constructor(props) {
		super(props);

		// this.state = {
		// 	count: 0,
		// 	count2: 2,
		// };

		this.state = {
			userInfo: {
				name: "dummy",
				location: "default",
			},
		};

		// console.log(this.props.name + "Child Constructor");
	}

	async componentDidMount() {
		// console.log(this.props.name + "Child component did mount");

		const data = await fetch("https://api.github.com/users/notMash3r");
		const json = await data.json();

		this.setState({
			userInfo: json,
		});

		// console.log(json);
	}

	componentDidUpdate() {
		// console.log("updated");
	}

	componentWillUnmount() {
		// console.log("Unmounted");
	}

	render() {
		// const { name, location } = this.props;
		// const { count, count2 } = this.state;

		// console.log(this.props.name + "Child Render");

		const { name, location, bio, avatar_url } = this.state.userInfo;

		return (
			<div className="user-class">
				<div className="user-card-class">
					{/* <h2>Count: {count} </h2>
					<button
						onClick={() => {
							this.setState({
								count: this.state.count + 1,
								count2: count2 + 1,
							});
						}}
					>
						Increase 1
					</button> */}
					{/* <h2>Count2: {count2} </h2> */}

					<img src={avatar_url}></img>
					<h1>{name}</h1>
					<h2>Location: {location}</h2>
					<h2>Bio: {bio}</h2>
				</div>
			</div>
		);
	}
}

export default UserCardClass;
