import React from "react";
import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";

const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[65vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/beach_1.jpg"
          alt="beach_1"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 ">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl ">Property name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            4 guests - 2 bedroom{" "}
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/profile_pic_1.jpg"
              alt="profile"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p>
              <strong>개새끼</strong> 개집 주인
            </p>
          </div>
          <hr />
          <p className="mt-6 text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet
            consectetur facere ipsum saepe unde veniam voluptatem? Adipisci,
            quia, voluptate?
          </p>
        </div>
        <ReservationSidebar />
      </div>
    </main>
  );
};
export default PropertyDetailPage;
