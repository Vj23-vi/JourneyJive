import React from "react";

const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit
          </h1>

          <div className="rounded-xl ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15138.384847203553!2d73.824665!3d18.4566339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29501a7414509%3A0x87ef539f896dfb0e!2sMass%20IT%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1711194669974!5m2!1sen!2sin"
              width="100%"
              height="360"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
