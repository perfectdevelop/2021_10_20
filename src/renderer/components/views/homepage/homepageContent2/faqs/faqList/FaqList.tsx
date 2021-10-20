import React from 'react';
// import "./index.scss";
import HomeAcordion from "../../homeAcordion/HomeAcordion";
import { useState } from "react";
export default function FaqList(): JSX.Element {
  const [current, setCurrent] = useState(10);

  const handleExpanding = (index: number) => {
    if (current === index) {
      setCurrent(10);
    } else {
      setCurrent(index);
    }
  };
  return (
    <div className="hp-roadmap-list">
      <HomeAcordion
        header="How can i buy an ape?"
        text="Ape purchasing happens through our ‘Apeintosh’ which can be found at the top of the website. When minting commences, login to the computer with the ‘super secret’ password, connect your wallet and click on ‘mint.exe’. Follow the prompted procedures and BOOM! You’re a fully fledged degenerate ape."
        expanded={current === 0}
        onChange={() => handleExpanding(0)}
      />
      <HomeAcordion
        header="When is the drop? How much?"
        text="The drop date is August 13th 5PM PST (follow our social channels for exact times). Mint price, or ‘enrolment fee’) is 6 SOL."
        expanded={current === 1}
        onChange={() => handleExpanding(1)}
      />
      <HomeAcordion
        header="CAN I MINT ON MY MOBILE?"
        text="Yes, you will be able to mint through Sollet on your mobile. To use Phantom please connect to your computer."
        expanded={current === 2}
        onChange={() => handleExpanding(2)}
      />
      <HomeAcordion
        header="IS THERE A LIMIT?"
        text="Yes and no. We will be limiting people to 1 ape per transaction. This does mean you can return to the mint section as many times as you want though."
        expanded={current === 3}
        onChange={() => handleExpanding(3)}
      />{" "}
      <HomeAcordion
        header="How many traits are in the academy?"
        text="Our student apes have a total of 137 possible traits with 7 total different categories (Fur/Skin, Head, Body (Clothing), Mouth, Eyewear, Teeth and background). You can see them in all their glory in the traits section of the website."
        expanded={current === 4}
        onChange={() => handleExpanding(4)}
      />{" "}
      <HomeAcordion
        header="Do you have a rarity system?"
        text="Yes, rarity is incredibly important to us. So much so that we have designed a trait hierarchy system that lists the traits from ‘Common’ all the way through to ‘Mythic’ and each rank has a corresponding % chance of being minted. All of the Academy’s traits and their rarity % can be viewed over in our ‘Academy Trait’ section."
        expanded={current === 5}
        onChange={() => handleExpanding(5)}
      />
      <HomeAcordion
        header="WILL there be a secondary market?"
        text="Yes, we will be listing on Solanart  as soon as we go live so you apes can trade immediately. We apologise in advance if there are any issues around this as the NFT space on Solana is still very fresh, we will do all we can to make this a seamless experience though. We will look to move over to our own marketplace in the near future"
        expanded={current === 6}
        onChange={() => handleExpanding(6)}
      />
      <HomeAcordion
        header="WIll there be a community fund?"
        text="Yes, we will be placing 10% of our total sales and secondary market royalties into our ‘community vault’. We will look to adjust this number as we get established but this will be used to ensure we have the means to hire the right team/contractors to continue to build and grow the academy over time. "
        expanded={current === 7}
        onChange={() => handleExpanding(7)}
      />
      <HomeAcordion
        header="Are there secondary sale royalties?"
        text="Yes, royalties are set at 4.2%. We will be contributing 10% of this back into the community vault for future academy expansion (subject to review)."
        expanded={current === 8}
        onChange={() => handleExpanding(8)}
      />
      <HomeAcordion
        header="Do i own the ape after purchasing?"
        text="Yes, full intellectual properties are given to the buyer. You can learn more about your rights as a degenerate ape holder in our terms section."
        expanded={current === 9}
        onChange={() => handleExpanding(9)}
      />
    </div>
  );
}
