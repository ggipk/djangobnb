import React from "react";
import { HandPlatter } from "lucide-react";

const Categories = () => {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <HandPlatter width={20} height={20} />
        <span className="text-sm">beach</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <HandPlatter width={20} height={20} />
        <span className="text-sm">Villas</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <HandPlatter width={20} height={20} />
        <span className="text-sm">Cabins</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <HandPlatter width={20} height={20} />
        <span className="text-sm">Tiny house</span>
      </div>
    </div>
  );
};
export default Categories;
