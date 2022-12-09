import Link from "next/link";
import allBrands from "../../data/allBrands";

const SubHeder = () => {
  return (
    <nav
      className="flex whitespace-nowrap divide-x border-b overflow-x-scroll scrollbar-hide  md:hidden "
      role="navigation"
    >
      {allBrands.map((item, index) => {
        return (
          <li key={index} className="list-none px-2 py-1 bg-slate-50  ">
            <Link href={`/${item.toLowerCase()}`} passHref>
              {item}
            </Link>
          </li>
        );
      })}
    </nav>
  );
};

export default SubHeder;
