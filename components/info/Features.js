import ArrDetails from "./ArrDetails";
import InfoBody from "./InfoBody";

const Features = () => {
  const sensor = ["Accelerometer", "Proximity", "Compass", "Barometer"];
  const others = [
    "Samsung DeX, Samsung Wireless DeX (desktop experience support)",
    "Bixby natural language commands and dictation",
    "Samsung Pay (Visa, MasterCard certified)",
    "Ultra Wideband (UWB) support",
  ];

  return (
    <InfoBody heading="Features">
      <ArrDetails title="Sensors" details={sensor} />
      <ArrDetails title="Others" details={others} col />
    </InfoBody>
  );
};

export default Features;
