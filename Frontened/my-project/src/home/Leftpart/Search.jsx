import React from "react";
import { FiSearch } from "react-icons/fi";

function Search() {
  return (
    <div>
      <div className="h-[10vh]">
        <div className="px-6 py-4">
          <form action="">
            <div className="flex items-center gap-3">
              {/* Input container */}
              <label className="flex items-center w-full rounded-xl bg-slate-800 px-4 py-1 border border-slate-600 focus-within:ring-2 focus-within:ring-blue-500 shadow-md transition-all duration-300">
                <input
                  type="text"
                  placeholder="Search"
                  className="ml-3 bg-transparent text-white placeholder-gray-400 w-full outline-none"
                />
              </label>
              <button className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-full duration-300">
                <FiSearch className="text-4xl p-2 hover:bg-gray-600 rounded-full duration-300" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
