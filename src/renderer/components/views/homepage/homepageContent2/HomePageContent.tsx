import React from 'react';
import "./index.scss";
import About from "./about/About";
import RoadMap from "./roadmap/Roadmap";
import TraitRatity from "./traitRatity/TraitRatity";
import Metaverse from '../../apeintosh/Metaverse';
import Team from "./team/Team";
import Faqs from "./faqs/Faqs";
import Divider from "./divider/Divider";

export default function HomePageContent(): JSX.Element {
  return (
    <div className="hp-content">
      <About />
      <RoadMap />
      {/* <Divider /> */}
      {/* <TraitRatity /> */}
      <Metaverse />
      {/* <Divider />  */}
      {/* <Faqs /> */}
      <Team />
    </div>
  );
}
