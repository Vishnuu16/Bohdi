import React from "react";

const ExperienceSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 px-6 py-10 bg-white">
      {/* Left Image */}
      <div className="relative">
        <img
          src="./src/assets/126768600-handsome-young-indian-man-using-mobile-phone-at-street.jpg"
          alt="Team working"
          className="rounded-xl w-full max-w-md"
        />

        {/* Badge */}
        <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg text-center">
          <h3 className="text-2xl font-bold leading-none">12+</h3>
          <p className="text-xs mt-1">Year Experience</p>
        </div>
      </div>

      {/* Right Image */}
      <div>
        <img
          src="./src/assets/126768600-handsome-young-indian-man-using-mobile-phone-at-street.jpg"
          alt="Discussion"
          className="rounded-xl w-full max-w-md border-4 border-white shadow-md"
        />
      </div>
    </div>
  );
};

export default ExperienceSection;
