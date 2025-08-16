import React from 'react'


const Login = () => {

  return (
    <div className="flex h-screen items-center justify-center">
      {/* Form starts here */}
      <form className="border border-white px-6 py-2 rounded-md space-y-3 w-96">
        <h1 className="text-2xl text-white text-center">
          Chat<span className="text-green-500 font-semibold"> App</span>
        </h1>

        <h2 className="text-xl text-white font-bold">Sign-up</h2>
        <br />
       
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
          
          {/* Text & Button */}
          <div className="flex justify-between">
            <p className="text-white">
              New user signup?
              <span className="text-blue-500 underline cursor-pointer">
                Signup
              </span>
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
}

export default Login;
