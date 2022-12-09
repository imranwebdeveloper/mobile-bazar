import React from "react";
import Accordion from "../Common/Accordion";
import Input from "./From/Input";
import InputFile from "./From/InputFile";
import Select from "./From/Select";

const MobileForm = () => {
  return (
    <section className="  max-w-4xl mx-auto">
      {/* Common information  */}

      <Accordion heading="General Info">
        <div className="grid grid-cols-2 text-sm text-slate-800 gap-2 mt-3">
          <Select name="brands" />
          <Input label="Model" name="model" />
          <Input label="Date" type="date" name="releasedData" />
          <InputFile />
          <Input label="Network" name="networkBrands" />
          <Input label="SIM type" name="simType" />
        </div>
      </Accordion>

      {/* Body Information  */}

      <Accordion heading="Body Info">
        <div className="grid grid-cols-2 text-sm text-slate-800 gap-2 mt-3">
          <Input label="Dimension" name="dimension" />
          <Input label="Weight" name="weight" />
          <Input label="Build" name="build" />
          <Input label="Screen size" name="screenSize" />
          <Input label="Screen type" name="screenType" />
          <Input label="Resolution" name="resolution" />
          <Input label="Protection" name="protection" />
        </div>
      </Accordion>

      {/* <Basic /> */}
      {/* <Connectivity /> */}
      {/* <InTheBox /> */}

      {/* <Camera /> */}
      {/* <Features /> */}
      {/* <Others /> */}
    </section>
  );
};

export default MobileForm;
