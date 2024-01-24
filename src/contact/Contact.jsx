import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xqkreaww");

  if (state.succeeded) {
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("succesful");
  };
  return (
    <section
      className="min-h-dvh pt-16 md:pt-24 items-center flex flex-col justify-center px-8"
      id="contact"
    >
      <div className="px-4 py-4 shadow-md start:max-md:w-full md:min-w-[40rem] rounded-sm bg-[#fafafa]">
        <div className="flex flex-row gap-1">
          <p className="text-[1.4rem] font-bold pb-4">Contact Us</p>
          <img src="public/dog_paw.png" className="w-5 h-5"></img>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            id="name"
            type="name"
            name="name"
            placeholder="Name"
            className="px-3 py-3 bg-[#f3f3f3] rounded-sm outline-main"
            required
          />
          <ValidationError prefix="Name" field="Name" errors={state.errors} />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="px-3 py-3 bg-[#f3f3f3] rounded-sm outline-main"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <input
            id="subject"
            type="subject"
            name="subject"
            placeholder="Subject"
            className="px-3 py-3 bg-[#f3f3f3] rounded-sm outline-main"
            required
          />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
          <textarea
            id="message"
            name="message"
            placeholder="Messages"
            className="px-3 pt-3 pb-10 bg-[#f3f3f3] rounded-sm outline-main"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-[#7ab730] hover:bg-[#619b26] py-2 rounded-sm text-white font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
