import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const NewsCard = ({ img }) => {
  const router = useRouter();
  return (
    <article
      className=" p-2 flex flex-col md:flex-row gap-3 border-b  cursor-pointer"
      onClick={() => router.push("/news/post")}
    >
      <div className="flex justify-center items-center">
        <Image
          src={img}
          alt="img"
          width={192}
          height={120}
          className="rounded"
        />
      </div>
      <div className="flex-1 mx-auto">
        <h3 className="font-bold mb-2">
          The creator of the first iPhone with USB-C adds a Lightning port to an
          Android phone
        </h3>
        <p className=" mb-2">
          Replacing one reversible USB 2.0 port with another reversible USB 2.0
          port does not sound too practical, but is an impressive feat
          nonetheless.
        </p>
        <data className="text-xs text-slate-500">02-April-22</data>
      </div>
    </article>
  );
};

export default NewsCard;
