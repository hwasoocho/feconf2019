import React, {useState} from 'react';
import cc from 'classcat';
import css from "./Hero.scss";
import {animated, useTrail} from "react-spring";
import { MainImage } from "../../../../../static/images/main";
import HoverButton from "../../../../components/HoverButton/HoverButton";

interface HeroProps {
}

const words = [
  'Sustainability',
];

const Hero: React.FC<HeroProps> = () => {
  const [currentIdx, setIdx] = useState(0);
  const text = words[currentIdx].split('').map((value, idx) => ({ key: idx, value }));
  const trail = useTrail(text.length, {
    transform: 'translate3d(0,0px,0)',
    opacity: 1,
    from: {
      transform: 'translate3d(0,-14px,0)',
      opacity: 0
    },
  });
  return (
    <div className={cc([css.Hero])}>
      <div className={css.Wrap}>
        <MainImage/>
        <div className={css.TextWrap}>
          <div className={css.Title}>
            <h3>FE Conference 2019</h3>
            <h3>is for</h3>
            <h2>
              {trail.map((props, i) => (
                <animated.span key={i} style={props}>{text[i].value}</animated.span>
              ))}
            </h2>
          </div>
          <p className={cc([css.Info, 'kr-text'])}>
            2019년 10월 26일 토요일 10AM - 5PM <br/>
            <a target="_blank" href="http://naver.me/GF26VviE">
              잠실 롯데타워 SKY31
            </a>
          </p>
          <HoverButton title="참가 신청하기"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;