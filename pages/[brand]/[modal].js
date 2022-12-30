import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BrandList from "../../components/Aside/BrandList";
import Similar from "../../components/Aside/Similar";
import Loading from "../../components/Common/Loading";
import ShortViews from "../../components/Section/ShortViews";
import Specification from "../../components/Section/Specification";
import Main from "../../components/Wrapper/Main";

const Details = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const path = router.query.modal;
    setLoading(true);
    fetch("/api/mobiles")
      .then((res) => res.json())
      .then((data) => {
        const mobile = data.find(
          (item) => item.modal.toLowerCase().split(" ").join("-") === path
        );
        setData(mobile);
        setLoading(false);
      });
  }, [router]);

  return (
    <Main>
      <div className="main-section">
        <aside className="flex flex-col gap-2  ">
          <BrandList />
        </aside>
        <section className="xl:fixed-column overflow-x-scroll scrollbar-hide">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <ShortViews mobile={data} />
              <Specification />
            </>
          )}
        </section>
        <aside>
          <Similar />
        </aside>
      </div>
    </Main>
  );
};

export default Details;
