import DetailsList from "./DetailsList";
import InfoBody from "./InfoBody";

const Body = ({ heading, title, details }) => {
  return (
    <InfoBody heading="Body">
      <DetailsList
        title="Dimensions"
        details="160.8 x 78.1 x 7.4 mm (6.33 x 3.07 x 0.29 in)"
      />
      <DetailsList title="Weight" details="228g" />
      <DetailsList
        title="Build"
        details=" Stainless steel frame, Glass front (Gorilla Glass), glass back
          (Gorilla Glass)"
      />
    </InfoBody>
  );
};

export default Body;
