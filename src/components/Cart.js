import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);

	const dispatch = useDispatch();
	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div className="text-center m-4 p-2">
			<h1 className="text-2xl font-bold">Cart</h1>
			<button
				className="m-1 p-2 bg-black text-white rounded-lg"
				onClick={handleClearCart}
			>
				Clear Cart
			</button>
			<div className="m-auto w-6/12">
				<ItemList items={cartItems} />
			</div>
		</div>
	);
};

export default Cart;
