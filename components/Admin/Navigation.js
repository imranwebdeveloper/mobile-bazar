import Link from "next/link";
import { FaPlus, FaHome } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";

const Navigation = () => {
  return (
    <>
      <li className="hover:bg-slate-800 rounded-lg"></li>
      <li className="hover:bg-slate-800 rounded-lg">
        <Link
          href="/dashboard"
          className="flex gap-2 items-center p-3 font-semibold "
        >
          <span className="text-xl">
            <FaHome />
          </span>
          <span>Dashboard</span>
        </Link>
      </li>
      <li className="hover:bg-slate-800 rounded-lg">
        <Link
          href="/dashboard/add-product"
          className="flex gap-2 items-center p-3 font-semibold "
        >
          <span className="text-xl">
            <FaPlus />
          </span>
          <span>Add Product</span>
        </Link>
      </li>
    </>
  );
};

export default Navigation;
