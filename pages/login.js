import { FaUserCircle } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import { useRouter } from "next/router";
import FacebookBtn from "../components/Common/button/FacebookBtn";
import GoogleBtn from "../components/Common/button/GoogleBtn";
import Link from "next/link";
import Main from "../components/Wrapper/Main";

const Login = () => {
  const router = useRouter();
  return (
    <div className=" flex justify-center items-center  flex-col min-h-screen">
      <div className="p-6 rounded-border bg-white max-w-sm w-full shadow-lg">
        <h1 className="text-2xl font-bold text-center">Welcome</h1>
        <form className="mt-4 flex flex-col gap-2">
          <div className="flex rounded border">
            <span className=" flex items-center p-3  bg-slate-200">
              <FaUserCircle />
            </span>
            <input
              name="name"
              type="text"
              placeholder="User name"
              className="w-full p-3  outline-none "
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
            />
          </div>
          <button
            type="button"
            className="btn-primary btn mt-4"
            onClick={() => router.push("/dashboard")}
          >
            Login
          </button>
          <div className="divider">OR login with</div>
          <div className="flex gap-4 justify-center">
            <FacebookBtn />
            <GoogleBtn />
          </div>
        </form>
      </div>
      <p className="py-2 my-2">
        Do not have an account?
        <Link href="/signup" className="text-blue-600 px-1 bold">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
