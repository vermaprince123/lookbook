/**
 * ProgressBar component for displaying a timed progress bar.
 * - Fills over the specified duration.
 * - Calls onComplete when finished.
 * - Optionally scrolls into view when complete.
 *
 * @param {Object} props
 * @param {number} props.duration - Duration in milliseconds for the progress bar to fill.
 * @param {Function} props.onComplete - Callback when progress reaches 100%.
 * @returns {JSX.Element}
 */

import  { useEffect, useState, useRef } from "react";

function ProgressBar({ duration, onComplete }) {
  const [progress, setProgress] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, duration / 100);

    return () => clearInterval(interval);
  }, [duration]);

  // Call onComplete safely after render using useEffect
  useEffect(() => {
    if (progress >= 100 && onComplete) {
      const timeout = setTimeout(() => onComplete(), 0); // schedule after render
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  // Auto-scroll when progress reaches 100
  useEffect(() => {
    if (progress >= 100 && barRef.current) {
      barRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [progress]);

  return (
    <div className="progress-bar-container" ref={barRef}>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}

export default ProgressBar;
