import React from "react";
import { BookIcon, VideoIcon } from "./SvgLib";
import styled from "styled-components";

const Container = styled.div`
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: hsla(205, 57%, 25%, 1);
    position: absolute;
    opacity: 0;
    transition: all 0.15s ease-in-out;
  }

  &:hover {
    transform: scale(1.02);
    &:after {
      opacity: 1;
    }
  }

  transition: all 0.15s ease-in-out;
  position: relative;
  box-shadow: 1px 2px 5px -1px hsla(203, 58%, 6%, 1);
  display: flex;
  border-radius: 2px;
  padding: 2rem 2.2rem;
  background: linear-gradient(-4deg, hsla(205, 57%, 5%, 1), hsl(205, 73%, 14%));
  flex-basis: 367px;
  min-height: 134px;
  word-wrap: break-word;
  flex-direction: column;
  justify-content: center;
  p {
    padding-bottom: 5px;
    z-index: 2;
  }
  a {
    color: lightblue;
    word-break: break-all;
    font-size: 10px;
    z-index: 2;
    line-height: 1.5;
  }
  .articleIcon > svg {
    position: absolute;
    z-index: 2;
    top: 6px;
    right: 6px;
    @media (min-width: 400px) {
      top: 15px;
      right: 15px;
    }
  }
`;

const Article = ({ title, link, type }) => (
  <Container>
    <div className="articleIcon">
      {type === "article" && <BookIcon />}
      {type === "video" && <VideoIcon />}
    </div>
    <p>{title}</p>
    <a rel="noopener noreferrer" arget="_blank" href={link}>
      {link}
    </a>
  </Container>
);

export default Article;
