/**
 * Lookbook component for displaying a series of looks (images/videos) with annotations.
 * - Renders each look as a full-screen slide.
 * - Supports auto-scroll to the active slide.
 * - Allows manual scroll by user.
 * - Handles navigation to product detail pages via annotation clicks.
 * - Uses React Router for navigation.
 */

import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Look from "./Look";

import { MOCK_PRODUCTS } from "../mock/products";

/**
 * Array of look objects containing image/video sources and product annotations.
 * @type {Array<{id: number, type: string, src: string, annotations: Array}>}
 */


function Lookbook() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const slidesRef = useRef(null);

  /**
   * Advances to the next look in the list.
   */
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MOCK_PRODUCTS.length);
  };

  // Auto-scroll to current slide when index changes
  useEffect(() => {
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
      {MOCK_PRODUCTS.map((look, idx) => (
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
