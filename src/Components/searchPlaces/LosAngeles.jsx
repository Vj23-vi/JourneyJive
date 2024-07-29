import React from "react";
import Img5 from "../../assets/places/place5.jpg";
import PlaceCard from "../Places/PlaceCard";

const PlacesData = [
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
      "Located in the state of California, Los Angeles is the second most populous city in the United States, preceded only by New York.",
    price: 6700,
    type: "Cultural Relax",
  }
];

const LosAngeles = ({ handleOrderPopup }) => {
  return (
    <><br /><br /><br />
      <div className="dark:bg-white-900 dark:text-black/100 bg-black-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Los Angeles
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

export default LosAngeles;
