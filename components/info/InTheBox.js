import ArrDetails from "./ArrDetails";
import InfoBody from "./InfoBody";

const InTheBox = () => {
  const inTheBox = [
    "Earpieces",
    "Documentation",
    "Cable",
    "USB Power Adapter",
    "Protective Film",
    "Protective Case",
  ];
  return (
    <InfoBody heading="In The Box">
      <ArrDetails title="With Box" details={inTheBox} />
    </InfoBody>
  );
};

export default InTheBox;
