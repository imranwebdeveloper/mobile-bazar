import React from "react";
import Main from "../../components/Wrapper/Main";

const News = () => {
  return (
    <Main>
      <div className="grid xl:grid-cols-[300px_1fr_300px] gap-2 mt-4">
        <aside className="flex flex-col gap-2  ">{/* <BrandList /> */}</aside>
        <section className="flex flex-col gap-2  ">
          <h1 className="text-center text-3xl">Page Under Working ...</h1>
          {/* <Pagination /> */}
        </section>
        <aside>{/* <DailyHits /> */}</aside>
      </div>
    </Main>
  );
};

export default News;
