import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, toggle } from "../../redux/Slice/categorySlice";
import { server } from "../../server";

const BrandList = () => {
  const category = useSelector((state) => state.category.top);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`${server}/api/products/category`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCategory(data.category[0]));
      })
      .catch((error) => console.log(error));
  }, [dispatch]);
  return (
    <section className=" hidden md:block border rounded my-bg-primary">
      <h2 className="section_heading">Find Your Brand</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-2 p-2 mb-4 gap-2 ">
        {category.map((item, index) => {
          return (
            <Link
              href={`/${item.toLowerCase()}`}
              passHref
              key={index}
              className="px-2"
            >
              <li className=" flex justify-between py-1 items-center hover:text-blue-600 ">
                <p className=" flex-1">{item} </p>
                <span>
                  <MdArrowForwardIos />
                </span>
              </li>
            </Link>
          );
        })}
        <button className="btn" onClick={() => dispatch(toggle())}>
          More Brand
        </button>
      </ul>
    </section>
  );
};

export default BrandList;
