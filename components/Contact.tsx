const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-primaryColor font-semibold flex items-center tracking-wide">
        04. What’s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Got questions or just want to connect? Reach out—I’m here to chat!
      </p>

      <a href="mailto:pujashm6@gmail.com">
        <button className="w-40 h-14 border border-primaryColor mt-6 font-titleFont text-sm text-primaryColor tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello!
        </button>
      </a>
    </section>
  );
};

export default Contact;
