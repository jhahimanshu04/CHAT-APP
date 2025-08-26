import React from "react";
import Left from "./home/Leftpart/Left";
import Right from "./home/Rightpart/Right";
import "./index.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./context/Authprovider";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser, setAuthUser);

  return (
    <Routes>
      {/* Protected Homepage */}
      <Route
        path="/"
        element={
          authUser ? (
            <div className="flex min-h-full h-screen no-scrollbar">
              <Left />
              <Right />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Login */}
      <Route
        path="/login"
        element={authUser ? <Navigate to="/" /> : <Login />}
      />

      {/* Signup */}
      <Route
        path="/signup"
        element={authUser ? <Navigate to="/" /> : <Signup />}
      />
    </Routes>
  );
}

export default App;
