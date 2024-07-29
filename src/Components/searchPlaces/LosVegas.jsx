import React from "react";
import Img6 from "../../assets/places/place6.jpg";
import PlaceCard from "../Places/PlaceCard";

const PlacesData = [
  {
    img: Img6,
    title: "Las Vegas",
    location: "Nevada",
    description:
      "Las Vegas is an internationally renowned major resort city, known primarily for its gambling, shopping, fine dining, entertainment, and nightlife, with most venues centered on downtown Las Vegas and more to the Las Vegas Strip just outside city limits.",
    price: 6200,
    type: "Cultural Relax",
  }
];

const LasVegas = ({ handleOrderPopup }) => {
  return (
    <><br /><br /><br />
      <div className="dark:bg-white-900 dark:text-black/100 bg-black-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Las Vegas
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

export default LasVegas;
