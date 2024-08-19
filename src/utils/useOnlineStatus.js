import { useEffect, useState } from "react";

useOnlineStatus = () => {
	const [status, setStatus] = useState(true);

	useEffect(() => {
		window.addEventListener("offline", () => {
			setStatus(false);
		});
	}, []);

	return status;
};

export default useOnlineStatus;
