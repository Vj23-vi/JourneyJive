import React, { useRef } from "react";
import "../App.css";
import emailjs from "@emailjs/browser";

const Contactpreactice = () => {

  const showAlert = () => {
    if (
      name.value != "" &&
      email.value != "" &&
      phone.value != "" &&
      message.value != ""
    ) {
      alert("Thank You! for Contacting Us");
    }
  };
  
  const ClearForm = () => {
    form.current.reset();
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_q1yq0sw", "template_rx8sbej", form.current, {
        publicKey: "L6duCqyuzn6ThQ8Mg",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div className=" contactuspage">
        <h1 className="contacth1  my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Contact Us
        </h1>
        <p className="paracontact">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia
          dolores odio sed aut nulla nemo velit molestiae ipsum quisquam vel,
          aspernatur, adipisci accusantium.
        </p>
        <br />

        <div>
          <form ref={form} onSubmit={sendEmail} className="form">
            <input
              className="cinput iname"
              type="text"
              id="name"
              name="from_name"
              required
              placeholder="Enter Your Name"
            />
            <br />

            <input
              className="cinput iemail"
              type="email"
              id="email"
              name="from_email"
              required
              placeholder="Enter Email"
            />
            <br />

            <input
              className="cinput iphone"
              type="text"
              id="phone"
              name="from_contact"
              required
              placeholder="Enter Phone Number"
            />
            <br />

            <textarea
              className=" cinput contacttextarea"
              id="message"
              name="message"
              required
              placeholder="Message here..."
              rows="4"
              cols="50"
            ></textarea>
            <br />
            <button
              className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-20 py-2 rounded-full"
              type="submit"
              value="Send"
              onClick={showAlert}
            >
              Send
            </button>

            <button
              className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-2 py-1 ml-2 rounded-full"
              type="submit"
              value="Send"
              onClick={ClearForm}
            >
              <i class="bi bi-arrow-clockwise"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-clockwise"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
                />
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contactpreactice;
