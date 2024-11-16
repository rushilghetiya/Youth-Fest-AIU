import React from "react";

const RotatingFlowers: React.FC<{
  rotatingImage: string; // Path to the rotating image
  staticImage: string; // Path to the static image
  animationDuration?: string;
  size: string; // Single size value to control the component's size (can be "auto", "50%", "100%", or a specific value like "450px")
}> = ({
  rotatingImage,
  staticImage,
  animationDuration = "10s", // Default rotation speed
  size, // Single size value (can be auto, % or specific px size)
}) => {
  // Convert `size` to a responsive value
  const isPercentage = size.endsWith("%");
  const isViewportUnit = size.endsWith("vw") || size.endsWith("vh");

  const rotatingImageSize = {
    width: isPercentage ? size : isViewportUnit ? size : `${size}`,
    height: isPercentage ? size : isViewportUnit ? size : `${size}`,
  };

  // Ratio between rotating and static images (rotating: static)
  const staticImageSize = {
    width:
      isPercentage || isViewportUnit
        ? "auto"
        : `${(parseInt(size) * 250) / 450}px`, // Static image size based on the ratio
    height:
      isPercentage || isViewportUnit
        ? "auto"
        : `${(parseInt(size) * 250) / 450}px`, // Same ratio for height
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
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

          /* Media Queries for responsive design */
          @media (max-width: 768px) {
            .rotating-image {
              width: 60vw; /* Adjust width for smaller screens */
              height: 60vw; /* Adjust height for smaller screens */
            }
          }

          @media (max-width: 480px) {
            .rotating-image {
              width: 80vw; /* Even smaller screens */
              height: 80vw;
            }
          }
        `}
      </style>

      {/* Rotating Image */}
      <img
        src={rotatingImage}
        alt="Rotating Image"
        className="rotating-image absolute object-contain"
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
          zIndex: 1, // Ensures it stays on top
          width: staticImageSize.width,
          height: staticImageSize.height,
        }}
      />
    </div>
  );
};

export default RotatingFlowers;
