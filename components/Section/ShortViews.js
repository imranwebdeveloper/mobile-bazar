import Image from "next/image";
import img from "../../img/mobile/1.jpg";
import MobilePrice from "../Table/MobilePrice";

const ShortViews = ({ mobile }) => {
  return (
    <article className="rounded mb-4 my-bg-primary py-6 border">
      <div className=" flex items-center justify-center gap-4 ">
        <div className="rounded p-4  ">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className=" w-48 flex justify-center items-center flex-col   ">
              <Image
                src={mobile?.img}
                alt="img"
                width={130}
                height={150}
                priority
              />
              <h1 className="text-xl text-center font-bold mt-4">
                {mobile?.brand} {mobile?.modal}
              </h1>
            </div>
            <div className="p-4">
              <MobilePrice />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ShortViews;
