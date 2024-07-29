import React from "react";
import Img1 from "../../assets/places/boat.jpg";
import PlaceCard from "../Places/PlaceCard";

const PlacesData = [
  {
    img: Img1,
    title: "Dubai Creek",
    location: "Dubai",
    description: "Located in the heart of Dubai, the Creek separates two major districts that have played a big role in the transformation of Dubai into the megacity it is today; Deira and Bur Dubai.",
    price: 6700,
    type: "Cultural Relax",
  }
];

const Dubai = ({ handleOrderPopup }) => {
  return (
    <>
    <br /><br /><br />
      <div className="dark:bg-white-900 dark:text-black/100 bg-black-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Dubai Creek
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

export default Dubai;
