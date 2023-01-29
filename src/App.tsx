import { DateTime } from "luxon";
import { FC, useEffect } from "react";
import { useState } from "react";

const App: FC = () => {
	const [dateNow, setDateNow] = useState<DateTime>(DateTime.utc());

	useEffect(() => {
		const interval = setInterval(() => {
			setDateNow(DateTime.now());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	console.log("====================================");
	console.log(dateNow);
	console.log("====================================");

	return (
		<div className={`container mx-auto max-w-md`}>
			<h1 className="text-2xl mb-5">Your time</h1>
		</div>
	);
};

export default App;
