import React, {useState} from 'react';
import cc from 'classcat';
import css from './HomeSpeakers.scss';
import TitleHero from "../../../../components/TitleHero/TitleHero";
import HoverButton from "../../../../components/HoverButton/HoverButton";
import {speakers} from "../../../../../shared/data";
import RowContainer from "../../../../components/RowContainer/RowContainer";
import useResponsive from "../../../../../shared/hooks/useResponsive";

interface HomeSpeakersProps {
}

const HomeSpeakers: React.FC<HomeSpeakersProps> = () => {
  const [isFold, fold] = useState(true);
  const {isMobile} = useResponsive();
  return (
    <div className={cc(['container', css.HomeSpeakers])}>
      <TitleHero title="2019" subTitle="16 Speakers"/>
      <div className={css.SpeakerList}>
        <RowContainer count={4} fold={isFold} items={speakers}/>
      </div>
      {isFold ?
        <div className={css.ButtonWrap}>
          <HoverButton
            title="스피커 모두 보기"
            filled={false}
            width={isMobile ? "100%" : 300}
            onClick={() => fold(!isFold)}
          />
        </div> : null
      }
    </div>
  );
}

export default HomeSpeakers;
