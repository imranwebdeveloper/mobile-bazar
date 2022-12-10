import { useRouter } from "next/router";
import React, { useState } from "react";
import BrandList from "../../components/Aside/BrandList";
import DailyHits from "../../components/Aside/DailyHits";
import Features from "../../components/Section/Features";
import Main from "../../components/Wrapper/Main";

const BrandProducts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const path = router.query;
  console.log(path.brand);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("/api/mobiles")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const mobile = data.find(
  //         (item) => item.modal.toLowerCase().split(" ").join("-") === path
  //       );
  //       setData(mobile);
  //       setLoading(false);
  //     });
  // }, [router]);

  return (
    <Main>
      <div className="grid lg:grid-cols-[300px_1fr_300px] gap-2">
        <aside className="flex flex-col gap-2  ">
          <BrandList />
        </aside>
        <section className="flex flex-col gap-2 pagination-container">
          <div className="flex-1">
            <Features
              heading={path?.brand?.toLocaleUpperCase()}
              num={[0, 10]}
              isBrand={true}
            />
          </div>
          <p>pagination</p>
        </section>
        <aside>
          <DailyHits />
        </aside>
      </div>
    </Main>
  );
};

export default BrandProducts;
