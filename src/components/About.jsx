import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-600">About Us</h2>
          <p className="text-gray-700 text-lg mb-4">
            We are dedicated to delivering the best solutions for your needs. Our team works tirelessly to ensure the highest quality and customer satisfaction.
          </p>
          <p className="text-gray-700 text-lg">
            Join thousands of customers who trust us to achieve their goals and dreams.
          </p>
        </div>
        <div>
          <Image
            src="/images/team.jpg" // Substitua com o caminho da sua imagem
            alt="Our Team"
            width={500}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
