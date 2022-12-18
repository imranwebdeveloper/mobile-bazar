import Link from "next/link";
import { useEffect } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, toggle } from "../../redux/Slice/categorySlice";

const BrandList = () => {
  const category = useSelector((state) => state.category.top);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`/api/products/category`)
      .then((response) => response.json())
      .then(({ category }) => {
        dispatch(setCategory(category));
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
        {category.length > 0 && (
          <button
            className="col-span-2 bg-slate-600 rounded text-white px-8 py-2"
            onClick={() => dispatch(toggle())}
          >
            More Brand
          </button>
        )}
      </ul>
    </section>
  );
};

export default BrandList;
