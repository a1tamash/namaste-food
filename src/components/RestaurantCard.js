import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
	const { resData } = props;
	const { loggedInUser } = useContext(UserContext);

	// Optional Chaining
	const { cloudinaryImageId, name, locality, avgRating, cuisines, sla } =
		resData?.info;
	return (
		<div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer">
			<img
				src={CDN_URL + cloudinaryImageId}
				alt="Restaurant Image"
				className="rounded-lg "
			></img>
			<h3 className="font-bold py-4 text-lg">{name}</h3>
			<h3>{locality}</h3>
			<h3>{avgRating} Star</h3>
			<h4 className="break-words ">{cuisines.join(",")}</h4>
			<h3>{sla.slaString}</h3>
			<h3>User: {loggedInUser}</h3>
		</div>
	);
};

export const withHighRating = (RestaurantCard) => {
	return (props) => {
		return (
			<div>
				<label className="absolute p-2 m-2 bg-black text-white rounded-lg">
					Top Rated
				</label>
				<RestaurantCard {...props} />
			</div>
		);
	};
};

export default RestaurantCard;
