import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data, showItems, setShowIndex }) => {
	// const [header, setHeader] = useState(false);

	const handleClick = () => {
		// setHeader(!header);
		setShowIndex();
	};

	// console.log(data);
	return (
		// Header
		<div>
			<div className=" bg-gray-50 shadow-lg my-4 p-2 w-6/12 mx-auto">
				{/* Header */}
				<div
					className="flex justify-between cursor-pointer"
					onClick={handleClick}
				>
					<span className="font-bold text-lg">
						{data.title}({data.itemCards.length})
					</span>
					<span>{"⬇️"}</span>
				</div>

				{/* Accordion Body */}
				{showItems && <ItemList items={data?.itemCards} />}
			</div>
		</div>
	);
};

export default RestaurantCategories;
