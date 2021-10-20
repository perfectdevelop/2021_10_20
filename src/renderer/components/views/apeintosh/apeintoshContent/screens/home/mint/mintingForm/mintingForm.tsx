import React from 'react';
// import "./index.scss";

import { useState, useEffect } from "react";
import ApeintoshButton from "../../../../../../../common/apeintosh/apeintoshButton/ApeintoshButton";
// import { mint } from "../../../../../../../../../utils/mint/mintApe";
import useMintingState from "../../../../../../../../hooks/useMintingState";

export default function MintingForm(): JSX.Element {
  const [mintingState] = useMintingState();
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    if (mintingState === "NONE") {
      setConfirm(false);
    }
  }, [mintingState]);
  return (
    <>
      <h1>{!confirm ? "Mint an Ape" : "I'd like to mint an Ape"}</h1>
      {!confirm && <div className="minting-countdown">1</div>}
      <ApeintoshButton
        color={confirm ? "BLUE" : "PURPLE"}
        className="minting-button"
        onClick={() => {
          if (confirm) {
            // mint();
          } else {
            setConfirm(true);
          }
        }}
      >
        Mint
      </ApeintoshButton>
    </>
  );
}
