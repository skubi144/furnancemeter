import React from "react";
import "./styles.scss";
interface VideoBackgroundProps {
  videoSource: string;
  videoLoop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
}
const VideoBackground = ({
  autoPlay = true,
  muted = true,
  videoSource,
  videoLoop,
}: VideoBackgroundProps) => {
  console.log(videoSource);
  return (
    <video
      className="videoBG"
      autoPlay={autoPlay}
      muted={muted}
      loop
    >
      <source src={videoSource} type="video/mp4"></source>
    </video>
  );
};
export default VideoBackground;
