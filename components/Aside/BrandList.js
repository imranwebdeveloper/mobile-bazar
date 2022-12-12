import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

const BrandList = ({ categories }) => {
  const brandList = categories.category[0].category;

  return (
    <section className=" hidden md:block border rounded my-bg-primary">
      <h2 className="section_heading">Find Your Brand</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-2 p-2 mb-4 gap-2 ">
        {brandList.map((category, index) => {
          return (
            <Link
              href={`/${category.toLowerCase()}`}
              passHref
              key={index}
              className="px-2"
            >
              <li className=" flex justify-between py-1 items-center hover:text-blue-600 ">
                <p className=" flex-1">{category} </p>
                <span>
                  <MdArrowForwardIos />
                </span>
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default BrandList;
