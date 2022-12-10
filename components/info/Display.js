import DetailsList from "./DetailsList";
import InfoBody from "./InfoBody";

const Display = () => {
  return (
    <InfoBody heading="Display">
      <DetailsList
        title="Screen Size"
        details="6.7 inches, 109.8 cm2 (~87.4% screen-to-body ratio)"
      />
      <DetailsList
        title="Screen Type"
        details=" Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (typ), 1200 nits (peak)"
      />
      <DetailsList
        title="Resolutions"
        details=" 1284 x 2778 pixels, 19.5:9 ratio (~458 ppi density)"
      />
      <DetailsList
        title="Protection"
        details=" Scratch-resistant ceramic glass, oleophobic coating , Always-on display, Wide color gamut, True-tone, Sunlight display, Color temperature adjustment"
      />
    </InfoBody>
  );
};

export default Display;
