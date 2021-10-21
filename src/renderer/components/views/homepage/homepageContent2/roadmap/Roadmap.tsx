import React from 'react';
import "./index.scss";
import RoadmapList from "./roadmapList/RoadmapList";

import { ReactComponent as Banana } from "../../../../../../assets/images/pictures/backgrounds/banana.svg";
// import banana from "../../../../../../assets/images/pictures/backgrounds/banana.svg";
import Facebone from '../../../../../../assets/images/pictures/icons/facebone.png';
import PhaseIcon2 from '../../../../../../assets/images/roadmapIcons/22.png';
import PhaseIcon3 from '../../../../../../assets/images/roadmapIcons/33.png';
import PhaseIcon4 from '../../../../../../assets/images/roadmapIcons/44.png';
import PhaseIcon5 from '../../../../../../assets/images/roadmapIcons/55.png';
import PhaseIcon1 from '../../../../../../assets/images/roadmapIcons/11.png';
import Tick from '../../../../../../assets/images/icons/tick2.png';

export default function RoadMap(): JSX.Element {
  return (
    <>
      <div id="roadmap" className="hp-roadmap" data-aos="fade-up">
        <div className="hp-rm-content">
          <p className="road-map">ROADMAP</p>
          {/* <div className="roadmap-items">
            <div className="meb-icon">
              <p>MEB</p>
            </div>
            <div className="r-desc">
              <p className="r-header">0%</p>
              <p className="r-content">Before the release, we will pre-mint random 100 Bullish Llama NFTs for the team and promotion purposes, such as giveaways to grow our community.</p>
            </div>
          </div>
          <div className="roadmap-items">
            <div className="meb-icon">
              <p>MEB</p>
            </div>
            <div className="r-desc">
              <p className="r-header">30%</p>
              <p className="r-content">Launch of merch store exclusively for Bullish Llama NFT owners – show off your Bullish Llama to the world on snapbacks, t-shirts, hoodies, posters, and more</p>
            </div>
          </div>
          <div className="roadmap-items">
            <div className="meb-icon">
              <p>MEB</p>
            </div>
            <div className="r-desc">
              <p className="r-header">60%</p>
              <p className="r-content">Charity donation to World Wildlife Fund in the amount of 10% of minting sales</p>
            </div>
          </div>
          <div className="roadmap-items">
            <div className="meb-icon">
              <p>MEB</p>
            </div>
            <div className="r-desc">
              <p className="r-header">90%</p>
              <p className="r-content">Our club is more like a farm, where are not only Llamas and each animal have its own role. We will create a partner for our Bullish Llamas and you will choose which animal will be next.
                We will gift the other Bullish creature to 50% random minters.</p>
            </div>
          </div>
          <div className="roadmap-items">
            <div className="meb-icon">
              <p>MEB</p>
            </div>
            <div className="r-desc">
              <p className="r-header">100%</p>
              <p className="r-content">We all want to raise our own herds of Bullish farm creatures. Our mobile app will help you with that as well as with finding the right use case for each Bullish Llama skillset.</p>
            </div>
          </div> */}

          {/*
            <div className="pawrap">
            <div className="pawbox pawbox1 right">
              <p className="r-header">0%</p>
              <p className="r-content">Before the release, we will pre-mint random 100 Bullish Llama NFTs for the team and promotion purposes, such as giveaways to grow our community.</p>
            </div>
            <div className="pawicon">
              <p>MEB</p>
            </div>
             <span>0%</span>
          </div>
          <div className="pawrap pawrap2">
             <span>10%</span> 
            <div className="pawicon">
              <p>MEB</p>
            </div>
            <div className="pawbox pawbox1">
            <p className="r-header">30%</p>
              <p className="r-content">Launch of merch store exclusively for Bullish Llama NFT owners – show off your Bullish Llama to the world on snapbacks, t-shirts, hoodies, posters, and more</p>
            </div>
          </div>
          <div className="pawrap">
            <div className="pawbox pawbox1 right">
            <p className="r-header">60%</p>
              <p className="r-content">Charity donation to World Wildlife Fund in the amount of 10% of minting sales</p>
            </div>
            <div className="pawicon">
              <p>MEB</p>
            </div>
             <span>25%</span> 
          </div>
          <div className="pawrap pawrap2">
             <span>50%</span> 
            <div className="pawicon">
              <p>MEB</p>
            </div>
            <div className="pawbox pawbox1">
            <p className="r-header">90%</p>
              <p className="r-content">Our club is more like a farm, where are not only Llamas and each animal have its own role. We will create a partner for our Bullish Llamas and you will choose which animal will be next.
                We will gift the other Bullish creature to 50% random minters.</p>
            </div>
          </div>
          <div className="pawrap last-pawrap">
            <div className="pawbox pawbox1 right">
            <p className="r-header">100%</p>
              <p className="r-content">We all want to raise our own herds of Bullish farm creatures. Our mobile app will help you with that as well as with finding the right use case for each Bullish Llama skillset.</p>
            </div>
            <div className="pawicon">
              <p>MEB</p>
            </div>
             <span>75%</span> 
          </div>
          <div className="pawrap pawrap2"> 
             <span>100%</span> 
             <div className="pawicon">
              <p>MEB</p>
            </div>
            <div className="pawbox pawbox1">
              <p className="">A lucky draw for a tesla car, a Rolex, and 3 ETH for 3 lucky communtity member</p>
            </div>
          </div>
        
          {/* <img src={banana} alt="logo"/> */}
          <div className="roadmap-container">
            <div className="phase-container">
              <div className="phase">
                <p className="phase-title">Phase One - Pre Minting 500 NFTs</p>
                <p className="phase-content special"><span><img src={Tick} alt="tick" className="" /></span>Before the public fair launch, we will pre-mint random 500 Mutant Ether Babies NFTs for the team and promotion and gaming purposes, such as giveaways to grow our community and reward for our gamers in the upcoming Mebs Subway play-to-earn game.</p>
              </div>
              {/* <img src={PhaseIcon3} alt="" className="phase-icon" /> */}
              <div className=""></div>
            </div>

            <div className="phase-container">
              {/* <img src={PhaseIcon2} alt="" className="phase-icon" /> */}
              <div className="phase">
                <p className="phase-title">Phase Two - Community giveaways </p>
                <div className="phase-content">
                  <p><span><img src={Tick} alt="tick" className="" /></span>30% Minted - 5 ETH Giveaway to 5 lucky Meb holders & 5 ETH buyback to raise floor level</p>
                  <p><span><img src={Tick} alt="tick" className="" /></span>50% Minted - 10 ETH Giveaway to 10 lucky Meb holders & 10 ETH buyback to raise floor level </p>
                  <p><span><img src={Tick} alt="tick" className="" /></span>80% Minted - 10 ETH Giveaway to 10 lucky Meb holders & 10 ETH buyback to raise floor level </p>
                  <p><span><img src={Tick} alt="tick" className="" /></span>100% Minted - 30 ETH allocated for Charities 3 Charities [ 10 Eth each ] and 20 ETH Buyback to raise floor level </p>
                </div>
              </div>
              <div className=""></div>
            </div>
            <div className="phase-container">
              <div className="phase">
                <p className="phase-title">Phase Three - Charities</p>
                <p className="phase-content special"><span><img src={Tick} alt="tick" className="" /></span>Charities to be awarded the 30 ETH Charity Funds will be chosen by our community members - Your voices are matter!</p>
              </div>
              {/* <img src={PhaseIcon1} alt="" className="phase-icon" /> */}
              <div className=""></div>
            </div>
            <div className="phase-container">
              {/* <img src={PhaseIcon5} alt="" className="phase-icon" /> */}
              <div className="phase">
                <p className="phase-title">Phase Four - Gaming & Metaverse</p>
                <p className="phase-content special"><span><img src={Tick} alt="tick" className="" /></span>Our Gaming platform and app will be released and our members will start earning by playing the Mebs Subway Game -</p>
                <p><span><img src={Tick} alt="tick" className="" /></span>We will buy land in the metaverse and build the Mebs Island Mebsverse</p>
                <p><span><img src={Tick} alt="tick" className="" /></span>Each MEBS holder will be airdropped a 3D version of their MEBS an which will be used in the MEBVERSE.</p>
                <p><span><img src={Tick} alt="tick" className="" /></span>We will launch our Mebs Island Metaverse and members can hang out in there and also watch their NFTs being displayed in the Mebs Gallery in the Mebverse or Metaverse.</p>
              </div>
              <div className=""></div>
            </div>
            <div className="phase-container">
              <div className="phase">
                <p className="phase-title">Phase Five </p>
                <p className="phase-content special"><span><img src={Tick} alt="tick" className="" /></span>Short animated movie based on MEBS and NFT.</p>
                  <p><span><img src={Tick} alt="tick" className="" /></span>Opensea verification and buybacks.</p>
                  <p><span><img src={Tick} alt="tick" className="" /></span>Monthly Charity donations for 6 months [ 10k per Month ] - From Royalties on Opensea sales.</p>
                  <p><span><img src={Tick} alt="tick" className="" /></span>Mebs Merch Shop</p>
              </div>
              {/* <img src={PhaseIcon4} alt="" className="phase-icon" /> */}
              <div className=""></div>
            </div>
          </div>

          {/* <div className="roadmap-container">

            <div className="road-left">

              <div className="phase">
                <p className="phase-title">Phase One - Pre Minting 500 NFTs</p>
                <div className="phase-content">
                  <p>Before the public fair launch, we will pre-mint random 500 Mutant Ether Babies NFTs for the team and promotion and gaming purposes, such as giveaways to grow our    community and reward for our gamers in the upcoming Mebs Subway play-to-earn game..
                  </p>
                </div>
              </div>

              <div className="phase"></div>
              <div className="phase">
                <p className="phase-title">Phase Two - Community giveaways </p>
                <div className="phase-content">
                  <p><div>01</div>30% Minted - 5 ETH Giveaway to 5 lucky Meb holders & 5 ETH buyback to raise floor level</p>
                  <p><div>02</div>50% Minted - 10 ETH Giveaway to 10 lucky Meb holders & 10 ETH buyback to raise floor level </p>
                  <p><div>03</div>80% Minted - 10 ETH Giveaway to 10 lucky Meb holders & 10 ETH buyback to raise floor level </p>
                  <p><div>04</div>100% Minted - 30 ETH allocated for Charities 3 Charities [ 10 Eth each ] and 20 ETH Buyback to raise floor level </p>
                  <p>We are more concerned about community and value for our NFTs. - Mutant Ether Babies. </p>
                </div>
              </div>

              <div className="phase"></div>
              <div className="phase">
                <p className="phase-title">Phase Three - Charities</p>
                <div className="phase-content">
                  <p>Charities to be awarded the 30 ETH Charity Funds will be chosen by our community members - Your voices are matter!</p>
                </div>
              </div>
            </div>

            <div className="phase-icons">
              <img src={PhaseIcon1} alt="" className="phase-icon" />
              <img src={PhaseIcon2} alt="" className="phase-icon" />
              <img src={PhaseIcon3} alt="" className="phase-icon" />
              <img src={PhaseIcon4} alt="" className="phase-icon" />
              <img src={PhaseIcon5} alt="" className="phase-icon" />
            </div>

            <div className="road-right">
              <div className="phase"></div>
              <div className="phase">
                <p className="phase-title">Phase Four - Gaming & Metaverse</p>
                <div className="phase-content">
                  <p>Our Gaming platform and app will be released and our members will start earning by playing the Mebs Subway Game -
                    We will buy land in the metaverse and build the Mebs Island Mebsverse. 
                    Each MEBS holder will be airdropped a 3D version of their MEBS an which will be used in the MEBVERSE. 
                    We will launch our Mebs Island Metaverse and members can hang out in there and also watch their NFTs being displayed in the Mebs Gallery in the Mebverse or Metaverse.
                  </p>
                </div>
              </div>
              <div className="phase"></div>
              <div className="phase">
                <p className="phase-title">Phase Five </p>
                <div className="phase-content">
                  <p>Short animated movie based on MEBS and NFT
                    Opensea verification and buybacks
                    Monthly Charity donations for 6 months [ 10k per Month ] - From Royalties on Opensea sales.
                    Mebs Merch Shop
                  </p>
                </div>
              </div>
              <div className="phase"></div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <RoadmapList /> */}
    </>
  );
}
