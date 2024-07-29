import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Dubai Creek",
    location: "Dubai",
    description: "Located in the heart of Dubai, the Creek separates two major districts that have played a big role in the transformation of Dubai into the megacity it is today; Deira and Bur Dubai.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Delhi",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Maldives",
    location: " South Asia",
    description:
      "With its stunning islands, mesmerizing beaches, and turquoise waters, Maldives is famous for its exciting water activities. If you are an adventure enthusiast, the variety of water sports will make you want to stay here forever..",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description: "This vibrant city is known for its yacht-studded harbour, superb beaches, and the iconic Opera House with its towering sail structure.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
      "Located in the state of California, Los Angeles is the second most populous city in the United States, preceded only by New York.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Las Vegas",
    location: "Nevada",
    description:
      "Las Vegas is an internationally renowned major resort city, known primarily for its gambling, shopping, fine dining, entertainment, and nightlife, with most venues centered on downtown Las Vegas and more to the Las Vegas Strip just outside city limits.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-white-900 dark:text-black/100 bg-black-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
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
