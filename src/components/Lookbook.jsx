import React, { useState, useRef, useEffect } from "react";
import Look from "./Look";
import look1 from "../assets/images/look1.jpg";
import look2 from "../assets/images/look2.jpg";
import look3 from "../assets/images/look3.jpg";

import look1Video from "../assets/videos/look1.mp4";

const looksData = [
  {
    id: 1,
    type: "image",
    src: look1,
    annotations: [{ x: 50, y: 30, product: { id: 101, name: "Shirt" } }],
  },
  {
    id: 2,
    type: "image",
    src: look2,
    annotations: [{ x: 50, y: 30, product: { id: 101, name: "Shirt" } }],
  },
  {
    id: 3,
    type: "image",
    src: look3,
    annotations: [{ x: 50, y: 30, product: { id: 101, name: "Shirt" } }],
  },

  {
    id: 4,
    type: "video",
    src: look1Video,
    annotations: [],
  },
];
function Lookbook() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % looksData.length);
  };

  return (
    <div className="lookbook-slider">
      <div
        className="slides"
        style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
      >
        {looksData.map((look, idx) => (
          <div className="slide" key={look.id}>
            <Look
              look={look}
              onNext={handleNext}
              isActive={idx === currentIndex} // Only current slide is active
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lookbook;
