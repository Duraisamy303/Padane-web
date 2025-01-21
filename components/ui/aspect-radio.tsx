import React, { ReactNode } from "react";

// This component allows you to define an aspect ratio (width/height)
// and wrap any child element inside it (e.g., Image, Video, Div).
interface AspectRatioProps {
  children: ReactNode;
  ratio: number; // Ratio will be width/height (e.g., 16/9)
  className?: string;
}

export const AspectRatio = ({ children, ratio, className }: AspectRatioProps) => {
  const aspectStyle = {
    paddingTop: `${(1 / ratio) * 100}%`, // This ensures the aspect ratio is maintained
  };

  return (
    <div
      className={`relative w-full ${className}`}
      style={aspectStyle}
    >
      <div className="absolute inset-0 w-full h-full">{children}</div>
    </div>
  );
};
