import React from "react";
import Img4 from "../../assets/places/place4.jpg";
import PlaceCard from "../Places/PlaceCard";

const PlacesData = [
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description: "This vibrant city is known for its yacht-studded harbour, superb beaches, and the iconic Opera House with its towering sail structure.",
    price: 6700,
    type: "Cultural Relax",
  }
];

const Places = ({ handleOrderPopup }) => {
  return (
    <><br /><br /><br />
      <div className="dark:bg-white-900 dark:text-black/100 bg-black-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Sydney
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
