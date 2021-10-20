import "./index.scss";

import React from 'react';
import ApeintoshPopupWindow from "../../../../../../common/apeintosh/apeintoshPopupWindow.tsx/ApeintoshPopupWindow";
import useMintingState from "../../../../../../../hooks/useMintingState";
import MintingMesagge from "./mintingMessage/MintingMessage";

import MintingForm from "./mintingForm/mintingForm";

export default function Minting({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}): JSX.Element {
  const [mintingState] = useMintingState();
  return (
    <ApeintoshPopupWindow open={open} ape={true}>
      <div className="h-minting">
        {mintingState === "NONE" ? <MintingForm /> : <MintingMesagge />}
        <div className="mint-close" onClick={() => handleClose()}>
          x
        </div>
      </div>
    </ApeintoshPopupWindow>
  );
}
