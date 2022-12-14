import Link from "next/link";
import { useSelector } from "react-redux";

const SubHeader = () => {
  const category = useSelector((state) => state.category.value);

  return (
    <nav
      className="flex whitespace-nowrap divide-x border-b overflow-x-scroll scrollbar-hide md:hidden  "
      role="navigation"
    >
      {category.map((item, index) => {
        return (
          <li
            key={index}
            className="list-none px-2 py-1 my-bg-primary text-blue-600  "
          >
            <Link href={`/${item.toLowerCase()}`} passHref>
              {item}
            </Link>
          </li>
        );
      })}
    </nav>
  );
};

export default SubHeader;
