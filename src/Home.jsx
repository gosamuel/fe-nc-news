import { useState, useContext } from "react";
import { UserContext } from "./App";

function Home() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  return (
    <>
      <h2>Welcome {currentUser}</h2>
      <p>Select User</p>
      <button
        onClick={() => {
          setCurrentUser("Sam");
        }}
      >
        Sam
      </button>
      <button
        onClick={() => {
          setCurrentUser("Tester");
        }}
      >
        Tester
      </button>
    </>
  );
}

export default Home;
