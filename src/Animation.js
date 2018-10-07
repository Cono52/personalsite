import { TimelineMax, Elastic, Power2 } from "gsap";

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
  levitate(cb) {
    const tl = new TimelineMax({ delay: 1 });
    tl.fromTo(
      "#impossible_shape",
      5,
      { opacity: 0 },
      { opacity: 1, ease: Power2.easeInOut }
    );
    const tl2 = new TimelineMax({ repeat: -1 });
    tl2
      .fromTo(
        "#impossible_shape",
        2,
        { y: -7, ease: Power2.easeInOut },
        { y: 7, ease: Power2.easeInOut }
      )
      .to("#impossible_shape", 2, { y: -7, ease: Power2.easeInOut });
  },
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
