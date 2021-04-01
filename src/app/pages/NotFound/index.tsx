import React from "react";
import VideoBackground from "../../shared/components/VideoBackground";
import campfire from "../../assets/vids/fire2.mp4";
import "./styles.scss";
import { Link } from "react-router-dom";
import "../../shared/components/Button/styles.scss";
import { Title } from "../../shared/components";
export default () => {
  return (
    <section className="notFound">
      <VideoBackground videoSource={campfire} />
      <div className="notFound__elements">
        <Title>Żądana strona nie została odnaleziona</Title>
        <Link
          className="btn btn--fontBlack btn--gradientOrangeAnimation btn--marginBig btn--paddingNormal btn--width50 btn--textCenter btn--fontNormal"
          to="/"
        >
          Powrót
        </Link>
      </div>
    </section>
  );
};
