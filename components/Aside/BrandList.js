import Link from "next/link";
// import { useSelector } from "react-redux";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import allBrands from "../../data/allBrands";
import { mobiles } from "../../data/mobiles";

const BrandList = () => {
  const [toggle, setToggle] = useState(false);
  const [brandList, setBrandList] = useState([]);

  const categoryList = [...new Set(mobiles.map((brand) => brand.brand))];
  // const brands = useSelector((state) => state.brandList.brands);
  // useEffect(() => {
  //   toggle ? setBrandList(brands) : setBrandList(brands.slice(0, 16));
  // }, [brands, toggle]);

  return (
    <section className=" hidden md:block border rounded my-bg-primary">
      <h2 className="section_heading">Find Your Brand</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-2 p-2 mb-4 gap-2 ">
        {categoryList.map((category, index) => {
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
        {/* <li
          className=" rounded-md shadow-md text-white bg-[#149777] hover:bg-[#10846F] listItem col-span-2 overflow-hidden px-2 "
          onClick={() => setToggle(!toggle)}
        >
          <a> All Brand </a>
          <span>{toggle ? <FaChevronUp /> : <FaChevronDown />}</span>
        </li> */}
      </ul>
    </section>
  );
};

export default BrandList;
