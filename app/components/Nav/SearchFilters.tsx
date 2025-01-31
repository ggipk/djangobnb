import React from "react";
import { Search } from "lucide-react";

const SearchFilters = () => {
  return (
    <div className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full">
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between">
          <div className="cursor-pointer w-[250px] h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">where?</p>
            <p className="text-sm">Wanted location</p>
          </div>
          {/* 분리  */}
          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">check-in</p>
            <p className="text-sm">Add dates</p>
          </div>
          {/* 분리  */}
          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">check-out</p>
            <p className="text-sm">Add dates</p>
          </div>
          {/* 분리  */}
          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Who?</p>
            <p className="text-sm">Add guests</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="cursor-pointer p-2 lg:p-4 bg-airbnb hover:bg-airbnbDark transition rounded-full text-white">
          <Search width={16} height={16} />
        </div>
      </div>
    </div>
  );
};
export default SearchFilters;
