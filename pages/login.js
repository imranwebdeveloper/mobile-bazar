import { FaUserCircle } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="p-6 rounded-border bg-white max-w-sm w-full shadow-lg">
        <h1 className="text-2xl font-bold text-center">Welcome</h1>
        <form className="mt-4 flex flex-col gap-2">
          <div className="flex items-center  rounded border">
            <span className=" icon p-3 bg-slate-200">
              <FaUserCircle />
            </span>
            <input
              name="name"
              type="text"
              placeholder="User name"
              className="w-full p-3  outline-none "
            />
          </div>
          <div className="flex items-center  rounded border">
            <span className=" icon bg-slate-200 p-3">
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
            className="btn-primary btn"
            onClick={() => router.push("dashboard")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
