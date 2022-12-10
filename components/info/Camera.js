import Details from "./Details";
import InfoBody from "./InfoBody";

const arr = [
  {
    variant: "12",
    details:
      "26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift stabilization (IBIS)",
  },
  {
    variant: "12",
    details: 'f/1.8, 26mm (wide), 1/1.76", 1.8µm, Dual Pixel PDAF, OIS',
  },
  {
    variant: "64",
    details:
      'f/2.0, 29mm (telephoto), 1/1.72", 0.8µm, PDAF, OIS, 1.1x optical zoom, 3x hybrid zoom',
  },
];

const Camera = () => {
  return (
    <InfoBody heading="Camera">
      <Details title="Main Camera" arr={arr} />
      <Details title="Front Camera" arr={arr} />
    </InfoBody>
  );
};

export default Camera;
