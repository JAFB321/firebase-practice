import db from "../firebase/config";

const userCollection = db.collection("users");

// ------------------  Order by ------------------
const orderBy = async () => {
	// Order by name
	const userRef = await userCollection.orderBy("nombre").get();

	// Order by name and salary
	// You have to create an search index (on firestore) !!
	const userRef2 = await userCollection
		.orderBy("nombre")
		.orderBy("salary")
		.get();

	const data = userRef.docs.map((user) => {
		return user.data();
	});

	console.log(data);
};
// orderBy();

// ------------------ Limit ------------------
const limit = async () => {
	// Order by name
	const userRef = await userCollection.limit(2).get();
	const data = userRef.docs.map((user) => {
		return user.data();
	});

	console.log(data);
};

// limit();

// ------------------ Pagination ------------------
const pagination = async () => {
	let dataRef = await userCollection.orderBy("nombre").limit(2).get();

	let firstElement = dataRef.docs[0] || null;
	let lastElement = dataRef.docs[dataRef.docs.length - 1] || null;

	const data = dataRef.docs.map((user) => {
		return user.data();
	});
	console.log(data);

	const next = async () => {
		dataRef = await userCollection
			.orderBy("nombre")
			.startAfter(lastElement)
			.limit(2)
			.get();

		firstElement = dataRef.docs[0] || null;
		lastElement = dataRef.docs[dataRef.docs.length - 1] || null;

		const data = dataRef.docs.map((user) => {
			return user.data();
		});
		console.log(data);
	};

	const previous = async () => {
		dataRef = await userCollection
			.orderBy("nombre")
			.endBefore(firstElement)
			.limit(2)
			.get();

		firstElement = dataRef.docs[0] || null;
		lastElement = dataRef.docs[dataRef.docs.length - 1] || null;

		const data = dataRef.docs.map((user) => {
			return user.data();
		});
		console.log(data);
	};

	await next();
	await next();
   
	await previous();
};
pagination();

