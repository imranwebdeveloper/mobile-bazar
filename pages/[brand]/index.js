import { useRouter } from "next/router";
import React, { useState } from "react";

const BrandProducts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const path = router.query;
  console.log(path);

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

  return <div>index</div>;
};

export default BrandProducts;
