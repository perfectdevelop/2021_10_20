import React from 'react';
import "./newindex.scss";
import ApeintoshContent from "./apeintoshContent/ApeintoshContent";
import { useRef, useState, useEffect } from "react";
import useDidUpdateEffect from "../../../hooks/useDidUpdateEffect";
import useReduxState from "../../../hooks/useReduxState";
import { useMediaQuery } from "react-responsive";
import ApesRemaining from "./apesRemaining/ApesRemaining";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
/*eslint-disable react-hooks/exhaustive-deps */

import ApeintoshImg from "../../../../assets/images/pictures/backgrounds/pc-off.png";

import { ReactComponent as ScrollWeb } from "../../../../assets/images/pictures/icons/scroll-web.svg";
import { ReactComponent as ScrollMobile } from "../../../../assets/images/pictures/icons/scroll-mobile.svg";
import Homeback from '../../../../assets/images/pictures/backgrounds/home-back.png';
import Discord from '../../../../assets/images/pictures/social/discord.png';
import Twitter from '../../../../assets/images/pictures/social/twitter.png';

import Image1 from '../../../../assets/images/pictures/gaming/(1).png'
import Image2 from '../../../../assets/images/pictures/gaming/(2).png'
import Image3 from '../../../../assets/images/pictures/gaming/(3).png'
import Image4 from '../../../../assets/images/pictures/gaming/(4).png'
import Image5 from '../../../../assets/images/pictures/gaming/(5).png'
import Image6 from '../../../../assets/images/pictures/gaming/(6).png'
import Image7 from '../../../../assets/images/pictures/gaming/(7).png'
import Image8 from '../../../../assets/images/pictures/gaming/(8).png'
import Image9 from '../../../../assets/images/pictures/gaming/(9).png'
import Image10 from '../../../../assets/images/pictures/gaming/(10).png'
import Image11 from '../../../../assets/images/pictures/gaming/(11).png'
import Image12 from '../../../../assets/images/pictures/gaming/(12).png'
import Image13 from '../../../../assets/images/pictures/gaming/(13).png'
import Image14 from '../../../../assets/images/pictures/gaming/(14).png'
import Image15 from '../../../../assets/images/pictures/gaming/(15).png'
import Image16 from '../../../../assets/images/pictures/gaming/(16).png'
import Image17 from '../../../../assets/images/pictures/gaming/(17).png'
import Image18 from '../../../../assets/images/pictures/gaming/(18).png'
import Image19 from '../../../../assets/images/pictures/gaming/(19).png'
import Image20 from '../../../../assets/images/pictures/gaming/(20).png'
import { AddShoppingCart, SettingsInputComponentSharp } from '@material-ui/icons';
import { useAppSelector } from 'src/renderer/redux/stores/store';


