const features = [
  { title: 'Fast', description: 'Lightning-fast performance', icon: '⚡' },
  { title: 'Secure', description: 'Top-notch security', icon: '🔒' },
  { title: 'Scalable', description: 'Easily scalable for growth', icon: '📈' },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <span className="text-5xl">{feature.icon}</span>
              <h3 className="text-xl font-bold my-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;