const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Get in Touch</h2>
        <form className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-4 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-4 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-4 p-4 border rounded-lg"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;