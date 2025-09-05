/**
 * LookVideo component for rendering a video look with play/pause and mute/unmute controls.
 * Automatically plays the video when active and pauses when inactive.
 * Calls onNext when the video ends.
 *
 * @param {Object} props
 * @param {Object} props.look - The look object containing src for the video.
 * @param {Function} props.onNext - Callback to advance to the next look when video ends.
 * @param {boolean} props.isActive - Whether this look is currently active.
 * @returns {JSX.Element}
 */

import  { useRef, useEffect, useState } from "react";

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
