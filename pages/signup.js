import { FaUserCircle } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import FacebookBtn from "../components/Common/button/FacebookBtn";
import GoogleBtn from "../components/Common/button/GoogleBtn";
import Link from "next/link";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    fetch("/api/user/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => response.json())
      .then((responseData) => console.log(responseData))
      .catch((err) => console.log(err));
  };

  return (
    <div className=" flex justify-center items-center  flex-col min-h-screen">
      <div className="p-6 rounded-border bg-white max-w-sm w-full shadow-lg">
        <h1 className="text-2xl font-bold text-center">Welcome</h1>
        <form className="mt-4 flex flex-col gap-2" onSubmit={submitHandler}>
          <div className="flex rounded border">
            <span className=" flex items-center p-3  bg-slate-200">
              <FaUserCircle />
            </span>
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              className="w-full p-3  outline-none "
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="flex rounded border">
            <span className=" flex items-center p-3  bg-slate-200">
              <FaUserCircle />
            </span>
            <input
              name="email"
              type="email"
              placeholder="Your email address"
              className="w-full p-3  outline-none "
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex  rounded border">
            <span className=" flex items-center bg-slate-200 p-3">
              <BsShieldLockFill />
            </span>
            <input
              name="password"
              type="password"
              placeholder="User Password"
              className="w-full p-3  outline-none "
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            type="submit"
            className="btn-primary btn mt-4"
            // onClick={() => router.push("/dashboard")}
          >
            Login
          </button>
          <div className="divider">Or sign up </div>
          <div className="flex gap-4 justify-center">
            <FacebookBtn />
            <GoogleBtn />
          </div>
        </form>
      </div>
      <p className="py-2 my-2">
        Already have an account??
        <Link href="/login " className="text-blue-600 px-1 bold">
          Login
        </Link>
      </p>
    </div>
  );
};
export default Signup;
