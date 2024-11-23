const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-blue-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p>"Amazing service! Totally recommend it."</p>
            <span className="block mt-4 font-semibold">- John Doe</span>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p>"Exceeded my expectations in every way!"</p>
            <span className="block mt-4 font-semibold">- Jane Smith</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;