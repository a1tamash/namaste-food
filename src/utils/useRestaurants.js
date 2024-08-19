import { useState, useEffect } from "react";
import { RES_MENU_API } from "./constants";

const useRestaurants = () => {
	const [resList, setResList] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(RES_MENU_API);
		const json = await data.json();

		setResList(
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	return resList;
};

export default useRestaurants;
