import Logo from "../Admin/Logo";
import Navigation from "../Admin/Navigation";
import Header from "../Admin/header/Header";

const Dashboard = ({ children }) => {
  return (
    <main className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-slate-100 ">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Header />
        <main className="p-4">{children}</main>
      </div>
      <aside className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className=" px-3 w-64 border-r-2 bg-[#334155] text-white">
          <Logo />
          <Navigation />
        </ul>
      </aside>
    </main>
  );
};

export default Dashboard;
