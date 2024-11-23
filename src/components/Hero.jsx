const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Product</h1>
        <p className="text-lg mb-8">Experience the future of innovation and growth.</p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;