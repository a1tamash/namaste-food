import { useState } from "react";

const UserCard = (props) => {
	const { name, location } = props;
	const [count] = useState(0);
	const [count2] = useState(2);

	return (
		<div className="user-function">
			<div className="user-card">
				<h2>Count: {count}</h2>
				<h2>Count2: {count2}</h2>
				<h1>{name}</h1>
				<h2>Location: {location}</h2>
				<h2>Contact: malikaltamashhh@gmail.com</h2>
			</div>
		</div>
	);
};

export default UserCard;
