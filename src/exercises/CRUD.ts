import db from "../firebase/config";

const user = {
  nombre: "Enrique",
  active: true,
  birthdate: 0,
};

const userCollection = db.collection("users");

// ------------------  Insert ------------------
const insert = async (user: {
  nombre: String;
  active: boolean;
  birthdate: number;
}) => {
  const userRef = await userCollection.add(user);
  const userData = (await userRef.get()).data();

  return userData;
};
// insert(user).then(console.log);

// ------------------ Update ------------------
const update = async (id: string, data: Object) => {
  const userRef = userCollection.doc(id);
  await userRef.update(data);
};

// update("KLm3eytYzDy66vaX1kV6", {
//   active: true,
// });

// -------- set (update override) ---------------
const set = async (id: string, data: Object) => {
  const userRef = userCollection.doc(id);
  userRef.set(data);
};

// set("KLm3eytYzDy66vaX1kV6", {
//   name: "Juan",
//   active: true,
// });

// ------------------ Delete ------------------
const Delete = async (id: string) => {
  try {
    const userRef = userCollection.doc(id);
    userRef.delete();
  } catch (error) {
    console.log(error);
  }
};

// Delete("KLm3eytYzDy66vaX1kV6");

// ------------------ Select ------------------
const select = async () => {
    
  // All data
  const dataRef = await userCollection.get();
  // With condition
  const dataRef2 = await userCollection.where("active", "==", true).get();
  // With 2+ conditions 
  // You have to create an search index (on firestore) !!
  const dataRef3 = await userCollection.where("active", "==", true).where('nombre', '!=', 'Jesus').get();


  const data = dataRef2.docs.map((user) => {
    return user.data();
  });

  console.log(data);
};
select();