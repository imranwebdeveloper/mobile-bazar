import { useRouter } from "next/router";
import React, { useState } from "react";
import BrandList from "../../components/Aside/BrandList";
import DailyHits from "../../components/Aside/DailyHits";
import Features from "../../components/Section/Features";
import Pagination from "../../components/Section/Pagination";
import Main from "../../components/Wrapper/Main";

const BrandProducts = () => {
  const router = useRouter();
  const path = router.query;
  return (
    <Main>
      <div className="grid lg:grid-cols-[300px_1fr_300px] gap-2 mt-4">
        <aside className="flex flex-col gap-2  ">
          <BrandList />
        </aside>
        <section className="flex flex-col gap-2  ">
          <div className="flex-1">
            <Features
              heading={path?.brand?.toLocaleUpperCase()}
              num={[0, 10]}
              isBrand={true}
            />
          </div>
          <Pagination />
        </section>
        <aside>
          <DailyHits />
        </aside>
      </div>
    </Main>
  );
};

export default BrandProducts;
