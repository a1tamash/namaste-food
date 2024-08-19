import RestaurantCard, { withHighRating } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);
	const [searchValue, setSearchValue] = useState("");

	const listOfRestaurants = useRestaurants();
	useEffect(() => {
		setFilteredRestaurant(listOfRestaurants);
	}, [listOfRestaurants]);

	const RestaurantCardHighRated = withHighRating(RestaurantCard);

	// Show whether a user is online or offline
	const onlineStatus = useOnlineStatus();
	if (onlineStatus === false) {
		return (
			<div>
				<h1>Errrr....You are Offline!</h1>
				<h2>Please check your internet connection!</h2>
			</div>
		);
	}

	const { loggedInUser, setUserName } = useContext(UserContext);

	return listOfRestaurants.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="flex">
				<div className="p-4 m-4 mx-2 flex gap-4">
					<input
						type="text"
						placeholder="Search Restaurant"
						className="border border-black border-solid"
						value={searchValue}
						onChange={(e) => {
							setSearchValue(e.target.value);
						}}
					></input>

					<button
						className="px-4  mx-19 bg-green-300 border border-black rounded-lg"
						onClick={() => {
							const filteredValue = listOfRestaurants.filter((res) =>
								res.info.name.toLowerCase().includes(searchValue.toLowerCase())
							);

							setFilteredRestaurant(filteredValue);
						}}
					>
						Search
					</button>
				</div>
				<div className="flex">
					<button
						className="px-8 my-8 mr- border border-black bg-[#f0f0f0] hover:bg-white rounded-md"
						onClick={() => {
							const filteredList = listOfRestaurants.filter(
								(res) => res.info.avgRating >= 4.5
							);
							setFilteredRestaurant(filteredList);
						}}
					>
						Top Rated Restaurants
					</button>

					<div
						className="border border-black my-8 rounded-md ml-4 px-4 
					bg-[#f0f0f0] hover:bg-white"
					>
						<button
							onClick={() => {
								setFilteredRestaurant(listOfRestaurants);
							}}
						>
							Home
						</button>
					</div>

					<div className="my-8 ml-4 px-4">
						<label>UserName :</label>
						<input
							className="border border-black px-4 mx-1 rounded-md"
							placeholder="Set your Name"
							value={loggedInUser}
							onChange={(e) => setUserName(e.target.value)}
						></input>
					</div>
				</div>
			</div>
			<div className="flex flex-wrap">
				{/* Config Driven UI */}
				{filteredRestaurant.map((restaurant) => (
					<Link
						key={restaurant.info.id}
						to={"/restaurant/" + restaurant.info.id}
					>
						{restaurant.info.avgRating >= 4.5 ? (
							<RestaurantCardHighRated resData={restaurant} />
						) : (
							<RestaurantCard resData={restaurant} />
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
