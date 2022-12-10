import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const NewsCard = ({ img }) => {
  const router = useRouter();
  return (
    <article
      className=" center gap-3 rounded-border p-3 flex-col lg:flex-row bg-white min-h-[180px] hover:bg-emerald-50 cursor-pointer"
      onClick={() => router.push("/news/post")}
    >
      <div className="center">
        <Image src={img} alt="img" width={192} height={120} />
      </div>
      <div className="flex-1 max-w-[500px] mx-auto">
        <h3 className="font-bold mb-2">
          The creator of the first iPhone with USB-C adds a Lightning port to an
          Android phone
        </h3>
        <p className=" mb-2">
          Replacing one reversible USB 2.0 port with another reversible USB 2.0
          port doesn't sound too practical, but is an impressive feat
          nonetheless.
        </p>
        <data className="text-xs text-slate-500">02-April-22</data>
      </div>
    </article>
  );
};

export default NewsCard;
