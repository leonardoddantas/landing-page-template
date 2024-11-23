const pricingPlans = [
  { name: 'Basic', price: '$19/mo', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
  { name: 'Pro', price: '$49/mo', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
  { name: 'Enterprise', price: '$99/mo', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'] },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Pricing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-4xl font-bold my-4">{plan.price}</p>
              <ul className="text-gray-600">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">- {feature}</li>
                ))}
              </ul>
              <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;