import fullpage from 'fullpage.js';
import IntroSection from "./components/sections/IntroSection"
import InfoSection from "./components/sections/InfoSection"
import DueSection from "./components/sections/DueSection"
import PricingSection from "./components/sections/PricingSection"
import BenefitSection from "./components/sections/BenefitSection"
import { UI } from "./components/UI"

const ui = new UI();
const sections = [
  new IntroSection('intro-section'),
  new InfoSection('info-section', ui),
  new DueSection('due-section'),
  new PricingSection('pricing-section'),
  new BenefitSection('benefit-section'),
];

document.querySelectorAll('.section').forEach((_, i) => {
  if (sections[i]) {
    sections[i].init();
  }
});

new fullpage('#fullpage', {
  licenseKey: 'uobwH@p8',
  anchors: ['intro', 'info', 'due', 'pricing', 'benefit'],
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
document.querySelectorAll('a.support-btn').forEach(item =>
  item.setAttribute('href', SUPPORT_URL));

function onBGChange(idx) {
  const bodyClass = document.body.classList;
  const classList = sections.map((_, idx) => `section${idx + 1}`);
  classList.forEach(c => bodyClass.remove(c));
  bodyClass.add(`section${idx + 1}`);
}
