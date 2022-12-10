import React from "react";
import DetailsList from "./DetailsList";
import InfoBody from "./InfoBody";
const Basic = () => {
  return (
    <InfoBody heading="Basic">
      <DetailsList title="OS" details="IOS 14.1, upgradable to iOS 14.6" />
      <DetailsList
        title="Fingerprint"
        details="Fingerprint (under display, ultrasonic)"
      />
      <DetailsList
        title="Internal Storage"
        details="128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM"
      />
      <DetailsList title="SD Card" details="No Support" />
      <DetailsList title="RAM" details="6GB, 12GB" />
      <DetailsList title="Processor" details="Qualcomm Snapdragon 870" />
      <DetailsList
        title="CPU"
        details="Octa-core (1x2.9 GHz Cortex-X1 & 3x2.80 GHz Cortex-A78 & 4x2.2 GHz Cortex-A55) - International"
      />
      <DetailsList title="GPU" details="Apple GPU (4-core graphics)" />
      <DetailsList title="Battery" details="Fast charging 20W, 50% in 30 min" />
      <DetailsList title="Port" details="USB Type-C 3.2" />
      <DetailsList title="Audio Jack" details="No" />
      <DetailsList
        title="Sound"
        details="Yes, with stereo speakers, 32-bit/384kHz audio "
      />
      <DetailsList
        title="Color"
        details="Silver, Graphite, Gold, Pacific Blue"
      />
    </InfoBody>
  );
};

export default Basic;
