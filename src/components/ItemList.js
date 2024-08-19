import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
	const dispatch = useDispatch();
	const handleAddItems = (item) => {
		dispatch(addItem(item));
	};

	return (
		<div>
			{items.map((item) => (
				<div
					key={item.card.info.id}
					className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
				>
					<div className="w-9/12">
						<div className="py-2">
							<span className="">{item.card.info.name} - </span>
							<span className="">
								₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
							</span>
						</div>

						<div>
							<p className="text-xs">{item.card.info.description}</p>
						</div>
					</div>

					<div className="p-1 w-2/12">
						<div className="absolute ml-6 mt-[4.5rem]">
							<button
								className=" p-2 rounded-lg border border-black bg-white text-black"
								onClick={() => handleAddItems(item)}
							>
								Add +
							</button>
						</div>

						<img
							className="rounded-lg"
							src={CDN_URL + item.card.info.imageId}
						></img>
					</div>
				</div>
			))}
		</div>
	);
};

export default ItemList;
