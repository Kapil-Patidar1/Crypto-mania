import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-20 bg-[#14161A] flex items-center justify-center">
        <div className="h-10 w-10/12 flex items-center justify-between">
          <h3 className="text-2xl text-yellow-300 font-bold">Crypto Hunter</h3>
          <div>
            <button className="text-white border w-24 px-5 py-3 flex items-center justify-between">
              INR
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                fill="currentColor"
                // areaHidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
