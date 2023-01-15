import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { auth, fs } from "../Config/Config";

export const About = () => {
  function GetCurrentUser() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          fs.collection("users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              setUser(snapshot.data().FullName);
            });
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  }

  const user = GetCurrentUser();

  // state of totalProducts
  const [totalProducts, setTotalProducts] = useState(0);
  // getting cart products
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Cart " + user.uid).onSnapshot((snapshot) => {
          const qty = snapshot.docs.length;
          setTotalProducts(qty);
        });
      }
    });
  }, []);

  return (
    <>
      <Navbar user={user} />

      <div className="About-us-container">
        <h1 className="About-us-title">About us</h1>

        <p className="Aboutus">
          Agriculture is the backbone of the Indian Economy"- said Mahatma
          Gandhi six decades ago. Even today, the situation is still the same,
          with almost the entire economy being sustained by agriculture, which
          is the mainstay of the villages. It contributes 16% of the overall GDP
          and accounts for employment of approximately 52% of the Indian
          population. Rapid growth in agriculture is essential not only for
          self-reliance but also to earn valuable foreign exchange.
        </p>
        <p className="Aboutus">
          Indian farmers are second to none in production and productivity
          despite of the fact that millions are marginal and small farmers. They
          adopt improved agriculture technology as efficiently as farmers in
          developed countries. It is felt that with provision of timely and
          adequate inputs such as fertilizers, seeds, pesticides and by making
          available affordable agricultural credit /crop insurance, Indian
          farmers are going to ensure food and nutritional security to the
          Nation.
        </p>
        <p className="Aboutus">
          It is envisaged to make available relevant information and services to
          the farming community and private sector through the use of
          information and communication technologies, to supplement the existing
          delivery channels provided for by the department. Farmer's app is an
          endeavour in this direction to create one stop shop for meeting all
          informational needs relating to Agriculture, Animal Husbandry and
          Fisheries sectors production, sale/storage of an Indian farmer. With
          this Indian Farmer will not be required to sift through maze of
          websites created for specific purposes.
        </p>
      </div>
    </>
  );
};
