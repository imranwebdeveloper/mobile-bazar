import Image from "next/image";
import { useRouter } from "next/router";

const MobileCard = ({ mobile, isBrand }) => {
  const router = useRouter();
  const { img, brand, price, modal } = mobile;

  return (
    <article
      className="transition text-sm rounded cursor-pointer hover:scale-105  flex flex-col justify-center gap-2"
      onClick={() =>
        router.push(
          `/${brand.toLowerCase()}/${modal.toLowerCase().split(" ").join("-")}`
        )
      }
    >
      <div className=" w-20 md:w-28 mx-auto ">
        <Image
          src={img}
          //   layout="responsive"
          alt="Samsung"
          className="block"
          width={100}
          height={100}
          priority
        />
      </div>
      <section className=" flex flex-col items-center ">
        <div className=" text-center">
          {isBrand ? "" : <h3 className=" font-semibold ">{brand}</h3>}
          <p className="">{modal}</p>
        </div>
        <div className=" flex flex-col justify-center flex-1 text-center font-semibold  ">
          <p>{price} Tk.</p>
        </div>
      </section>
    </article>
  );
};

export default MobileCard;
