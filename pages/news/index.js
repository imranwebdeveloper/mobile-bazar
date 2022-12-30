import React from "react";
import Main from "../../components/Wrapper/Main";

const News = () => {
  return (
    <Main>
      <div className="main-section">
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
