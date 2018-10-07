import { TimelineMax, Elastic } from "gsap";

const logos = [
  "#react_logo",
  "#webpack_logo",
  "#html_logo",
  "#js_logo",
  "#node_logo",
  "#redux_logo",
  "#css_logo"
];

export default {
  show(cb) {
    logos.forEach((logo, i) => {
      const tl = new TimelineMax({
        delay: i * 1,
        repeat: -1,
        repeatDelay: logos.length - 2
      });
      tl.set(logo, {
        scale: 0,
        opacity: 0
      });
      tl.to(logo, 1, {
        scale: 1,
        opacity: 1,
        ease: Elastic.easeOut.config(1, 1)
      }).to(logo, 1, {
        scale: 0,
        opacity: 0,
        ease: Elastic.easeOut.config(1, 1)
      });
      tl.timeScale(0.75);
    });
  }
};
