import Link from "next/link";
import Basic from "../info/Basic";
import Body from "../info/Body";
import Camera from "../info/Camera";
import Connectivity from "../info/Connectivity";
import Display from "../info/Display";
import Features from "../info/Features";
import InTheBox from "../info/InTheBox";
import Networks from "../info/Networks";
import Released from "../info/Released";

const Specification = () => {
  return (
    <section className="flex flex-col divide-y rounded-border overflow-hidden my-bg-primary p-4">
      <div className="tabs  font-semibold mb-4">
        <a className="tab tab-bordered   tab-active">Details</a>
        <a className="tab tab-bordered  ">Pictures</a>
        <a className="tab tab-bordered ">Comments</a>
      </div>
      <Released heading="Released" title="Date" details="13-November-2020" />
      <Networks />
      <Body />
      <Display />
      <Basic />
      <Camera />
      <Connectivity />
      <Features />
      <InTheBox />
    </section>
  );
};

export default Specification;
