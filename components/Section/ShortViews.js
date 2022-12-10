import Image from "next/image";
import img from "../../img/mobile/1.jpg";
import MobilePrice from "../Table/MobilePrice";

const ShortViews = ({ mobile }) => {
  return (
    <article className="rounded mb-4 my-bg-primary py-6 border">
      <div className=" flex items-center justify-center gap-4 ">
        <div className="rounded p-4  border ">
          <h1 className="section_heading p-0 mb-2 text-center">
            {mobile?.brand} {mobile.modal}
          </h1>
          <div className="md:flex gap-4">
            <div className=" flex justify-center items-center   ">
              <Image
                src={mobile.img}
                alt="img"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className=" p-4">
              <MobilePrice />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ShortViews;
