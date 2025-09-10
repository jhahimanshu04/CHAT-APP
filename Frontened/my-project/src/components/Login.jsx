import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authprovider";

const Login = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log("Current Auth User:", authUser);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const OnSubmit = async (data) => {
    console.log("Form Data:", data); // Debugging check

    const userInfo = {
      email: data.email,
      password: data.password,

      // confirmPassword frontend pe check ho chuka hai, backend ko bhejne ki zaroorat nahi
    };

    await axios
      .post("/api/users/login", userInfo)
      .then((response) => {
        console.log("Response:", response.data);
        if (response.data) {
          alert("Login successful!");
        }
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log("Error Response:", error.response.data); // ✅ Debug
          alert("Error: " + error.response.data.message);
        } else {
          console.log("Axios Error:", error);
        }
      });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      {/* Form starts here */}
      <form
        onSubmit={handleSubmit(OnSubmit)}
        className="border border-white px-6 py-2 rounded-md space-y-3 w-96"
      >
        <h1 className="text-2xl text-white text-center">
          Chat<span className="text-green-500 font-semibold"> App</span>
        </h1>

        <h2 className="text-xl text-white font-bold">Sign-up</h2>
        <br />

        <label className="input validator">
          <input
            type="email"
            placeholder="mail@site.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
          />
        </label>
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
        {/* Password */}
        <label className="input validator">
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message:
                  "Must include uppercase, lowercase, number and be 8+ chars",
              },
            })}
          />
        </label>
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}

        {/* Text & Button */}
        <div className="flex justify-between">
          <p className="text-white">
            New user{" "}
            <Link
              to="/signup"
              className="text-blue-500 underline cursor-pointer ml-1"
            >
              Signup
            </Link>
          </p>
          <input
            className="text-white bg-green-500 px-2 py-1 rounded-lg cursor-pointer"
            type="submit"
            value="Login"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
