import { useState } from "react";
import React from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg"
          alt="background"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black m-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-white text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-slate-600 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-slate-600 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-slate-600 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up."}
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to ChalChitra? Sign up now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
