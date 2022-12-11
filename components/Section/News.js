import React from "react";
import img from "../../img/news/1.jpg";
import img2 from "../../img/news/2.jpg";
import img3 from "../../img/news/3.jpg";
import img4 from "../../img/news/4.jpg";
import img5 from "../../img/news/5.jpg";
import { useRouter } from "next/router";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import NewsCard from "../Common/NewsCard";

const News = () => {
  const router = useRouter();
  return (
    <section className=" my-bg-primary border rounded  ">
      <h2 className="section_heading">Latest News</h2>
      <div className="flex flex-col gap-2 p-3">
        <NewsCard img={img} />
        <NewsCard img={img2} />
        <NewsCard img={img3} />
        <NewsCard img={img4} />
        <NewsCard img={img5} />
      </div>
    </section>
  );
};

export default News;
