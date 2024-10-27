import React from "react";

export const Events = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <span className="text-3xl font-bold text-purple-900">EVENTS</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        <div className="flex flex-col items-center">
          <div className="picture mb-2">
            <img
              src="/assets/music.png"
              alt="Music"
              className="w-full h-auto"
            />
          </div>
          <span className="label text-lg font-medium">Music</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="picture mb-2">
            <img
              src="/assets/fineArts.png"
              alt="Fine Arts"
              className="w-full h-auto"
            />
          </div>
          <span className="label text-lg font-medium">Fine Arts</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="picture mb-2">
            <img
              src="/assets/theatre.png"
              alt="Theatre"
              className="w-full h-auto"
            />
          </div>
          <span className="label text-lg font-medium">Theatre</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="picture mb-2">
            <img
              src="/assets/dance.png"
              alt="Dance"
              className="w-full h-auto"
            />
          </div>
          <span className="label text-lg font-medium">Dance</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="picture mb-2">
            <img
              src="/assets/literary.png"
              alt="Literary"
              className="w-full h-auto"
            />
          </div>
          <span className="label text-lg font-medium">Literary</span>
        </div>
      </div>
    </div>
  );
};
