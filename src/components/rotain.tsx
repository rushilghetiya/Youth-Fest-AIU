import React from "react";

const RotatingFlowers: React.FC<{
  rotatingImage: string; // Path to the rotating image
  staticImage: string; // Path to the static image
  animationDuration?: string;
  size: string; // Single size value to control the component's size
}> = ({
  rotatingImage,
  staticImage,
  animationDuration = "10s", // Default rotation speed
  size, // Single size value (e.g., "450px", "50%")
}) => {
  // Parse size for responsive adjustment
  const isPercentage = size.endsWith("%");
  const isViewportUnit = size.endsWith("vw") || size.endsWith("vh");

  const rotatingImageSize = {
    width: isPercentage || isViewportUnit ? size : `${size}`,
    height: isPercentage || isViewportUnit ? size : `${size}`,
  };

  // Static image size is calculated relative to rotating image
  const staticImageSize = {
    width:
      isPercentage || isViewportUnit
        ? "auto"
        : `${(parseInt(size) * 250) / 450}px`, // Scale proportionally
    height:
      isPercentage || isViewportUnit
        ? "auto"
        : `${(parseInt(size) * 250) / 450}px`, // Same scaling
  };

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: rotatingImageSize.width,
        height: rotatingImageSize.height,
      }}
    >
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      {/* Rotating Image */}
      <img
        src={rotatingImage}
        alt="Rotating Image"
        className="absolute object-contain"
        style={{
          animation: `spin ${animationDuration} linear infinite`,
          width: rotatingImageSize.width,
          height: rotatingImageSize.height,
        }}
      />

      {/* Static Image */}
      <img
        src={staticImage}
        alt="Static Image"
        className="absolute object-contain"
        style={{
          zIndex: 1, // Ensure static image stays above
          width: staticImageSize.width,
          height: staticImageSize.height,
        }}
      />
    </div>
  );
};

export default RotatingFlowers;
