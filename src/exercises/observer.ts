import db from "../firebase/config";

const userCollection = db.collection("users");

// ------ Listen changes (Observer) -----------
userCollection.onSnapshot((snap) => {
    const data = snap.docs.map((user) => {
      return user.data();
    });
  
    console.log(data);
  });
  