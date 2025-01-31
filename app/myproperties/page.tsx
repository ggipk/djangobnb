import React from "react";
import PropertyList from "@/app/components/properties/PropertyList";

const MyPropertiesPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="my-6 text-2xl">MyProperties</div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <PropertyList />
      </div>
    </main>
  );
};
export default MyPropertiesPage;
