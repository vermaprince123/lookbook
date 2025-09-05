import React, { useRef, useEffect, useState } from "react";

function LookVideo({ look, onNext, isActive }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) video.play();
    else video.pause();

    const handleEnded = () => {
      if (onNext) onNext();
    };
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [isActive, onNext]);

  return (
    <div className="look-video-container">
      <video ref={videoRef} src={look.src} muted={muted} playsInline />
      <button onClick={() => setMuted((prev) => !prev)}>
        {muted ? "Unmute" : "Mute"}
      </button>
    </div>
  );
}

export default LookVideo;
