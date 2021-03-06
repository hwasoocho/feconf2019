import fullpage from 'fullpage.js';
import IntroSection from "./components/sections/IntroSection"
import InfoSection from "./components/sections/InfoSection"
import SponsorSection from "./components/sections/SponsorSection"
import { UI } from "./components/UI"
import DescSection from "./components/sections/DescSection"

const ui = new UI();
const sections = [
  new IntroSection('intro-section'),
  new DescSection('desc-section'),
  new InfoSection('info-section'),
];

document.querySelectorAll('.section').forEach((_, i) => {
  if (sections[i]) {
    sections[i].init();
  }
});

new fullpage('#fullpage', {
  licenseKey: 'uobwH@p8',
  anchors: ['intro', 'description', 'info', 'sponsors'],
  onLeave(_, target) {
    ui.afterSectionLeave(target.index);
    onBGChange(target.index);
  },
  afterLoad(origin, dest) {
    if (origin) {
      sections[origin.index].afterLeave();
    }
    if (dest) {
      sections[dest.index].afterLoad();
    }
  },
});

setTimeout(() => document.body.classList.add('loaded'), 0);
document.querySelectorAll('a.apply-btn').forEach(item =>
  item.setAttribute('href', APPLY_URL));

function onBGChange(idx) {
  const bodyClass = document.body.classList;
  const classList = sections.map((_, idx) => `section${idx + 1}`);
  classList.forEach(c => bodyClass.remove(c));
  bodyClass.add(`section${idx + 1}`);
}
