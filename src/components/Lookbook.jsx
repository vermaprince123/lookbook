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
import look1Video from "../assets/videos/look1.mp4";

/**
 * Array of look objects containing image/video sources and product annotations.
 * @type {Array<{id: number, type: string, src: string, annotations: Array}>}
 */
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
  const navigate = useNavigate();
  const slidesRef = useRef(null);

  /**
   * Advances to the next look in the list.
   */
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % looksData.length);
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
      {looksData.map((look, idx) => (
        <div
          className="slide"
          key={look.id}
          style={{
            height: "100vh",
            scrollSnapAlign: "start",
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
  );
}

export default Lookbook;
