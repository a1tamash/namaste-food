import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
	const { resId } = useParams();
	const resInfo = useRestaurantInfo(resId);
	const [showIndex, setShowIndex] = useState(null);

	if (resInfo === null) return <Shimmer />;

	const { name, costForTwoMessage, cuisines, id } =
		resInfo?.cards[2]?.card?.card?.info;

	const { itemCards } =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

	// Categories
	const categories =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(c) =>
				c.card?.card?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);
	// console.log(categories);

	return (
		<div className="text-center">
			<div>
				<h1 className="font-extrabold text-4xl my-2 p-2  ">{name}</h1>
				<p className="font-bold text-base">
					{cuisines.join(",")} - {costForTwoMessage}
				</p>
			</div>
			<div>
				{categories.map((c, index) => (
					<RestaurantCategories
						key={c.card.card.title}
						data={c?.card?.card}
						showItems={index === showIndex ? true : false}
						setShowIndex={() => {
							showIndex != index ? setShowIndex(index) : setShowIndex(null);
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default RestaurantMenu;
