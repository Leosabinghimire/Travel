import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Plan from "./Components/Plan/Plan";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/Signup";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const openLoginModal = () => {
    setIsSignUp(false);
    setShowModal(true);
  };

  const openSignUpModal = () => {
    setIsSignUp(true);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="container">
      <Navbar
        toggleModal={(isSignUp) =>
          isSignUp ? openSignUpModal() : openLoginModal()
        }
        isSignUp={isSignUp}
      />
      {showModal &&
        (isSignUp ? (
          <SignUp toggleModal={closeModal} />
        ) : (
          <Login toggleModal={closeModal} />
        ))}
      <Hero />
      <Plan />
    </div>
  );
}

export default App;
