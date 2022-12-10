import React from "react";
import DetailsList from "./DetailsList";
import InfoBody from "./InfoBody";

const Networks = () => {
  return (
    <InfoBody heading="Networks">
      <DetailsList
        title="Bands"
        details="2G GSM, 3G WCDMA, 4G FDD_LTE, 4G TDD_LTE, 5G"
      />

      <DetailsList
        title="SIM Type"
        details="Single SIM (Nano-SIM and/or eSIM) or Dual SIM (Nano-SIM and/or eSIM, dual stand-by)"
      />
    </InfoBody>
  );
};

export default Networks;
