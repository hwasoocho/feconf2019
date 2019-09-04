import React, {useCallback, useState} from 'react';
import cc from 'classcat';
import css from './SpeakerDetailModal.scss';
import {Speaker} from "../../../../shared/interfaces";
import {timetable} from "../../../../shared/data";
import {useModal} from "../../../../shared/store";

interface SpeakerDetailModalProps {
  speaker: Speaker;
}

const SpeakerDetailModal: React.FC<SpeakerDetailModalProps> = ({ speaker }) => {
  const { changeSpeaker } = useModal();
  const [rendered, setRendered] = useState(true);
  const onChangeSpeaker = useCallback((e, val) => {
    e.preventDefault();
    e.stopPropagation();
    setRendered(false);
    setTimeout(() => {
      setRendered(true);
      changeSpeaker(speaker, val);
    }, 100);
  }, [speaker]);
  return (
    <div className={cc([css.SpeakerDetailModal, rendered ? css.rendered : ''])}>
      <div className={cc([css.BottomWrap, 'kr-text'])}>
        <div className={css.LeftBg}/>
        <div className={css.LeftWrap}>
          <div className={cc([css.ProfileWrap])}>
            <div className={css.ProfileImage}>
              <img src={`static/images/speakers/${speaker.image}`} alt={speaker.nameEn}/>
            </div>
            <h1 className={css.ProfileName}>
              {speaker.name}
            </h1>
            {speaker.company ?
              <a
                target="_blank"
                href={speaker.company.link}
                className={css.ProfileInfo}
                onClick={e => e.stopPropagation()}
              >
              {speaker.company.name}
            </a> : null
            }
          </div>
        </div>
        <div className={css.RightWrap}>
          <div className={css.NavWrap}>
            <a href="#" onClick={(e) => onChangeSpeaker(e, -1)}>◀︎ 이전 스피커</a>
            <a href="#" onClick={(e) => onChangeSpeaker(e, 1)}>다음 스피커 ▶︎</a>
          </div>
          <div className={css.ProfileWrap}>
            <p
              className={css.ProfileDesc}
              dangerouslySetInnerHTML={{__html: speaker.track.description}}
            />
            <p className={css.TrackTime}>
              2019년 10월 26일 | { timetable[speaker.track.order] } <br/>
              Track {speaker.track.type === 'A' ? 1 : 2}
            </p>
            <h2 className={css.TrackTitle}>{speaker.track.title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeakerDetailModal;
