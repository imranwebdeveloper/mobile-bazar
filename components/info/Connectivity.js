import DetailsList from "./DetailsList";
import InfoBody from "./InfoBody";

const Connectivity = () => {
  return (
    <InfoBody heading="Connectivity">
      <DetailsList
        title="Wi-Fi"
        details="Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct, hotspot"
      />
      <DetailsList title="Bluetooth" details="5.0, A2DP, LE" />
      <DetailsList
        title="GPS"
        details="Yes, with A-GPS, GLONASS, BDS, GALILEO"
      />
      <DetailsList title="FM" details="Yes" />
      <DetailsList title="NFC" details="Yes" />
    </InfoBody>
  );
};

export default Connectivity;
