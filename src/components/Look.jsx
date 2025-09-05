import React from "react";
import LookImage from "./LookImage";
import LookVideo from "./LookVideo";

function Look({ look, onNext, isActive }) {
  if (look.type === "image")
    return <LookImage look={look} onNext={onNext} isActive={isActive} />;
  if (look.type === "video")
    return <LookVideo look={look} onNext={onNext} isActive={isActive} />;
  return null;
}

export default Look;
