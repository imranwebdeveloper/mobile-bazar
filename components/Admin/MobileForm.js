import React from "react";
import Accordion from "../Common/Accordion";
import ArrayInput from "./From/ArrayInput";
import Input from "./From/Input";
import InputFile from "./From/InputFile";
import Select from "./From/Select";
import VariantInput from "./From/VariantInput";

const MobileForm = () => {
  return (
    <section className="  max-w-4xl mx-auto">
      {/* Input Common information  */}

      <Accordion heading="General Info">
        <div className="grid grid-cols-2  gap-2 mt-3">
          <Select name="brands" />
          <Input label="Model" name="model" />
          <Input label="Date" type="date" name="releasedData" />
          <InputFile />
          <Input label="Network" name="networkBrands" />
          <Input label="SIM type" name="simType" />
        </div>
      </Accordion>

      {/* Input Body Information  */}

      <Accordion heading="Body Info">
        <div className="grid grid-cols-2  gap-2 mt-3 mb-2">
          <Input label="Dimension" name="dimension" />
          <Input label="Weight" name="weight" />
          <Input label="Build" name="build" />
          <Input label="Screen size" name="screenSize" />
          <Input label="Screen type" name="screenType" />
          <Input label="Resolution" name="resolution" />
        </div>
        <Input label="Protection" name="protection" />
      </Accordion>

      {/* Input Camera Information */}

      <Accordion heading="Camera Info">
        <ArrayInput label="Main" name="main" />
        <Input label="Features" name="mainFeatures" />
        <ArrayInput label="Front " name="front" />
        <Input label="Features" name="frontFeatures" />
      </Accordion>

      {/* Input Basic Information  */}

      <Accordion heading="Basic Info">
        <div className="mt-2"></div>

        <VariantInput name="variant" />
        <div className="grid grid-cols-2  gap-2 mt-3 mb-2">
          <Input label="ROM Options" name="romOption" />
          <Input label="RAM Options" name="ramOption" />
          <Input label="SD Card" name="sdCard" />
          <Input label="OS" name="OS" />
          <Input label="Fingerprint" name="fingerprint" />
          <Input label="Processor" name="processor" />
          <Input label="CPU" name="CPU" />
          <Input label="GPU" name="GPU" />
          <Input label="Battery" name="battery" />
          <Input label="PORT" name="PORT" />
          <Input label="Audio Jack" name="audioJack" />
          <Input label="Sound" name="sound" />
        </div>
        <ArrayInput label="Charging" name="charging" />
        <Input label="Color Variant " name="colorVariant" />
      </Accordion>

      {/* Input Connectivity  */}

      <Accordion heading="Connectivity">
        <div className="grid grid-cols-2  gap-2 mt-3 mb-2">
          <Input label="Wi-Fi" name="wifi" />
          <Input label="Bluetooth" name="bluetooth" />
          <Input label="GPS" name="GPS" />
          <Input label="OTG" name="OTG" />
          <Input label="FM" name="FM" />
          <Input label="NFC" name="NFC" />
        </div>
      </Accordion>

      {/* Input Features  */}

      <Accordion heading="Features">
        <div className="mt-2"></div>

        <Input label="Sensor" name="sensor" />
        <ArrayInput label="Others" name="others" />
      </Accordion>

      {/* Input Others  */}

      <Accordion heading="Others">
        <div className="mt-2"></div>
        <Input label="Color" name="color" />
        <ArrayInput label="In The Box" name="inTheBox" />
      </Accordion>

      {/* <InTheBox /> */}
    </section>
  );
};

export default MobileForm;
