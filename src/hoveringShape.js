import React, { Component } from "react";
import styled from "styled-components";

import animation from "./Animation";

const ShapeContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  display: flex;
  align-items: center;
  background-color: black;
  color: rgb(39, 170, 225);
  color: rgb(0, 106, 147);
  color: rgb(184, 200, 231);
  color: rgb(0, 138, 176);
  justify-content: center;
  overflow: hidden;
  #impossible_shape {
    width: 500px;
    max-height: 600px;
  }
  @media (max-width: 400px) {
    #impossible_shape {
      transform: rotate(90deg);
    }
  }
`;

// const color1 = "rgb(39, 170, 225)";
// const color2 = "rgb(0, 106, 147)";
// const color1_2 = "rgb(184, 200, 231)";
// const color1_1 = "rgb(0, 138, 176)";

let color1 = `hsla(${198}, 76%, 52%, 1)`;
let color2 = `hsla(${197}, 100%, 29%, 1)`;
let color1_2 = `hsla(${220}, 49%, 81%, 1)`;
let color1_1 = `hsla(${193}, 100%, 35%, 1)`;

class HoveringShapeBackground extends Component {
  componentDidMount() {
    animation.levitate();
  }

  render() {
    return (
      <ShapeContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="impossible_shape"
          preserveAspectRatio="xMinYMin meet"
          viewBox="0 0 380 300"
        >
          <g id="Layer_2">
            <linearGradient
              id="XMLID_3_"
              x1="148.7658"
              x2="177.9494"
              y1="165.9371"
              y2="165.9371"
              gradientUnits="userSpaceOnUse"
            >
              <stop className="color1" offset="0" stopColor={color1} />
              <stop className="color2" offset="1" stopColor={color2} />
            </linearGradient>
            <path
              id="XMLID_17_"
              fill="url(#XMLID_3_)"
              d="M148.8 179.3l29.1-15.9-19-10.9-9.8 6.1-.1 20"
            />
            <linearGradient
              id="XMLID_4_"
              x1="10.7453"
              x2="104.8996"
              y1="105.3085"
              y2="105.3085"
              gradientUnits="userSpaceOnUse"
            >
              <stop className="color1" offset="0" stopColor={color1} />
              <stop className="color2" offset="1" stopColor={color2} />
            </linearGradient>
            <path
              id="XMLID_12_"
              fill="url(#XMLID_4_)"
              d="M10.7 66.8l.3 32.8 78.8 44.2.1-15.4 15-8.7-94.2-52.9"
            />
            <linearGradient
              id="XMLID_18_"
              x1="158.6459"
              x2="202.7932"
              y1="149.3606"
              y2="149.3606"
              gradientUnits="userSpaceOnUse"
            >
              <stop className="color1" offset="0" stopColor={color1} />
              <stop className="color2" offset="1" stopColor={color2} />
            </linearGradient>
            <path
              id="XMLID_16_"
              fill="url(#XMLID_18_)"
              d="M202.8 146.5l-18.4-10.2-25.8 16.3 17.5 9.9 26.7-16"
            />
            <linearGradient
              id="XMLID_19_"
              x1="10.7453"
              x2="308.1186"
              y1="110.0881"
              y2="110.0881"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" className="color12" stopColor={color1_2} />
              <stop offset="1" className="color11" stopColor={color1_1} />
            </linearGradient>
            <path
              id="XMLID_9_"
              fill="url(#XMLID_19_)"
              d="M116.6 38.4l137.2 77.5L149 178.6l.2 32.3 158.9-90.3L107.6 9.3 10.7 66.8l92.7 52.1 25.8-15.4-62.8-35.6z"
            />
            <linearGradient
              id="XMLID_20_"
              x1="117.9499"
              x2="309.3232"
              y1="184.4378"
              y2="184.4378"
              gradientUnits="userSpaceOnUse"
            >
              <stop className="color1" offset="0" stopColor={color1} />
              <stop className="color2" offset="1" stopColor={color2} />
            </linearGradient>
            <path
              id="XMLID_15_"
              fill="url(#XMLID_20_)"
              d="M119 263.5l189.6-110.2.7-33.3-157.9 88.8v-48.6l60.2-35.5-33.7-19.3-60 39.9z"
            />
            <linearGradient
              id="XMLID_21_"
              x1="87.7661"
              x2="182.1812"
              y1="117.6916"
              y2="117.6916"
              gradientUnits="userSpaceOnUse"
            >
              <stop className="color1" offset="0" stopColor={color1} />
              <stop className="color2" offset="1" stopColor={color2} />
            </linearGradient>
            <path
              id="XMLID_11_"
              fill="url(#XMLID_21_)"
              d="M182.2 107.8l-64.3 37.5-30.1-17.6 15.3-8.7 26.9-15.9L151.4 90z"
            />
            <linearGradient
              id="XMLID_22_"
              x1="66.3787"
              x2="117.221"
              y1="60.9634"
              y2="60.9634"
              gradientUnits="userSpaceOnUse"
            >
              <stop className="color1" offset="0" stopColor={color1} />
              <stop className="color2" offset="1" stopColor={color2} />
            </linearGradient>
            <path
              id="XMLID_13_"
              fill="url(#XMLID_22_)"
              d="M116.9 70l-.3-31.6-50.2 29.5L94 83.6l23.2-13.8"
            />
            <linearGradient
              id="XMLID_23_"
              x1="87.7661"
              x2="118.9637"
              y1="195.563"
              y2="195.563"
              gradientUnits="userSpaceOnUse"
            >
              <stop className="color1" offset="0" stopColor={color1} />
              <stop className="color2" offset="1" stopColor={color2} />
            </linearGradient>
            <path
              id="XMLID_14_"
              fill="url(#XMLID_23_)"
              d="M87.8 127.7l.1 13.4.9 105.9 30.2 16.5-1.1-118.2-29.4-17.2"
            />
            <linearGradient
              id="XMLID_24_"
              x1="200.8561"
              x2="362.9995"
              y1="44.4151"
              y2="44.4151"
              gradientUnits="userSpaceOnUse"
            >
              <stop className="color1" offset="0" stopColor={color1} />
              <stop className="color2" offset="1" stopColor={color2} />
            </linearGradient>
            <path
              id="XMLID_1_"
              fill="url(#XMLID_24_)"
              d="M285.4 45.6l-53.6 32.6L200.9 61l82.2-50.4L363 54l-30.1 18.6z"
            />
            <linearGradient
              id="XMLID_25_"
              x1="208.1742"
              x2="335.2464"
              y1="164.9243"
              y2="164.9243"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" className="color12" stopColor={color1_2} />
              <stop offset="1" className="color11" stopColor={color1_1} />
            </linearGradient>
            <path
              id="XMLID_5_"
              fill="url(#XMLID_25_)"
              d="M335.2 285.9l-127-74.4 27.9-16.1 69.5 38.1-.9-144.7-15.8-10.2-1.1-34.6 47.4 26.9z"
            />
            <linearGradient
              id="XMLID_26_"
              x1="231.7969"
              x2="288.8948"
              y1="69.4154"
              y2="69.4154"
              gradientUnits="userSpaceOnUse"
            >
              <stop className="color1" offset="0" stopColor={color1} />
              <stop className="color2" offset="1" stopColor={color2} />
            </linearGradient>
            <path
              id="XMLID_8_"
              fill="url(#XMLID_26_)"
              d="M231.8 78.2l56-34.2 1.1 34.6-27 16.3-29.6-16.4"
            />
            <linearGradient
              id="XMLID_27_"
              x1="317.1634"
              x2="382.5266"
              y1="163.7265"
              y2="176.4318"
              gradientUnits="userSpaceOnUse"
            >
              <stop className="color1" offset="0" stopColor={color1} />
              <stop className="color2" offset="1" stopColor={color2} />
            </linearGradient>
            <path
              id="XMLID_6_"
              fill="url(#XMLID_27_)"
              d="M363 54l1.5 215.3-29.3 16.6v-215z"
            />
            <linearGradient
              id="XMLID_28_"
              x1="236.0649"
              x2="305.5569"
              y1="206.6728"
              y2="206.6728"
              gradientUnits="userSpaceOnUse"
            >
              <stop className="color1" offset="0" stopColor={color1} />
              <stop className="color2" offset="1" stopColor={color2} />
            </linearGradient>
            <path
              id="XMLID_7_"
              fill="url(#XMLID_28_)"
              d="M236.1 195.4l69.5 38.3-.3-31.6-42.1-22.5z"
            />
            <linearGradient
              id="XMLID_29_"
              x1="116.5536"
              x2="253.8357"
              y1="85.7338"
              y2="85.7338"
              gradientUnits="userSpaceOnUse"
            >
              <stop className="color1" offset="0" stopColor={color1} />
              <stop className="color2" offset="1" stopColor={color2} />
            </linearGradient>
            <path
              id="XMLID_10_"
              fill="url(#XMLID_29_)"
              d="M253.8 115.9L116.6 38.4l.3 31.6 108.8 63.1z"
            />
          </g>
        </svg>
      </ShapeContainer>
    );
  }
}

export default HoveringShapeBackground;
