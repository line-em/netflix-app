import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { collection, getDocs } from "firebase/firestore";

const useContent = async (target) => {
	const [content, setContent] = useState([]);
	const { db } = useContext(FirebaseContext);

	const getData = async () => {
		try {
			const querySnapshot = await getDocs(collection(db, target));
			let test = [];
			querySnapshot.forEach((contentObj) =>
				test.push({
					...contentObj.data(),
					docId: contentObj.id
				})
			);
			setContent(test);
			console.log(content);
			console.log("Did request!");
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return { [target]: content };
};

export default useContent;
