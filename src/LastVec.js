import React from "react";
import styled from "styled-components";

const LastVecContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 2;
  overflow: hidden;
`;

const LastVec = () => {
  return (
    <LastVecContainer>
      <svg
        width="2600px"
        height="1900px"
        style={{
          transform: "translate(-1px, 3px)"
        }}
        viewBox="0 0 1282 1424"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.499495 602.5L0 1424H1282.5L1282 0L0.499495 602.5Z"
          fill="url(#paint122_linear)"
        />
        <defs>
          <linearGradient
            id="paint122_linear"
            x1="641"
            y1="1423"
            x2="1354.72"
            y2="-49.7255"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="1" stopColor="#47B2FF" />
          </linearGradient>
        </defs>
      </svg>
    </LastVecContainer>
  );
};

export default LastVec;