export default function Metaverse(): JSX.Element {

  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  
  const [showArrows, setShowArrows] = useState(false);
  const [showNavigation, setShowNavigation] = useState(true);
  

  const [status, setStatus] = useState('start');

  
  // const [config, setConfig] = useState(config.gentle);
  const configs = config.gentle;

  const slides = [
    {
      key: uuidv4(),
      content: <img src={Image1} alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src={Image2} alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src={Image3} alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src={Image4} alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src={Image5} alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src={Image6} alt="6" />
    },
    {
      key: uuidv4(),
      content: <img src={Image7} alt="7" />
    },
    {
      key: uuidv4(),
      content: <img src={Image8} alt="8" />
    },
    {
      key: uuidv4(),
      content: <img src={Image9} alt="9" />
    },
    {
      key: uuidv4(),
      content: <img src={Image10} alt="10" />
    },
    {
      key: uuidv4(),
      content: <img src={Image11} alt="11" />
    },
    {
      key: uuidv4(),
      content: <img src={Image12} alt="12" />
    },
    {
      key: uuidv4(),
      content: <img src={Image13} alt="13" />
    },
    {
      key: uuidv4(),
      content: <img src={Image14} alt="14" />
    },
    {
      key: uuidv4(),
      content: <img src={Image15} alt="15" />
    },
    {
      key: uuidv4(),
      content: <img src={Image16} alt="16" />
    },
    {
      key: uuidv4(),
      content: <img src={Image17} alt="17" />
    },
    {
      key: uuidv4(),
      content: <img src={Image18} alt="18" />
    },
    {
      key: uuidv4(),
      content: <img src={Image19} alt="19" />
    },
    {
      key: uuidv4(),
      content: <img src={Image20} alt="20" />
    }
  ]

  const apeintoshImg = useRef<HTMLImageElement>(null);
  const [size, setSize] = useState<{ width: string; height: string }>({
    width: "0px",
    height: "0px",
  });

  const [{ wallet, screenLoading: loading }, setGlobalData] = useReduxState(
    (state) => state.globalData
  );
  const handleResize = () => {
    if (apeintoshImg && apeintoshImg.current) {
      setSize({
        height: `${apeintoshImg.current.clientHeight}px`,
        width: `${apeintoshImg.current.clientWidth}px`,
      });
    }
  };

  const isMobile = useMediaQuery({
    query: "(max-width:992px)",
  });

  useEffect(() => {
    // setInterval(function() {console.log("object")}, 3000);
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setGoToSlide(goToSlide + 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  useDidUpdateEffect(() => {
    if (wallet) {
      wallet!.on("connect", () => {
        setGlobalData({
          type: "SET_GLOBAL_DATA",
          arg: {
            connected: true,
          },
        });
      });
      wallet!.on("disconnect", () => {
        setGlobalData({
          type: "SET_GLOBAL_DATA",
          arg: {
            connected: false,
          },
        });
      });

      wallet!.connect();
      return () => {
        wallet!.disconnect();
      };
    }
  }, [wallet]);

  useDidUpdateEffect(() => {
    handleResize();
  }, [loading]);

  // const current = () => {
  //   let now = new Date();
 
  //   var dateString = moment(now).format('YYYY-MM-DD');
  //   console.log(dateString) // Output: 2020-07-21
    
  //   var dateStringWithTime = moment(now).format('YYYY-MM-DD HH:MM:SS');
  //   console.log(dateStringWithTime)
  //   return (
  //     <p>{dateStringWithTime}</p>
  //   )
  // }
  
  const [date, setDate] = useState(new Date().getHours());
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [day, setDay] = useState(new Date().getDate());

  useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );
    return function cleanup() {
        clearInterval(timerID);
      };
   });

  useEffect(() => {
    var timerID = setInterval( () => plus(), 2000 );
    return function cleanup() {
        clearInterval(timerID);
      };
   });

   function tick() {
    setDate(new Date().getHours());
    setYear(new Date().getFullYear());
    setMonth(new Date().getMonth());
    setDay(new Date().getDate());
   }

   function plus() {
    setGoToSlide(goToSlide + 1);
   }

   const monthNames = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"
    ];

  const converter = (hours:number) => {
    if(hours > 12){
      return hours - 12 + " P.M. EST Time";
    }else if(hours < 12){
      return hours + " A.M. EST Time";
    }
  }
  return (
    <>
     <p className="metaverse-title">Gaming and Metaverse</p>
    <div
      className="metaverse"
    >
     
      {/* {setInterval(function() {console.log("object")}, 3000)} */}
      {/* {console.log("Hello")} */}
      <div className="homenew" style={{ display: "flex" }}>
        <div className="home-image">
          <div className="child-home-image" >
            <div className="sub-home-image" >
              <div className="carousel-border"></div>
              <div style={{ width: "50%", height: "500px", margin: "0 auto" }} className="parent-carousel">
                {slides.length > 0 ? (
                  <Carousel
                    slides={slides}
                    goToSlide={goToSlide}
                    showNavigation={showArrows}
                    offsetRadius={offsetRadius}
                    animationConfig={configs}
                  />
                ) : null}

              </div>
              <div
                style={{
                  margin: "0 auto",
                  marginTop: "2rem",
                }}
              >
                <div className="pagination">
                  {/* <div
                    onClick={() => {
                      setGoToSlide(goToSlide - 1);
                    }}
                  >
                    ←
                  </div> */}
                  <p>UPCOMING SUBWAY GAME</p>
                  {/* <div
                    onClick={() => {
                      setGoToSlide(goToSlide + 1);
                    }}
                  >
                    →
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homenew" style={{ display: "flex" }}>
        <div className="home-image">
          <div className="child-home-image" >
            <div className="sub-home-image" >
              <div className="carousel-border"></div>
              <div style={{ width: "50%", height: "500px", margin: "0 auto" }} className="parent-carousel">
                {slides.length > 0 ? (
                  <Carousel
                    slides={slides}
                    goToSlide={goToSlide}
                    showNavigation={showArrows}
                    offsetRadius={offsetRadius}
                    animationConfig={configs}
                  />
                ) : null}

              </div>
              <div
                style={{
                  margin: "0 auto",
                  marginTop: "2rem",
                }}
              >
                <div className="pagination">
                  {/* <div
                    onClick={() => {
                      setGoToSlide(goToSlide - 1);
                    }}
                  >
                    ←
                  </div> */}
                  <p>UPCOMING METAVERSE GALLERY</p>
                  {/* <div
                    onClick={() => {
                      setGoToSlide(goToSlide + 1);
                    }}
                  >
                    →
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* {isMobile ? <ScrollMobile /> : <ScrollWeb />} */}
    </div>
    </>
  );
}