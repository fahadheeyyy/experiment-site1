import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebase";

const SignupList = () => {
  const [signups, setSignups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(firestore, "signup data");
      try {
        const querySnapshot = await getDocs(collectionRef);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSignups(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
      
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Signups</h2>
      <ul>
        {signups.map((signup) => (
          <li key={signup.id}>
            <p>Username: {signup.keys.username}</p>
            <p>Email: {signup.keys.email}</p>
            <p>Password: {signup.keys.password}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SignupList;
