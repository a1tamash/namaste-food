import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
// import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
	const [userName, setUserName] = useState();

	useEffect(() => {
		// api call to fetch data

		const data = {
			name: "Abdul Altamash",
		};

		setUserName(data.name);
	}, []);

	return (
		<Provider store={appStore}>
			<UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
				<div className="app">
					{/* <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}> */}
					<Header />
					{/* </UserContext.Provider> */}
					<Outlet />
				</div>
			</UserContext.Provider>
		</Provider>
	);
};

const Grocery = lazy(() => import("./components/Grocery"));
const Body = lazy(() => import("./components/Body"));

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: (
					<Suspense fallback={<h1>Loading...</h1>}>
						<Body />
					</Suspense>
				),
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/grocery",
				element: (
					<Suspense fallback={<Shimmer />}>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/restaurant/:resId",
				element: <RestaurantMenu />,
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
