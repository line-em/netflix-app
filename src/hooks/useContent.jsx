import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { collection, getDocs } from "firebase/firestore";

const useContent = (target) => {
	const [content, setContent] = useState([]);
	const { db } = useContext(FirebaseContext);

	const getData = async () => {
		try {
			const querySnapshot = await getDocs(collection(db, target));
			let data = [];
			querySnapshot.forEach((contentObj) =>
				data.push({
					...contentObj.data(),
					docId: contentObj.id
				})
			);
			setContent(data);
			console.log("Did request!");
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return content;
};

export default useContent;
