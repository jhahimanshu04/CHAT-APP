import React from 'react'

const Signup = () => {

  return (
    <div className="flex h-screen items-center justify-center">
      {/* Form starts here */}
      <form className="border border-white px-6 py-2 rounded-md space-y-3 w-96">
        <h1 className="text-2xl text-white text-center">
          Chat<span className="text-green-500 font-semibold"> App</span>
        </h1>

        <h2 className="text-xl text-white font-bold">Signup</h2>
        <br />
        {/*Fullname*/}

        <div className="flex flex-col gap-2">
          <label className="input validator">
            <input
              type="text"
              placeholder="Fullname"
              fill="currentColor"
              {...("fullname",
              {
                required: "Fullname is required",
                pattern: {
                  value: /^[A-Za-z][A-Za-z0-9-]*$/,
                  message: "Only letters, numbers or dash",
                },
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
                maxLength: {
                  value: 30,
                  message: "Maximum 30 characters",
                },
              })}
            />
          </label>
          <label className="input validator">
            <input
              type="email"
              placeholder="mail@site.com"
              {...("email",
              {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
          </label>
          {/* Password */}
          <label className="input validator">
            <input
              type="password"
              placeholder="Password"
              {...("password",
              {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                  message:
                    "Must include uppercase, lowercase, number and be 8+ chars",
                },
              })}
            />
          </label>
          {/* Confirm Password */}
          <label className="input validator">
            <input
              type="password"
              placeholder="Confirm Password"
              {...("confirmPassword",
              {
                required: "Please confirm your password",
                validate: (value) =>
                  value === ("password") || "Passwords do not match",
              })}
            />
          </label>
          {/* Text & Button */}
          <div className="flex justify-between">
            <p className="text-white">
              Have an account?
              <span className="text-blue-500 underline cursor-pointer">
                Login
              </span>
            </p>
            <input
              className="text-white bg-green-500 px-2 py-1 rounded-lg cursor-pointer"
              type="submit"
              value="Signup"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup
