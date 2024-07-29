import React from "react";
import Img3 from "../../assets/places/water.jpg";
import PlaceCard from "../Places/PlaceCard";

const PlacesData = [
  {
    img: Img3,
    title: "Maldives",
    location: " South Asia",
    description:
      "With its stunning islands, mesmerizing beaches, and turquoise waters, Maldives is famous for its exciting water activities. If you are an adventure enthusiast, the variety of water sports will make you want to stay here forever..",
    price: 6200,
    type: "Cultural Relax",
  }
];

const Places = ({ handleOrderPopup }) => {
  return (
    <><br /><br /><br />
      <div className="dark:bg-white-900 dark:text-black/100 bg-black-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Maldives
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
