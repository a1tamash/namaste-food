import UserCard from "./UserCard";
import UserCardClass from "./UserCardClass";
import { Component, useContext } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
	constructor(props) {
		super(props);

		// console.log("Parent Constructor");
	}

	componentDidMount() {
		// console.log("Parent component did mount");
	}

	render() {
		// console.log("Parent Render");

		return (
			<div>
				<h1>About Us</h1>
				<div className="flex gap-2">
					LoggedIn User :
					<UserContext.Consumer>
						{({ loggedInUser }) => (
							<h2 className="text-lg font-bold">{loggedInUser}</h2>
						)}
					</UserContext.Consumer>
				</div>
				<h3>This is Namaste Food!</h3>
				{/* <UserCard name="Abdul Altamash(function)" location="Noida" /> */}
				<UserCardClass name="First " location="Noida" />
			</div>
		);
	}
}

// const About = () => {
// 	return (
// 		<div>
// 			<h1>About Us</h1>
// 			<h3>This is Namaste Food!</h3>
// 			{/* <UserCard name="Abdul Altamash(function)" location="Noida" /> */}
// 			<UserCardClass name="Abdul Altamash(class)" location="Noida" />
// 		</div>
// 	);
// };

export default About;
