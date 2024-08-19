import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
	const [btnNameReact, setbtnNameReact] = useState("Login");
	// console.log("header rendered");

	useEffect(() => {
		// console.log("useEffect rendered!");
	});

	const { loggedInUser } = useContext(UserContext);

	// console.log("header rendered!");
	const onlineStatus = useOnlineStatus();

	// Subscribing to the store
	const cartItems = useSelector((store) => store.cart.items);
	console.log(cartItems);

	return (
		<div className="flex justify-between bg-pink-200  shadow-2xl">
			<div className="w-[119px] h-[120px]">
				<img src={LOGO_URL} alt="App Logo" className="logo"></img>
			</div>
			<div className="m-4 p-4 content-evenly">
				<ul className="flex bg-rose">
					<li className="p-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
					<li className="p-4">
						<Link to="/">Home</Link>
					</li>
					<li className="p-4">
						<Link to="/about">About</Link>
					</li>
					<li className="p-4">
						<Link to="/contact">Contact Us</Link>
					</li>
					<li className="p-4">
						<Link to="/grocery">Grocery</Link>
					</li>
					<li className="p-4 font-bold ">
						<Link to="/cart">Cart({cartItems.length})</Link>
					</li>
					<button
						className="login"
						onClick={() => {
							btnNameReact == "Login"
								? setbtnNameReact("Logout")
								: setbtnNameReact("Login");
						}}
					>
						{btnNameReact}
					</button>
					<li className="p-4 font-bold">{loggedInUser}</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
