import React, { useState } from "react";
import MobileForm from "../../components/Admin/MobileForm";
import Tab from "../../components/Admin/Tab";
import Wrapper from "../../components/Admin/Wrapper";
import Dashboard from "../../components/Wrapper/Dashboard";

const AddProduct = () => {
  const [active, setActive] = useState("Mobile");
  return (
    <Dashboard>
      <Tab />
      <section className="mt-4">
        {active == "Mobile" && <MobileForm />}
        {/* {tab == 2 && <AddVideosSection />} */}
        {active == 3 && <div>client</div>}
        {active == 4 && <div>News</div>}
        {active == 5 && <div>Reviews</div>}
      </section>
    </Dashboard>
  );
};

export default AddProduct;
