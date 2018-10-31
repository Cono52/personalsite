import { TimelineMax, TweenMax, Elastic, Linear, Power2, Ease } from "gsap";

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
    const fadeIn = new TimelineMax({ delay: -1 });
    const upDown = new TimelineMax({ repeat: -1 });

    var elementArray1 = document.querySelectorAll(".color1");
    var elementArray2 = document.querySelectorAll(".color2");
    var elementArray11 = document.querySelectorAll(".color11");
    var elementArray12 = document.querySelectorAll(".color12");

    const color1 = { h: 198, s: 76, l: 42 };
    const color2 = { h: 197, s: 100, l: 19 };
    const color12 = { h: 220, s: 49, l: 71 };
    const color11 = { h: 193, s: 100, l: 25 };

    TweenMax.to([color1, color2, color12, color11], 20, {
      h: 360 + 193,
      onUpdate: applyColor,
      ease: Linear.easeNone,
      repeat: -1
    });

    function applyColor() {
      for (let i = 0; i < elementArray1.length; i++) {
        const element = elementArray1[i];
        element.style.stopColor =
          "hsl(" + color1.h + "," + color1.s + "%," + color1.l + "%)";
      }
      for (let i = 0; i < elementArray2.length; i++) {
        const element = elementArray2[i];
        element.style.stopColor =
          "hsl(" + color2.h + "," + color2.s + "%," + color2.l + "%)";
      }
      for (let i = 0; i < elementArray12.length; i++) {
        const element = elementArray12[i];
        element.style.stopColor =
          "hsl(" + color12.h + "," + color12.s + "%," + color12.l + "%)";
      }
      for (let i = 0; i < elementArray11.length; i++) {
        const element = elementArray11[i];
        element.style.stopColor =
          "hsl(" + color11.h + "," + color11.s + "%," + color11.l + "%)";
      }
    }

    fadeIn.fromTo(
      "#impossible_shape",
      4,
      { opacity: 0 },
      { opacity: 1, ease: Power2.easeInOut }
    );
    upDown
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
        autoAlpha: 0
      });
      tl.to(logo, 1, {
        scale: 1,
        autoAlpha: 1,
        ease: Elastic.easeOut.config(1, 1)
      }).to(logo, 1, {
        scale: 0,
        autoAlpha: 0,
        ease: Elastic.easeOut.config(1, 1)
      });
      tl.timeScale(0.75);
    });
  },
  hamChange() {
    let tlTop;
    let tlBottom;
    return () => {
      if(!tlTop) {
        tlTop = new TimelineMax({ paused: true })
        .to("#topline", 0.2, { y: 7 })
        .to("#topline", 0.2, {
          rotation: "45deg",
          transformOrigin: "50% 50%",
          ease: Power2.easeInOut
        }).reversed(true);
      }
      if(!tlBottom) {
        tlBottom = new TimelineMax({ paused: true })
          .to("#bottomline", 0.2, { y: -7 })
          .to(["#bottomline", "#middleline"], 0.2, {
            rotation: "-45deg",
            transformOrigin: "50% 50%",
            ease: Power2.easeInOut
          }).reversed(true);
      }
      tlTop.reversed() ? tlTop.play() : tlTop.reverse();
      tlBottom.reversed() ? tlBottom.play() : tlBottom.reverse();
    }
  }
};
