/**
 * Lookbook component for displaying a series of looks (images/videos) with annotations.
 * - Renders each look as a full-screen slide.
 * - Supports auto-scroll to the active slide.
 * - Allows manual scroll by user.
 * - Handles navigation to product detail pages via annotation clicks.
 * - Uses React Router for navigation.
 */

import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Look from "./Look";
import look1 from "../assets/images/look1.jpg";
import look2 from "../assets/images/look2.jpg";
import look3 from "../assets/images/look3.jpg";
import look5 from "../assets/images/look5.jpg";
import look6 from "../assets/images/look6.jpg";
import look7 from "../assets/images/look7.jpg";
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
  {
    id: 5,
    type: "image",
    src: look5,
    annotations: [{ x: 50, y: 30, product: { id: 101, name: "Shirt" } }],
  },
  {
    id: 6,
    type: "image",
    src: look6,
    annotations: [{ x: 50, y: 30, product: { id: 101, name: "Shirt" } }],
  },
  {
    id: 7,
    type: "image",
    src: look7,
     annotations: [{ x: 50, y: 30, product: { id: 101, name: "Shirt" } }],
  },
];

const groups = [
  [looksData[0], looksData[1], looksData[2], looksData[3]],
  [looksData[5], looksData[6], looksData[4]],
];

function Lookbook() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const slidesRef = useRef(null);

  /**
   * Advances to the next look in the list.
   */
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % groups.length);
  };

  // Auto-scroll to current slide when index changes
  React.useEffect(() => {
    if (slidesRef.current) {
      const slide = slidesRef.current.children[currentIndex];
      if (slide) {
        slide.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [currentIndex]);

  /**
   * Navigates to the product detail page for the given product ID.
   * @param {number} productId
   */
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div
      className="lookbook-slider"
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
      ref={slidesRef}
    >
      {groups.map((group, idx) => (
        <div
          className="slide"
          key={idx}
          style={{
            height: "100vh",
            scrollSnapAlign: "start",
          }}
        >
          <div
            className="horizontal-slider"
            style={{
              overflowX: "scroll",
              scrollSnapType: "x mandatory",
              display: "flex",
              height: "100%",
            }}
          >
            {group.map((look, lookIdx) => (
              <div
                key={look.id}
                style={{
                  width: "100vw",
                  flexShrink: 0,
                  scrollSnapAlign: "start",
                  height: "100%",
                }}
              >
                <Look
                  look={look}
                  onNext={handleNext}
                  isActive={idx === currentIndex}
                  onProductClick={handleProductClick}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Lookbook;
